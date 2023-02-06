import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import ItemContainer from "./ItemContainer"
import { AiOutlinePlus } from 'react-icons/ai'

interface Market {
  name: string,
  id: string,
  img: string,
  price: number
}

interface Props {
  src: string,
  name: string,
  id: string,
  markets: Market[]
}

const parsePrice = (price: number | undefined) => {
  if(price === undefined) return 'Error getting price'
  const priceString = price.toString()
  const decimalPart = priceString.slice(priceString.indexOf("."))

  return '$' + (decimalPart.length > 1
    ? price.toFixed(Math.min(2, decimalPart.length - 1)).toString().replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    : price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."))
}

const getPriceRange = (markets: Market[]) => {
  const min = Math.min(...markets.map(({ price }) => price))
  const max = Math.max(...markets.map(({ price }) => price))

  const marketIdMin = markets.find((market) => market.price === min)?.id
  const marketIdMax = markets.find((market) => market.price === max)?.id
  
  return {
    min: {
      price: min,
      marketId: marketIdMin || ''
    },
    max: {
      price: max,
      marketId: marketIdMax || ''
    }
  }
}

const ProductCard = ({ src, name, id, markets }: Props) => {
  const [selectedMarket, setSelectedMarket] = useState<string>('')
  const priceRange = useRef(getPriceRange(markets))

  const handlePriceClick = (marketId: string) => {
  marketId && 
    setSelectedMarket(
      selectedMarket === marketId
        ? ''
        : marketId
    )
  }

  return (
    <ItemContainer flex>
      <div className="flex flex-col gap-4 max-w-xs h-full relative">
        {(selectedMarket || markets.length === 1) && <div className="absolute right-0 top-0 cursor-pointer border p-1 rounded border-gray-500"><AiOutlinePlus /></div>}
        <Image className="self-center" src={src} width={100} height={100} alt={name} />
        <div className="flex flex-col gap-1">
          <div className="tracking-wide">
          {selectedMarket
            ? <span className="cursor-pointer hover:text-red-600 transition-colors duration-100" onClick={() => handlePriceClick(selectedMarket)}>{parsePrice(markets.find((market) => market.id === selectedMarket)?.price)}</span>
            : <>
              <span className="cursor-pointer hover:text-red-600 transition-colors duration-100" onClick={() => handlePriceClick(priceRange.current.min.marketId)}>{parsePrice(priceRange.current.min.price)}</span>
              {priceRange.current.min.price !== priceRange.current.max.price &&
                <>
                  <span> - </span>
                  <span className="cursor-pointer hover:text-red-600 transition-colors duration-100" onClick={() => handlePriceClick(priceRange.current.max.marketId)}>{parsePrice(priceRange.current.max.price)}</span>
                </>
              }
            </>
          }
          </div>
          <span className="text-xs">{name}</span>
        </div>
        <div className="flex gap-1 items-end justify-end flex-1">
          {markets.map((market) => {
            return <div key={market.name + name} className="h-min">
              <Image 
                className={`rounded-full hover:scale-105 transition-transform duration-150 cursor-pointer select-none ${(selectedMarket.includes(market.id) || markets.length === 1) ? '' :'grayscale'}`} 
                onClick={() => handlePriceClick(market.id)}
                src={market.img} 
                alt={market.name} 
                width={20} 
                height={20} 
              />
            </div>
          })}
        </div>
      </div>
    </ItemContainer>
  )
}

export default ProductCard