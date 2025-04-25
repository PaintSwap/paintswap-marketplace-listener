import React, { useEffect } from "react";
import { ethers } from "ethers"
import { Marketplace } from '@paintswap/marketplace-interactions'
import { NewListing, Sold, PriceUpdate, DurationExtended, NewBid, NewOffer, OfferAccepted } from "@paintswap/marketplace-interactions/dist/lib/marketplaceTypes";
import styled from 'styled-components'
import { short, getBalanceNumber, getBalanceString, timeConverter } from '../utils/helpers'
import ChartCard from "./ChartCard";

const provider = new ethers.providers.JsonRpcProvider(
  "https://rpc.soniclabs.com/"
)

const mainUrl = 'https://paintswap.io/sonic/'
const maxFeedCount = 1000 // Max amount of items per stat to keep in memory
const maxChartCount = 500 // Max amount of items per chart to keep in memory

interface NewListingExt extends NewListing {
  time: string
}

interface SoldExt extends Sold {
  time: string
}

interface BundlePriceUpdateExt extends PriceUpdate {
  time: string
}

interface DurationExtendedExt extends DurationExtended {
  time: string
}

interface NewBidExt extends NewBid {
  time: string
}

interface NewOfferExt extends NewOffer {
  time: string
}

interface OfferAcceptedExt extends OfferAccepted {
  time: string
}

const marketplace = new Marketplace(provider)

const breakpoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
  xxl: 2560,
}

const mediaQueries = {
  xs: `@media screen and (min-width: ${breakpoints.xs}px)`,
  sm: `@media screen and (min-width: ${breakpoints.sm}px)`,
  md: `@media screen and (min-width: ${breakpoints.md}px)`,
  lg: `@media screen and (min-width: ${breakpoints.lg}px)`,
  xl: `@media screen and (min-width: ${breakpoints.xl}px)`,
  xxl: `@media screen and (min-width: ${breakpoints.xxl}px)`,
}

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

