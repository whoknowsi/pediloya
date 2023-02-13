import CategoryAside from "./components/CategoryAside";
import { Content } from "./components/Content";
import { getCategories } from "./services/category-services";


export default async function Home() {  
  const categories = await getCategories()

  return (
    <>
      <main className="flex justify-center p-4 gap-4 max-w-6xl mx-auto">
        <CategoryAside categories={categories} />
        <Content />
      </main>
    </>
  )
}
