'use client'

import CategoryAside from "@/app/components/CategoryAside"
import { getCategoriesBy } from "@/app/services/category-services"
import { use } from 'react'

type Props = {
  params: {
    marketId: string
  },
  children: React.ReactNode
}

export default function RootLayout({ children, params }: Props) {
  const { marketId } = params
  const categories = use(getCategoriesBy({ marketId }))
  return (
    <>
      <CategoryAside categories={categories} marketId={marketId} />
      {children}
    </>
  )
}