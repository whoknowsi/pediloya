const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL

export async function getMarkets() {
  try {
    const response = await fetch(`${baseURL}/markets`)
    const data = await response.json()
    return data
  } catch (error: any) {
    throw new Error('Error fetching markets')
  }
}