import { ethers } from 'ethers';
import * as V2 from './marketplaceV2Types';
export declare const MarketplaceV2ABI: ethers.ContractInterface;
export declare const MarketplaceV2Address = "0x6125fD14b6790d5F66509B7aa53274c93dAE70B9";
export declare class MarketplaceV2 {
    contract: ethers.Contract;
    constructor(providerOrSigner: ethers.providers.Provider | ethers.Signer, address?: string);
    /** @internal */
    onNewListingImpl(callback: (sale: V2.NewBundleListing) => void): void;
    /** @internal */
    onSoldImpl(callback: (bundle: V2.BundleSold) => void): void;
    /** @internal */
    onUnsoldImpl(callback: (bundle: V2.BundleUnsold) => void): void;
    /** @internal */
    onCancelledImpl(callback: (bundle: V2.BundleUnsold) => void): void;
    /** @internal */
    onPriceUpdateImpl(callback: (bundle: V2.BundlePriceUpdate) => void): void;
    /** @internal */
    onDurationExtendedImpl(callback: (sale: V2.DurationExtended) => void): void;
    /** @internal */
    onNewBidImpl(callback: (bid: V2.NewBid) => void): void;
    /** @internal */
    onNewOfferImpl(callback: (offer: V2.NewOffer) => void): void;
    onNewListingAsBundle(callback: (sale: V2.NewBundleListing) => void): void;
    onNewListing(callback: (sale: V2.NewListing) => void): void;
    onSoldAsBundle(callback: (sale: V2.BundleSold) => void): void;
    onSold(callback: (sale: V2.Sold) => void): void;
    onUnsoldAsBundle(callback: (sale: V2.BundleUnsold, cancelled: boolean) => void): void;
    onUnsold(callback: (sale: V2.Unsold, cancelled: boolean) => void): void;
    onPriceUpdate(callback: (sale: V2.BundlePriceUpdate) => void): void;
    onDurationExtended(callback: (extension: V2.DurationExtended) => void): void;
    onNewBid(callback: (bid: V2.NewBid) => void): void;
    onNewOffer(callback: (offer: V2.NewOffer) => void): void;
    getSaleDetails(marketplaceId: ethers.BigNumber): Promise<V2.SaleDetails>;
    getNextMinimumBidOrOffer(marketplaceId: ethers.BigNumber): Promise<ethers.BigNumber>;
}
export default MarketplaceV2;
