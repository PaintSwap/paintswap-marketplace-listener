import { BigNumber } from 'ethers';
export interface BundleBase {
    marketplaceId: BigNumber;
    nfts: Array<string>;
    tokenIds: Array<BigNumber>;
    amountBatches: Array<BigNumber>;
}
export interface BundlePriced extends BundleBase {
    amount: BigNumber;
    pricePerUnit: BigNumber;
    priceTotal: BigNumber;
}
export interface Base {
    marketplaceId: BigNumber;
    collection: string;
    tokenID: BigNumber;
    amountPerBundleUnit: BigNumber;
}
export interface Priced extends Base {
    amount: BigNumber;
    pricePerUnit: BigNumber;
    priceTotal: BigNumber;
}
interface NewListingBase {
    duration: BigNumber;
    isAuction: boolean;
    isNSFW: boolean;
}
export interface NewBundleListing extends BundlePriced, NewListingBase {
}
export interface NewListing extends Priced, NewListingBase {
}
interface SoldBase {
    buyer: string;
    seller: string;
}
export interface BundleSold extends BundlePriced, SoldBase {
}
export interface Sold extends Priced, SoldBase {
}
export interface BundleUnsold extends BundleBase {
}
export interface Unsold extends Base {
}
export interface BundlePriceUpdate {
    marketplaceId: BigNumber;
    price: BigNumber;
}
export interface DurationExtended {
    marketplaceId: BigNumber;
    endTime: BigNumber;
}
export interface NewBid {
    marketplaceId: BigNumber;
    bidder: string;
    bid: BigNumber;
    nextMinimum: BigNumber;
}
export interface NewOffer {
    marketplaceId: BigNumber;
    offerrer: string;
    offer: BigNumber;
    nextMinimum: BigNumber;
}
export declare type SaleDetails = {
    nfts: Array<string>;
    tokenIds: Array<BigNumber>;
    amountBatches: Array<BigNumber>;
    seller: string;
    price: BigNumber;
    startTime: BigNumber;
    endTime: BigNumber;
    maxBidOrOffer: BigNumber;
    maxBidderOrOfferer: string;
    isAuction: boolean;
    amount: BigNumber;
    amountRemaining: BigNumber;
    complete: boolean;
    devFeePercentage: BigNumber;
};
export {};
