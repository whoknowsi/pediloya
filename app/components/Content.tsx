'use client'

import { Market } from "../services/market-services"
import MarketCard from "./MarketCard"
import SearchBar from "./SearchBar"

type Props = {
  markets: Market[]
}

export default function Content({ markets }: Props) {
  const handleSearch = (value: string) => {
    console.log(value)
  }

  return (
    <div className="flex flex-col items-center p-4 gap-4 max-w-5xl">
      <SearchBar handleSearch={handleSearch} />
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center w-full">
      {
        markets.map(({ id, name, image }) => <MarketCard key={id} img={image} name={name} />)
      }
      </section>
    </div>
  )
}
