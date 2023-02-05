import Image from "next/image"

interface Props {
  img: string,
  name: string
}

const MarketCard = ({ img, name }: Props) => {
  return (
    <div className="bg-white flex gap-3 p-3 rounded-md cursor-pointer hover:scale-105 transition-transform duration-150">
      <div>
        <Image className="h-12 w-12 rounded border-black border" src={img} width="500" height="500" alt={`${name}-logo`} />
      </div>
      <div className="flex items-center">
        <h3>{name}</h3>
      </div>
    </div>
  )
}

export default MarketCard