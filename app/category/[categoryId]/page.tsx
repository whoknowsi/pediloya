'use client'

import ProductCard from '@/app/components/ProductCard'
import { getProductsBy, ProductServiceResponse } from '@/app/services/product-services'
import { useEffect, useState } from 'react'

type Props = {
  params: {
    categoryId: string
  }
}

export default function Category({ params }: Props) {
  const [responseServiceProducts, setResponseServiceProducts] = useState<ProductServiceResponse>()
  const { categoryId } = params

  useEffect(() => {
    (async () => {
      const responseSerive = await getProductsBy({ categoryId, limit: 500 })
      setResponseServiceProducts(responseSerive)
    })()
  }, [categoryId])

  return (
    <section className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex-wrap justify-between gap-4 w-full">
      {responseServiceProducts?.products.map((product) => {
        const markets = product.prices.map(({ price, market }) => {
          return {
            id: market.id,
            name: market.name,
            img: market.image,
            price
          }
        })
        return (
          <ProductCard key={product.id} src={product.image} name={product.name} id={product.id} markets={markets}/>
        )
      })}
    </section>
  );
}
