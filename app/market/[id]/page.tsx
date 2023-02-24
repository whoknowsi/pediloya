'use client'

import CategoryAside from "@/app/components/CategoryAside"
import CategoryCard from "@/app/components/CategoryCard"
import { getCategoriesBy } from "@/app/services/category-services"
import { usePathname } from 'next/navigation'
import { use } from "react"

export default function Market() {
  const pathname = usePathname()
  const id = pathname?.split('market/')[1]
  const categories = use(getCategoriesBy({ marketId: id }))

  console.log(categories)

  return (
    <>
      <CategoryAside categories={categories} />
      <div className="flex flex-col items-center p-4 gap-4 max-w-5xl">
        <section className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex-wrap justify-between gap-4 w-full">
        </section>
      </div>
    </>
  )
  
}