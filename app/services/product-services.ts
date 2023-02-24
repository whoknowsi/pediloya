import { sortArray } from '@/app/utils/utils'
const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL || ''

export interface Product {
  id: string
  name: string
  image: string
  measurementUnit: any
  pricePerMeasurementUnit: number
  categories: Category[]
  prices: Price[]
  barcode: string
}

export interface Category {
  id: string
  name: string
}

export interface Price {
  market: Market
  price: number
  date: string
  stock: number
}

export interface Market {
  id: string,
  name: string,
  image: string
}

const fillImagesOnProducts = (products: Product[]): Product[] => {
  return products.map(({ image, prices, ...product }) => {
    return {
      ...product,
      image: `${image ? (baseURL + image) : '/images/placeholder-product.png'}`,
      prices: prices.map(({ market, ...price}) => {
        return {
          ...price,
          market: {
            ...market,
            image: `${market.image ? (baseURL + market.image) : '/images/placeholder-product.png'}`,
          }
        }
      })
    }
  })
}


type Props = {
  categoryId?: string,
  marketId?: string,
  search?: string,
  offset?: number,
  limit?: number,
  nextPage?: string | null,
  prevPage?: string | null
}

export type ProductServiceResponse = {
  products: Product[],
  max: number,
  prev: string | null,
  next: string | null
}

export async function getProductsBy({ categoryId, marketId, search, offset = 0, limit = 20, nextPage = null, prevPage = null }: Props): Promise<ProductServiceResponse> {
  try {
    const filters = [] 
    if (categoryId) filters.push(`categoryId=${categoryId}`)
    if (marketId) filters.push(`marketId=${marketId}`)
    if (search) filters.push(`search=${search}`)

    const url = nextPage 
      ? `${baseURL}${nextPage}` 
      : prevPage 
        ? `${baseURL}${prevPage}` 
        : `${baseURL}/products?limit=${limit}&offset=${offset}&${filters.join('&')}`

    const response = await fetch(url)
    const data = await response.json()
    const { products, prev, next, max } = data

  return {
    products: fillImagesOnProducts(products),
    max,
    prev,
    next
  }

  } catch (error: any) {
    console.log(error)
    throw new Error('Error fetching products by categories')
  }
}