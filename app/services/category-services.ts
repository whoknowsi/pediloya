import { sortArray } from "@/app/utils/utils"

const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL

type Category =  {
  id: string;
  name: string;
}

export async function getCategories() {
  try {
    const response = await fetch(`${baseURL}/categories`)
    const data = await response.json()
    return sortArray(data)
  } catch (error: any) {
    throw new Error('Error fetching categories')
  }
}

type Props = {
  marketId: string | undefined
}

export async function getCategoriesBy({ marketId }: Props): Promise<Category[]> {
  try {
    const response = await fetch(`${baseURL}/categories${marketId ? ('?marketId=' + marketId) : ''}`)
    const data = await response.json()
    return data.categories
  } catch (error: any) {
    throw new Error(`Error fetching category ${marketId}`)
  }
}