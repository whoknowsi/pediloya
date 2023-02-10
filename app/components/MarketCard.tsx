import Image from "next/image"
import ItemContainer from "./ItemContainer"

interface Props {
  name: string
  img: string,
}

const MarketCard = ({ name, img }: Props) => {
  return (
    <ItemContainer pointer hover flex>
      <div className="flex gap-3 items-center">
        <Image className="rounded border-black border" src={img} width="60" height="60" alt={`${name}-logo`} />
        <span className="truncate text-base">{name}</span>
      </div>
    </ItemContainer>
  )
}

export default MarketCard