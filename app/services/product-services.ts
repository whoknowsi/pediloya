import { sortArray } from '@/app/utils/utils'
const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL

type Props = {
  categoryId: string
}

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

export interface Response {
  products: Product[],
  offset: number,
  limit: number,
  count: number,
  max: number,
  prev: string | null,
  next: string | null
}

export async function getProductsBy({ categoryId }: Props): Promise<Product[]> {
  try {
    let responseProducts:Product[] = []
    let response
    let data: Response = {
      products: [],
      offset: 0,
      limit: 0,
      count: 0,
      max: 0,
      prev: null,
      next: null
    }
    let products:Product[]

    do {
      response = await fetch(data.next ? `${baseURL}${data.next}` :`${baseURL}/products?categoryId=${categoryId}&limit=20`)
      data = await response.json()
      products = data.products

      responseProducts = [...responseProducts, ...products.map(({ image, prices, ...product }) => {
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
      })]
    } while (data.next)

    return sortArray(responseProducts)
  } catch (error: any) {
    console.log(error)
    throw new Error('Error fetching products')
  }
}