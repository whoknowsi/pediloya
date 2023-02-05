import Image from "next/image"
import ItemContainer from "./ItemContainer"

interface Props {
  src: string,
  name: string,
  price: [number, number?]
}

const parcePrice = (price: number) => {
  const priceString = price.toString()
  const decimalPart = priceString.slice(priceString.indexOf("."))

  return '$' + (decimalPart.length > 1
    ? price.toFixed(Math.min(2, decimalPart.length - 1)).toString().replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    : price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."))
}

const ProductCard = ({ src, name, price }: Props) => {
  return (
    <ItemContainer flex pointer>
      <div className="flex flex-col gap-4 max-w-xs">
        <Image className="self-center" src={src} width={100} height={100} alt={name} />
        <div className="flex flex-col gap-1">
          <span className="tracking-wide">{`${parcePrice(price[0])}${price[1] ? (' - ' + parcePrice(price[1])) : ''}`}</span>
          <span className="text-xs">{name}</span>
        </div>
      </div>
    </ItemContainer>
  )
}

export default ProductCard