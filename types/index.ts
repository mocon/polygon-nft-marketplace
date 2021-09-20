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

export type FormInput = {
  name: string
  description: string
  price: string
}
