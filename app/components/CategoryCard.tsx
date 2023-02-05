import Image from "next/image"
import ItemContainer from "./ItemContainer"

interface Props {
  name: string,
  img: string
}

const CategoryCard = ({ name, img }: Props) => {
  return (
    <ItemContainer pointer hover flex>
      <div className="flex flex-col items-center gap-4 max-w-xs py-2 text-center">
        <span className="text-sm font-medium">{name}</span>
        <Image src={img} width={100} height={100} alt={`${name} category`} />
      </div>
    </ItemContainer>

  )
}

export default CategoryCard