import Image from "next/image"

interface Props {
  name: string,
  img: string
}

const CategoryCard = ({ name, img }: Props) => {
  return (
    <div className="bg-white flex flex-col items-center p-4 rounded-lg gap-4 max-w-xs hover:scale-105 transition-transform duration-150 cursor-pointer">
      <p className="text-sm font-medium">{name}</p>
      <Image className="h-32 w-32" src={img} width={500} height={500} alt={`${name} category`} />
    </div>
  )
}

export default CategoryCard