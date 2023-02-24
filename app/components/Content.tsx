'use client'

import { use, useEffect, useRef, useState } from "react"
import { Market } from "../services/market-services"
import { Product } from "../services/product-services"
import { removeTicksFrom } from "../utils/utils"
import MarketCard from "./MarketCard"
import ProductCard from "./ProductCard"
import SearchBar from "./SearchBar"
import InfiniteScroll from 'react-infinite-scroll-component';

type Props = {
  markets: Market[]
  products: Product[]
}

export default function Content({ markets, products }: Props) {
  const pageSize = 60
  const [searchedProds, setSearchedProds] = useState<Product[]>([])
  const [infinityScrollProds, setInfinityScrollProds] = useState<Product[]>([])
  const page = useRef(0)

  const handleSearch = (value: string) => {
    const prods = products
      .filter((product) => value.split(' ').every((word) => removeTicksFrom(product.name.toLowerCase()).includes(removeTicksFrom(word.toLowerCase()))))
    setSearchedProds(prods)
    setInfinityScrollProds(prods.slice(0, pageSize))
    page.current = 0
  }

  const fetchData = () => {
    page.current = page.current + 1
    setInfinityScrollProds(
      [...infinityScrollProds, ...searchedProds.slice(page.current * pageSize, (page.current + 1) * pageSize)]
    )
  }

  return (
    <div className="flex flex-col items-center p-4 gap-4 max-w-5xl">
      <SearchBar handleSearch={handleSearch} />
      {
        infinityScrollProds.length > 0 ? (
          <InfiniteScroll className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex-wrap justify-between gap-4 w-full"
            dataLength={infinityScrollProds.length}
            next={fetchData}
            hasMore={infinityScrollProds.length !== searchedProds.length}
            loader={<h4>Loading...</h4>}
          >
            {infinityScrollProds.map((product) => {
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
          </InfiniteScroll>
        ) : (
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center w-full">
            {markets.map(({ id, name, image }) => <MarketCard key={id} id={id} img={image} name={name} />)}
          </section>)
      }
    </div>
  )
}