// Determines the amount of columns for the stat grid
const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-gap: 60px;
  width: 100%;

  ${mediaQueries.sm} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${mediaQueries.md} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  ${mediaQueries.lg} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  ${mediaQueries.xl} {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }

  ${mediaQueries.xxl} {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
`

const ChartArea = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-column-gap: 60px;
  width: 100%;

  ${mediaQueries.lg} {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  width: 100%;
  background-color: #131318;
  border-radius: 20px;
  padding-bottom: 24px;
`

const Feed = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: hidden;
  overflow-y: visible;
  max-height: 550px;
`

const FeedSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  margin-left: 24px;
  margin-right: 24px;
`

const SectionRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 8px;
`

const SpanHeader = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`
const SpanMain = styled.span`
  font-size: 14px;
  color: #7d8fd1;
`

const Divider = styled.div`
  margin-top: 16px;
  height: 1px;
  width: 100%;
  background-color: #7d8fd1;
  opacity: 0.3;
`

const EventPrinter = () => {
  const [init, setInit] = React.useState(false)

  const [listingFeed, setListingFeed] = React.useState<Array<NewListingExt>>([])
  const [soldFeed, setSoldFeed] = React.useState<Array<SoldExt>>([])
  const [priceUpdateFeed, setPriceUpdateFeed] = React.useState<Array<BundlePriceUpdateExt>>([])
  const [acceptedOfferFeed, setAcceptedOfferFeed] = React.useState<Array<OfferAcceptedExt>>([])
  const [durationExtendedFeed, setDurationExtendedFeed] = React.useState<Array<DurationExtendedExt>>([])
  const [bidFeed, setBidFeed] = React.useState<Array<NewBidExt>>([])
  const [offerFeed, setOfferFeed] = React.useState<Array<NewOfferExt>>([])

  // For the chart
  const [chartVolume, setChartVolume] = React.useState<Array<any>>([])

  useEffect(() => {
    if (!init) {
      console.log("Start listening")
      try {
        marketplace.onNewListing((item) => {
          console.log('New listing!\n', item)

          const itemExt: NewListingExt = Object.assign({}, item, {time: timeConverter(Date.now() / 1000)})
          listingFeed.unshift(itemExt)
          if (listingFeed.length > maxFeedCount) listingFeed.pop()
          setListingFeed([...listingFeed])
        })
      } catch (error) {
        console.warn('Failed to listen for new listings:', error)
      }
    
      try {
        marketplace.onSold((item) => {
          console.log('Sold!\n', item)

          const itemExt: SoldExt = Object.assign({}, item, {time: timeConverter(Date.now() / 1000)})
          soldFeed.unshift(itemExt)
          if (soldFeed.length > maxFeedCount) soldFeed.pop()
          setSoldFeed([...soldFeed])

          chartVolume.push({
            time: itemExt.time,
            volume: getBalanceNumber(itemExt.price) + (chartVolume.length ? chartVolume[chartVolume.length - 1].volume : 0),
            id: itemExt.marketplaceId.toString(),
            price: getBalanceNumber(itemExt.price)
          })
          if (chartVolume.length > maxChartCount) chartVolume.shift()
          setChartVolume([...chartVolume])
        })
      } catch (error) {
        console.warn('Failed to listen for sales:', error)
      }

      try {
        marketplace.onOfferAccepted((item) => {
          console.log('Accepted Offer\n', item)

          const itemExt: OfferAcceptedExt = Object.assign({}, item, {time: timeConverter(Date.now() / 1000)})
          acceptedOfferFeed.unshift(itemExt)
          if (acceptedOfferFeed.length > maxFeedCount) acceptedOfferFeed.pop()
          setAcceptedOfferFeed([...acceptedOfferFeed])
        })
      } catch (error) {
        console.warn('Failed to listen for accepted offers:', error)
      }
    
      try {
        marketplace.onNewBid((bid) => {
          console.log('New bid\n', bid)

          const itemExt: NewBidExt = Object.assign({}, bid, {time: timeConverter(Date.now() / 1000)})
          bidFeed.unshift(itemExt)
          if (bidFeed.length > maxFeedCount) bidFeed.pop()
          setBidFeed([...bidFeed])
        })
      } catch (error) {
        console.warn('Failed to listen for new bids:', error)
      }
    
      try {
        marketplace.onNewOffer((offer) => {
          console.log('New offer\n', offer)

          const itemExt: NewOfferExt = Object.assign({}, offer, {time: timeConverter(Date.now() / 1000)})
          offerFeed.unshift(itemExt)
          if (offerFeed.length > maxFeedCount) offerFeed.pop()
          setOfferFeed([...offerFeed])
        })
      } catch (error) {
        console.warn('Failed to listen for new offers:', error)
      }

      /** Listeners currently not displayed */
      try {
        marketplace.onDurationExtended((extension) => {
          console.log('Auction duration extended\n', extension)

          const itemExt: DurationExtendedExt = Object.assign({}, extension, {time: timeConverter(Date.now() / 1000)})
          durationExtendedFeed.unshift(itemExt)
          if (durationExtendedFeed.length > maxFeedCount) durationExtendedFeed.pop()
          setDurationExtendedFeed([...durationExtendedFeed])
        })
      } catch (error) {
        console.warn('Failed to listen for duration extensions:', error)
      }

      try {
        marketplace.onPriceUpdate((item) => {
          console.log('Price updated\n', item)
    
          const itemExt: BundlePriceUpdateExt = Object.assign({}, item, {time: timeConverter(Date.now() / 1000)})
          priceUpdateFeed.unshift(itemExt)
          if (priceUpdateFeed.length > maxFeedCount) priceUpdateFeed.pop()
          setPriceUpdateFeed([...priceUpdateFeed])
        })
      } catch (error) {
        console.warn('Failed to listen for price updates:', error)
      }

      try {
        marketplace.onCancelled((item) => {
          console.log('Sale Cancelled\n', item)
        })
      } catch (error) {
        console.warn('Failed to listen for cancelled sales:', error)
      }

      try {
        marketplace.onFinished((item) => {
          console.log('Sale Finished\n', item)
        })
      } catch (error) {
        console.warn('Failed to listen for finished sales:', error)
      }

      try {
        marketplace.onNewCollectionOffer((item) => {
          console.log('New Collection Offer\n', item)
        })
      } catch (error) {
        console.warn('Failed to listen for new collection offers:', error)
      }

      try {
        marketplace.onNewFilteredCollectionOffer((item) => {
          console.log('New Filtered Collection Offer\n', item)
        })
      } catch (error) {
        console.warn('Failed to listen for new filtered collection offers:', error)
      }

      try {
        marketplace.onOfferRemoved((item) => {
          console.log('Removed Offer\n', item)
        })
      } catch (error) {
        console.warn('Failed to listen for removed offers:', error)
      }

      try {
        marketplace.onOfferUpdated((item) => {
          console.log('Updated Offer\n', item)
        })
      } catch (error) {
        console.warn('Failed to listen for updated offers:', error)
      }
    }
    setInit(true)
  }, [init, listingFeed, soldFeed, priceUpdateFeed, durationExtendedFeed, bidFeed, offerFeed, chartVolume, acceptedOfferFeed])

  return (
    <Body>
      <ListContainer>
        {/** LISTINGS */}
        <FeedContainer>
          <p>LISTING</p>
          <Feed>
            {listingFeed && listingFeed.map((item: NewListingExt, index: number) => (
                <FeedSection key={index}>
                  <SectionRow>
                    <SpanHeader><a href={`${mainUrl}${item.marketplaceId.toString()}`} target="_blank" rel="noreferrer">{item.marketplaceId.toString()}</a></SpanHeader>
                    <SpanMain>{item.time}</SpanMain>
                  </SectionRow>
                  <SectionRow>
                    <SpanMain>Collection</SpanMain>
                    <SpanMain><a href={`${mainUrl}collections/${item.listing.nft.toLowerCase()}`} target="_blank" rel="noreferrer">{short(item.listing.nft.toLowerCase())}</a></SpanMain>
                  </SectionRow>
                  <SectionRow>
                    <SpanMain>Token ID</SpanMain>
                    <SpanMain><a href={`${mainUrl}assets/${item.listing.nft.toLowerCase()}/${item.listing.tokenId.toString()}`} target="_blank" rel="noreferrer">{item.listing.tokenId.toString()}</a></SpanMain>
                  </SectionRow>
                  <SectionRow>
                    <SpanMain>Type</SpanMain>
                    <SpanMain>{item.listing.isAuction ? 'Auction' : 'Sale'}</SpanMain>
                  </SectionRow>
                  <SectionRow>
                    <SpanMain>Duration</SpanMain>
                    <SpanMain>{`${(Number(item.listing.duration) / 3600).toLocaleString(undefined, {maximumFractionDigits: 2})}h`}</SpanMain>
                  </SectionRow>
                  {Number(item.listing.amount) > 1 && (
                  <>
                    <SectionRow>
                      <SpanMain>Amount</SpanMain>
                      <SpanMain>{item.listing.amount.toString()}</SpanMain>
                    </SectionRow>
                    <SectionRow>
                      <SpanMain>Unit Price</SpanMain>
                      <SpanMain>{Number(getBalanceString(item.listing.price)).toLocaleString(undefined, {maximumFractionDigits: 6})}</SpanMain>
                    </SectionRow>
                  </>
                  )}
                  <SectionRow>
                    <SpanMain>{`${Number(item.listing.amount) > 1 ? 'Total Price' : 'Price'}`}</SpanMain>
                    <SpanMain>{Number(getBalanceString(ethers.BigNumber.from(item.listing.price).mul(ethers.BigNumber.from(item.listing.amount)))).toLocaleString(undefined, {maximumFractionDigits: 6})}</SpanMain>
                  </SectionRow>
                  <Divider/>
                </FeedSection>
            ))}
            {!listingFeed.length && (
              <SpanHeader>Waiting for events...</SpanHeader>
            )}
          </Feed>
        </FeedContainer>

        {/** SOLD */}
        <FeedContainer>
        <p>SOLD</p>
          <Feed>
            {soldFeed && soldFeed.map((item: SoldExt, index: number) => (
              <FeedSection key={index}>
                <SectionRow>
                  <SpanHeader><a href={`${mainUrl}${item.marketplaceId.toString()}`} target="_blank" rel="noreferrer">{item.marketplaceId.toString()}</a></SpanHeader>
                  <SpanMain>{item.time}</SpanMain>
                </SectionRow>
                <SectionRow>
                  <SpanMain>Buyer</SpanMain>
                  <SpanMain><a href={`${mainUrl}user/${item.buyer.toLowerCase()}`} target="_blank" rel="noreferrer">{short(item.buyer)}</a></SpanMain>
                </SectionRow>
                {Number(item.amount) > 1 && (
                  <>
                    <SectionRow>
                      <SpanMain>Amount</SpanMain>
                      <SpanMain>{item.amount.toString()}</SpanMain>
                    </SectionRow>
                    <SectionRow>
                      <SpanMain>Unit Price</SpanMain>
                      <SpanMain>{Number(getBalanceString(item.price)).toLocaleString(undefined, {maximumFractionDigits: 6})}</SpanMain>
                    </SectionRow>
                  </>
                )}
                <SectionRow>
                  <SpanMain>{`${Number(item.amount) > 1 ? 'Total Price' : 'Price'}`}</SpanMain>
                  <SpanMain>{Number(getBalanceString(ethers.BigNumber.from(item.price).mul(ethers.BigNumber.from(item.amount)))).toLocaleString(undefined, {maximumFractionDigits: 6})}</SpanMain>
                </SectionRow>
                <Divider/>
              </FeedSection>
            ))}
            {!soldFeed.length && (
              <SpanHeader>Waiting for events...</SpanHeader>
            )}
          </Feed>
        </FeedContainer>

        {/** BIDS */}
        <FeedContainer>
        <p>BIDS</p>
          <Feed>
            {bidFeed && bidFeed.map((item: NewBidExt, index: number) => (
              <FeedSection key={index}>
                <SectionRow>
                  <SpanHeader><a href={`${mainUrl}${item.marketplaceId.toString()}`} target="_blank" rel="noreferrer">{item.marketplaceId.toString()}</a></SpanHeader>
                  <SpanMain>{item.time}</SpanMain>
                </SectionRow>
                <SectionRow>
                  <SpanMain>From</SpanMain>
                  <SpanMain><a href={`${mainUrl}user/${item.bidder.toLowerCase()}`} target="_blank" rel="noreferrer">{short(item.bidder)}</a></SpanMain>
                </SectionRow>
                <SectionRow>
                  <SpanMain>Price</SpanMain>
                  <SpanMain>{Number(getBalanceString(item.bid)).toLocaleString(undefined, {maximumFractionDigits: 6})}</SpanMain>
                </SectionRow>
                <Divider/>
              </FeedSection>
            ))}
            {!bidFeed.length && (
              <SpanHeader>Waiting for events...</SpanHeader>
            )}
          </Feed>
        </FeedContainer>

        {/** OFFERS */}
        <FeedContainer>
        <p>OFFERS</p>
          <Feed>
            {offerFeed && offerFeed.map((item: NewOfferExt, index: number) => (
              <FeedSection key={index}>
                <SectionRow>
                  <SpanHeader><a href={`${mainUrl}${item.marketplaceId?.toString()}`} target="_blank" rel="noreferrer">{item.marketplaceId?.toString()}</a></SpanHeader>
                  <SpanMain>{item.time}</SpanMain>
                </SectionRow>
                <SectionRow>
                  <SpanMain>From</SpanMain>
                  <SpanMain><a href={`${mainUrl}user/${item.from.toLowerCase()}`} target="_blank" rel="noreferrer">{short(item.from)}</a></SpanMain>
                </SectionRow>
                <SectionRow>
                  <SpanMain>Price</SpanMain>
                  <SpanMain>{Number(getBalanceString(item.price)).toLocaleString(undefined, {maximumFractionDigits: 6})}</SpanMain>
                </SectionRow>
                <Divider/>
              </FeedSection>
            ))}
            {!offerFeed.length && (
              <SpanHeader>Waiting for events...</SpanHeader>
            )}
          </Feed>
        </FeedContainer>

         {/** OFFERS ACCEPTED */}
         <FeedContainer>
        <p>OFFERS TAKEN</p>
          <Feed>
            {acceptedOfferFeed && acceptedOfferFeed.map((item: OfferAcceptedExt, index: number) => (
              <FeedSection key={index}>
                <SectionRow>
                  <SpanHeader><a href={`${mainUrl}${item.marketplaceId?.toString()}`} target="_blank" rel="noreferrer">{item.marketplaceId?.toString()}</a></SpanHeader>
                  <SpanMain>{item.time}</SpanMain>
                </SectionRow>
                <SectionRow>
                  <SpanMain>Collection</SpanMain>
                  <SpanMain><a href={`${mainUrl}collections/${item.nft.toLowerCase()}`} target="_blank" rel="noreferrer">{short(item.nft.toLowerCase())}</a></SpanMain>
                </SectionRow>
                <SectionRow>
                  <SpanMain>Token ID</SpanMain>
                  <SpanMain><a href={`${mainUrl}assets/${item.nft.toLowerCase()}/${item.tokenId.toString()}`} target="_blank" rel="noreferrer">{item.tokenId.toString()}</a></SpanMain>
                </SectionRow>
                {item.quantity.toNumber() > 1 && (
                  <>
                    <SectionRow>
                      <SpanMain>Quantity</SpanMain>
                      <SpanMain>{item.quantity.toString()}</SpanMain>
                    </SectionRow>
                  </>
                )}
                <Divider/>
              </FeedSection>
            ))}
            {!acceptedOfferFeed.length && (
              <SpanHeader>Waiting for events...</SpanHeader>
            )}
          </Feed>
        </FeedContainer>
      </ListContainer>
      <ChartArea>
        <ChartCard volume={chartVolume} />
      </ChartArea>
    </Body>
  )
}

export default EventPrinter
