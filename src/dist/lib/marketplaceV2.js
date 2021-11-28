"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketplaceV2 = exports.MarketplaceV2Address = exports.MarketplaceV2ABI = void 0;
const ethers_1 = require("ethers");
const PaintSwapMarketplaceV2_json_1 = __importDefault(require("../abi/PaintSwapMarketplaceV2.json"));
exports.MarketplaceV2ABI = PaintSwapMarketplaceV2_json_1.default;
exports.MarketplaceV2Address = '0x6125fD14b6790d5F66509B7aa53274c93dAE70B9';
class MarketplaceV2Utils {
    /** @internal */
    static splitBundleBase(bundle) {
        const result = [];
        const pieces = bundle.nfts.length;
        // Bundles aren't used at the moment, so this loop will be for a single sale
        for (let i = 0; i < pieces; ++i) {
            const base = {
                marketplaceId: bundle.marketplaceId,
                collection: bundle.nfts[i],
                tokenID: bundle.tokenIds[i],
                amountPerBundleUnit: bundle.amountBatches[i],
            };
            result.push(base);
        }
        return result;
    }
    /** @internal */
    static splitBundlePriced(bundle) {
        const base = MarketplaceV2Utils.splitBundleBase(bundle);
        return base.map((value) => {
            return {
                marketplaceId: value.marketplaceId,
                collection: value.collection,
                amountPerBundleUnit: value.amountPerBundleUnit,
                tokenID: value.tokenID,
                amount: bundle.amount.mul(value.amountPerBundleUnit),
                pricePerUnit: bundle.pricePerUnit,
                priceTotal: bundle.priceTotal,
            };
        });
    }
    static splitBundleSold(bundle) {
        return MarketplaceV2Utils.splitBundlePriced(bundle).map((value) => {
            return {
                marketplaceId: value.marketplaceId,
                collection: value.collection,
                amountPerBundleUnit: value.amountPerBundleUnit,
                tokenID: value.tokenID,
                amount: value.amount,
                pricePerUnit: value.pricePerUnit,
                priceTotal: value.priceTotal,
                buyer: bundle.buyer,
                seller: bundle.seller,
            };
        });
    }
    static splitBundleNewSale(bundle) {
        return MarketplaceV2Utils.splitBundlePriced(bundle).map((value) => {
            return {
                marketplaceId: value.marketplaceId,
                collection: value.collection,
                amountPerBundleUnit: value.amountPerBundleUnit,
                tokenID: value.tokenID,
                amount: value.amount,
                pricePerUnit: value.pricePerUnit,
                priceTotal: value.priceTotal,
                duration: bundle.duration,
                isAuction: bundle.isAuction,
                isNSFW: bundle.isNSFW,
            };
        });
    }
    static splitBundleUnsold(bundle) {
        return this.splitBundleBase(bundle);
    }
}
class MarketplaceV2 {
    contract;
    constructor(providerOrSigner, address = exports.MarketplaceV2Address) {
        this.contract = new ethers_1.ethers.Contract(address, exports.MarketplaceV2ABI, providerOrSigner);
    }
    /** @internal */
    onNewListingImpl(callback) {
        this.contract.on('NewSale', (marketplaceId, nfts, tokenIds, amountBatches, price, duration, isAuction, amount, isNSFW, marketplaceURI, searchKeywords, routerAddresses, event) => {
            const bundle = {
                marketplaceId,
                nfts,
                tokenIds,
                amountBatches,
                pricePerUnit: price,
                priceTotal: price.mul(amount),
                duration,
                isAuction,
                amount,
                isNSFW,
            };
            callback(bundle);
        });
    }
    /** @internal */
    onSoldImpl(callback) {
        this.contract.on('Sold', (marketplaceId, nfts, tokenIds, amountBatches, price, buyer, seller, amount, event) => {
            const bundle = {
                marketplaceId,
                nfts,
                tokenIds,
                amountBatches,
                pricePerUnit: price,
                priceTotal: price.mul(amount),
                buyer,
                seller,
                amount,
            };
            callback(bundle);
        });
    }
    /** @internal */
    onUnsoldImpl(callback) {
        this.contract.on('SaleFinished', (marketplaceId, nfts, tokenIds, amountBatches, failedSellAll, event) => {
            if (failedSellAll) {
                const bundle = {
                    marketplaceId,
                    nfts,
                    tokenIds,
                    amountBatches,
                };
                callback(bundle);
            }
        });
    }
    /** @internal */
    onCancelledImpl(callback) {
        this.contract.on('CancelledSale', (marketplaceId, nfts, tokenIds, amountBatches, event) => {
            const bundle = {
                marketplaceId,
                nfts,
                tokenIds,
                amountBatches,
            };
            callback(bundle);
        });
    }
    /** @internal */
    onPriceUpdateImpl(callback) {
        // Not handled as individual pieces due to missing amountBatches information
        this.contract.on('UpdatePrice', (marketplaceId, price, nfts, tokenIds, event) => {
            const bundle = {
                marketplaceId,
                price,
            };
            callback(bundle);
        });
    }
    /** @internal */
    onDurationExtendedImpl(callback) {
        this.contract.on('UpdateEndTime', (marketplaceId, endTime, event) => {
            const extension = {
                marketplaceId,
                endTime,
            };
            callback(extension);
        });
    }
    /** @internal */
    onNewBidImpl(callback) {
        this.contract.on('NewBid', (marketplaceId, bidder, bid, nextMinimum) => {
            const newBid = {
                marketplaceId,
                bidder,
                bid,
                nextMinimum,
            };
            callback(newBid);
        });
    }
    /** @internal */
    onNewOfferImpl(callback) {
        this.contract.on('NewOffer', (marketplaceId, offerrer, offer, nextMinimum) => {
            const newOffer = {
                marketplaceId,
                offerrer,
                offer,
                nextMinimum,
            };
            callback(newOffer);
        });
    }
    onNewListingAsBundle(callback) {
        this.onNewListingImpl(callback);
    }
    onNewListing(callback) {
        this.onNewListingImpl((bundle) => MarketplaceV2Utils.splitBundleNewSale(bundle).forEach(callback));
    }
    onSoldAsBundle(callback) {
        this.onSoldImpl(callback);
    }
    onSold(callback) {
        this.onSoldImpl((bundle) => MarketplaceV2Utils.splitBundleSold(bundle).forEach(callback));
    }
    onUnsoldAsBundle(callback) {
        this.onUnsoldImpl((sale) => callback(sale, false)); // not cancelled
        this.onCancelledImpl((sale) => callback(sale, true)); // cancelled
    }
    onUnsold(callback) {
        this.onUnsoldImpl((bundle) => MarketplaceV2Utils.splitBundleUnsold(bundle).forEach((sale) => callback(sale, false))); // not cancelled
        this.onCancelledImpl((bundle) => MarketplaceV2Utils.splitBundleUnsold(bundle).forEach((sale) => callback(sale, true))); // cancelled
    }
    onPriceUpdate(callback) {
        this.onPriceUpdateImpl(callback);
    }
    onDurationExtended(callback) {
        this.onDurationExtendedImpl(callback);
    }
    onNewBid(callback) {
        this.onNewBidImpl(callback);
    }
    onNewOffer(callback) {
        this.onNewOfferImpl(callback);
    }
    async getSaleDetails(marketplaceId) {
        return this.contract.getSaleDetails(marketplaceId).then((details) => ({
            amount: details.amount,
            amountBatches: details.amountBatches,
            amountRemaining: details.amountRemaining,
            complete: details.complete,
            devFeePercentage: details.devFeePercentage,
            startTime: details.startTime,
            endTime: details.endTime,
            isAuction: details.isAuction,
            maxBidOrOffer: details.maxBidOrOffer,
            maxBidderOrOfferer: details.maxBidderOrOfferer,
            nfts: details.nfts,
            tokenIds: details.tokenIds,
            price: details.price,
            seller: details.seller,
        }));
    }
    async getNextMinimumBidOrOffer(marketplaceId) {
        return this.contract.nextMinimumBidOrOffer(marketplaceId);
    }
}
exports.MarketplaceV2 = MarketplaceV2;
exports.default = MarketplaceV2;
