import Image from "next/image"
import ItemContainer from "./ItemContainer"

interface Props {
  id: string,
  name: string,
  img: string,
  marketId?: string
}

const CategoryCard = ({id, name, img, marketId }: Props) => {
  return (
    <ItemContainer pointer hover flex href={marketId ? ('/market/' + marketId + '/category/' + id) : '/category/' + id}>
      <div className="flex flex-col items-center gap-4 max-w-xs py-2 text-center">
        <span className="text-sm font-medium">{name}</span>
        <Image src={img} width={100} height={100} alt={`${name} category`} />
      </div>
    </ItemContainer>

  )
}

export default CategoryCard