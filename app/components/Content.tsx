'use client'

import { useEffect, useState } from "react"
import { Market } from "../services/market-services"
import { getProductsBy, Product, ProductServiceResponse } from "../services/product-services"
import { removeTicksFrom } from "../utils/utils"
import MarketCard from "./MarketCard"
import ProductCard from "./ProductCard"
import SearchBar from "./SearchBar"
import InfiniteScroll from 'react-infinite-scroll-component';

type Props = {
  markets: Market[]
}

export default function Content({ markets }: Props) {
  const [productsServiceResponse, setProductsServiceResponse] = useState<ProductServiceResponse>()

  const handleSearch = async (search: string) => {
    const response = await getProductsBy({ search, limit: 500 })
    setProductsServiceResponse(response)
  }

  const fetchData = async () => {
    if(productsServiceResponse?.next) {
      const response = await getProductsBy({ nextPage: productsServiceResponse.next })
      setProductsServiceResponse(
        {...response, products: productsServiceResponse.products.concat(response.products)}
      )
    }
  }

  return (
    <div className="flex flex-col items-center p-4 gap-4 max-w-5xl">
      <SearchBar handleSearch={handleSearch} />
      {productsServiceResponse?.products ? (
          <section className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex-wrap justify-between gap-4 w-full">
            {productsServiceResponse.products.map((product) => {
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
        ) : (
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center w-full">
            {markets.map(({ id, name, image }) => <MarketCard key={id} id={id} img={image} name={name} />)}
          </section>)}
    </div>
  )
}
