import Image from "next/image"
import ItemContainer from "./ItemContainer"

interface Props {
  name: string,
  img: string
}

const CategoryCard = ({ name, img }: Props) => {
  return (
    <ItemContainer pointer hover flex>
      <div className="flex flex-col items-center gap-4 max-w-xs py-2">
        <span className="text-sm font-medium">{name}</span>
        <Image className="h-28 w-auto" src={img} width={500} height={500} alt={`${name} category`} />
      </div>
    </ItemContainer>

  )
}

export default CategoryCard