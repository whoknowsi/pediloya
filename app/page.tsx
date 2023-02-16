import Content from "./components/Content"
import CategoryAside from "./components/CategoryAside";
import { getCategories } from "./services/category-services"
import { getMarkets, Market } from "./services/market-services";
import { getProductsBy, Product } from "./services/product-services";

export default async function Home() {  
  const categories = await getCategories()
  
  let markets:Market[] = []
  let products:Product[] = []

  try {
    markets = await getMarkets()
    products = await getProductsBy()
  } catch(error) {
    console.log(error)
  }

  return (
    <>
      <CategoryAside categories={categories} />
      <Content markets={markets} products={products}/>
    </>
  )
}
