import Image from "next/image"

interface Props {
  name: string
  img: string,
}

const MarketCard = ({ name, img }: Props) => {
  return (
    <div className="bg-white flex gap-3 p-3 rounded-lg cursor-pointer hover:scale-105 transition-transform duration-150 flex-1 max-w-lg min-w-fit">
      <Image className="h-12 w-12 rounded border-black border" src={img} width="500" height="500" alt={`${name}-logo`} />
      <p className="flex items-center">{name}</p>
    </div>
  )
}

export default MarketCard