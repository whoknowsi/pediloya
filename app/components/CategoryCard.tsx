import Image from "next/image"

interface Props {
  name: string,
  img: string
}

const CategoryCard = ({ name, img }: Props) => {
  return (
    <div className="bg-white flex flex-col items-center py-4 rounded-lg gap-4 max-w-xs hover:scale-105 transition-transform duration-150 cursor-pointer flex-1">
      <span className="text-sm font-medium">{name}</span>
      <Image className="h-28 w-auto" src={img} width={500} height={500} alt={`${name} category`} />
    </div>
  )
}

export default CategoryCard