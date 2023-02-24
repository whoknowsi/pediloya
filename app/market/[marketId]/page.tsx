'use client'

import CategoryCard from "@/app/components/CategoryCard"
import { getCategoriesBy } from "@/app/services/category-services"

import { use } from "react"

type Props = {
  params: { marketId: string }
}

export default function Market({ params }: Props) {
  const { marketId } = params
  const categories = use(getCategoriesBy({ marketId }))

  return (
    <>
      <div className="flex flex-col items-center p-4 gap-4 max-w-5xl">
        <section className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex-wrap justify-between gap-4 w-full">
          {categories.map(({ name, id}) => <CategoryCard key={id} id={id} marketId={marketId} name={name} img={'/images/placeholder-product.png'}/>)}
        </section>
      </div>
    </>
  )
  
}