export type MarketItem = {
  itemId: number
  nftContract: string
  tokenId: number
  seller: string
  owner: string
  price: number
  sold: boolean
}

export type NftData = {
  price: number
  tokenId: number
  seller: string
  owner: string
  image: string
  name: string
  description: string
}
