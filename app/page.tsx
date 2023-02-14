import Content from "./components/Content"
import CategoryAside from "./components/CategoryAside";
import { getCategories } from "./services/category-services"
import { getMarkets, Market } from "./services/market-services";

export default async function Home() {  
  const categories = await getCategories()
  
  let markets:Market[] = []

  try {
    markets = await getMarkets()
  } catch(error) {
    console.log(error)
  }

  return (
    <>
      <CategoryAside categories={categories} />
      <Content markets={markets}/>
    </>
  )
}
