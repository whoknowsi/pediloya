const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL

export async function getCategories() {
  try {
    const response = await fetch(`${baseURL}/categories`)
    const data = await response.json()
    return data
  } catch (error: any) {
    throw new Error('Error fetching categories')
  }
}

export async function getCategoriesBy(marketId: string) {
  try {
    const response = await fetch(`${baseURL}/categories/${marketId}`)
    const data = await response.json()
    return data
  } catch (error: any) {
    throw new Error(`Error fetching category ${marketId}`)
  }
}