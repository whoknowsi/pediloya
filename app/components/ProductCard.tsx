import Image from "next/image"
import ItemContainer from "./ItemContainer"

interface Props {
  src: string,
  name: string,
  markets: {
    name: string,
    img: string,
    price: number
  }[]
}

const parcePrice = (price: number) => {
  const priceString = price.toString()
  const decimalPart = priceString.slice(priceString.indexOf("."))

  return '$' + (decimalPart.length > 1
    ? price.toFixed(Math.min(2, decimalPart.length - 1)).toString().replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    : price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."))
}

const ProductCard = ({ src, name, markets }: Props) => {

  const priceRange = {
    min: Math.min(...markets.map(({ price }) => price)),
    max: Math.max(...markets.map(({ price }) => price))
  }

  return (
    <ItemContainer flex pointer>
      <div className="flex flex-col gap-4 max-w-xs h-full">
        <Image className="self-center" src={src} width={100} height={100} alt={name} />
        <div className="flex flex-col gap-1">
          <span className="tracking-wide">{`${parcePrice(priceRange.min)}${priceRange.min !== priceRange.max ? (' - ' + parcePrice(priceRange.max)) : ''}`}</span>
          <span className="text-xs">{name}</span>
        </div>
        <div className="flex gap-1 items-end justify-end flex-1">
          {markets.map((market) => {
            return <div key={market.name + name} className="h-min">
              <Image className="rounded-full hover:scale-105 transition-transform duration-150" src={market.img} alt={market.name} width={20} height={20} />
            </div>
          })}
        </div>
      </div>
    </ItemContainer>
  )
}

export default ProductCard