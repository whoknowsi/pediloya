'use client'

import Content from "./components/Content"
import CategoryAside from "./components/CategoryAside";
import { getCategories } from "./services/category-services"
import { getMarkets, Market } from "./services/market-services";
import { useEffect, useState } from "react";
import { Category } from "./services/product-services";

export default function Home() {  
  const [categories, setCategories] = useState<Category[]>([])
  const [markets, setMarkets] = useState<Market[]>([])

  useEffect(() => {
    (async () => {
      setMarkets(await getMarkets())
      setCategories(await getCategories())
    })()
  }, [])

  return (
    <>
      <CategoryAside categories={categories} />
      <Content markets={markets} />
    </>
  )
}
