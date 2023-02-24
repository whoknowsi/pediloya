'use client'

import ProductCard from "@/app/components/ProductCard"
import { getProductsBy, ProductServiceResponse } from "@/app/services/product-services"
import {  useEffect, useState } from "react"

type Props = {
  params: {
    marketId: string,
    categoryId: string
  }
}

export default function Market({ params }: Props) {
  const [responseProducts, setResponseProducts ] = useState<ProductServiceResponse>()
  const { categoryId, marketId } = params

  useEffect(() => {
    (async () => {
      const response = await getProductsBy({ categoryId, marketId, limit: 500 })
      setResponseProducts(response)
    })()

  }, [categoryId, marketId])
  

  return (
    <>
      <div  className="flex flex-col items-center p-4 gap-4 max-w-5xl">
      <section className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex-wrap justify-between gap-4 w-full">
        {responseProducts?.products.map((product) => {
          const markets = product.prices.map(({ price, market }) => {
            return {
              id: market.id,
              name: market.name,
              img: market.image,
              price
            }
          })
          return (
            <ProductCard key={product.id} src={product.image} name={product.name} id={product.id} markets={markets} />
          )
        })}
      </section>
      </div>
    </>
  )
  
}