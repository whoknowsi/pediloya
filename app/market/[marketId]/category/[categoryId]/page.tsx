'use client'

import CategoryCard from "@/app/components/CategoryCard"
import ProductCard from "@/app/components/ProductCard"
import { getProductsBy } from "@/app/services/product-services"
import { use } from "react"

type Props = {
  params: {
    marketId: string,
    categoryId: string
  }
  
}


export default function Market({ params }: Props) {
  const { categoryId, marketId } = params
  const products = use(getProductsBy({ categoryId }))

  return (
    <>
      <div className="flex flex-col items-center p-4 gap-4 max-w-5xl">
        <section className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex-wrap justify-between gap-4 w-full">
          {products.map((product) => {
              const markets = product.prices.map(({ price, market }) => {
                return {
                  id: market.id,
                  name: market.name,
                  img: market.image,
                  price
                }
              })
              return <ProductCard key={product.id} src={product.image} name={product.name} id={product.id} markets={markets} />
          })}
        </section>
      </div>
    </>
  )
  
}