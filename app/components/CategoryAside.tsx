import ItemContainer from "./ItemContainer"
import Link from "next/link"
import { Suspense } from "react"
import { Category } from "../services/product-services"


type Props = {
  categories: Category[],
  marketId?: string
}

export default function CategoryAside({ categories, marketId }: Props) {
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
                    <Link href={marketId ? `/market/${marketId}/category/${id}` : `/category/${id}`}>{name}</Link>
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