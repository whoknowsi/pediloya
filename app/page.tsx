import Content from "./components/Content"
import CategoryAside from "./components/CategoryAside";
import { getCategories } from "./services/category-services"

export default async function Home() {  
  const categories = await getCategories()
  
  return (
    <>
      <CategoryAside categories={categories} />
      <Content />
    </>
  )
}
