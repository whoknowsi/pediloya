import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import ItemContainer from "./ItemContainer"
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { HiOutlineTrash } from 'react-icons/hi2'

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
  const [timeoutProds, setTimeoutProds] = useState<ReturnType<typeof setTimeout> | null>(null)
  const [productCount, setProductCount] = useState(0)
  const priceRange = useRef(getPriceRange(markets))

  const handlePriceClick = (marketId: string) => {
  marketId && 
    setSelectedMarket(
      selectedMarket === marketId
        ? ''
        : marketId
    )
  }

  const handleProductEdit = (product: number) => {
    timeoutProds && clearTimeout(timeoutProds) 
    setTimeoutProds(setTimeout(() => setTimeoutProds(null), 3000))
    
    setProductCount(productCount + product)
  }

  return (
    <ItemContainer flex>
      <div className="flex flex-col gap-4 max-w-xs h-full relative">
        {(selectedMarket || markets.length === 1) 
          && 
          (timeoutProds 
            ? <div className="absolute flex right-0 top-0 px-2 cursor-pointer border rounded bg-white border-gray-600">
              {
                productCount > 1 
                  ? <button className="w-7 h-7 flex items-center justify-center" onClick={() => handleProductEdit(-1)}>
                      <AiOutlineMinus />
                    </button>
                  : <button className="w-7 h-7 flex items-center justify-center" onClick={() => {
                    setProductCount(0)
                    clearTimeout(timeoutProds)
                    setTimeoutProds(null)
                  }}>
                      <HiOutlineTrash />
                    </button>
              }
              
              <span className="w-7 h-7 flex items-center justify-center">
                {productCount}
              </span>
              <button className="w-7 h-7 flex items-center justify-center" onClick={() => handleProductEdit(1)}>
                <AiOutlinePlus />
              </button>
            </div>
            : <button 
                className={`absolute flex items-center justify-center right-0 top-0 cursor-pointer border w-7 h-7 rounded border-gray-500 ${productCount > 0 ? 'bg-black text-white border-none' : ''}`}
                onClick={productCount === 0 ? () => handleProductEdit(1) : () => handleProductEdit(0)}
              >
                {productCount > 0 ? productCount : <AiOutlinePlus />}
              </button> )
          
        }
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