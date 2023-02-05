import Image from "next/image"
import ItemContainer from "./ItemContainer"

interface Props {
  name: string
  img: string,
}

const MarketCard = ({ name, img }: Props) => {
  return (
    <ItemContainer pointer hover flex>
      <div className="flex gap-3 max-w-lg min-w-fit">
        <Image className="h-12 w-12 rounded border-black border" src={img} width="500" height="500" alt={`${name}-logo`} />
        <p className="flex items-center">{name}</p>
      </div>
    </ItemContainer>
  )
}

export default MarketCard