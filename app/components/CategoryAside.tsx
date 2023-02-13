import ItemContainer from "./ItemContainer"
import Link from "next/link"
import { Suspense } from "react"
import { Category } from "../category/[id]/page"

type Props = {
  categories: Category[]
}

export default function CategoryAside({ categories }: Props) {
  return (
    <ItemContainer>
      <aside className="p-4 px-5 w-64">
        <h2 className="font-bold">Categorías</h2>
        <Suspense fallback="Loading categories...">
          <ul className="text-sm">
            {
              categories.map(({ id, name }) => {
                return (
                  <li key={id}>
                    <Link href={`/category/${id}`}>{name}</Link>
                  </li>
                )
              })
            }
          </ul>
        </Suspense>
      </aside>
    </ItemContainer>
  )
}