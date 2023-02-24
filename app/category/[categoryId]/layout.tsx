import CategoryAside from "@/app/components/CategoryAside"
import { getCategories } from "@/app/services/category-services"

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const categories = await getCategories()

  return (
    <>
      <CategoryAside categories={categories} />
      <div className="flex flex-col items-center p-4 gap-4 max-w-5xl">
        {children}
      </div>
    </>
  )
}
