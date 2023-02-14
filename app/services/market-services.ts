const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL

export interface Market {
  id: string
  name: string
  image: string
}

export async function getMarkets(): Promise<Market[]> {
  try {
    const response = await fetch(`${baseURL}/markets`)
    const data = await response.json()
    const { markets } = data
    return markets.map(({ image, ...market }: Market) => {
      return { ...market, image: `${baseURL}${image}` }
    })
  } catch (error: any) {
    throw new Error('Error fetching markets')
  }
}