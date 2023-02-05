'use client'

import CategoryCard from "./components/CategoryCard";
import MarketCard from "./components/MarketCard";
import SearchBar from "./components/SearchBar";

export default function Home() {

  const handleSearch = (value: string) => {
    console.log(value)
  }

  return (
    <main className="flex flex-col justify-center items-center p-2 gap-4 max-w-5xl mx-auto">
      <SearchBar handleSearch={handleSearch} />
      <section className="flex flex-wrap gap-4 justify-center w-full">
        <MarketCard img='https://images.deliveryhero.io/image/pedidosya/restaurants/carrefour-116-market-sta-fe-nuevo-jpg.png?quality=70&width=100&webp=1' name='Carrefour - Market Chilavert (203)' />
        <MarketCard img='https://images.deliveryhero.io/image/pedidosya/restaurants/carrefour-116-market-sta-fe-nuevo-jpg.png?quality=70&width=100&webp=1' name='Carrefour - Market Chilavert (203)' />
      </section>
      <section className="flex justify-between gap-4 w-full">
        <CategoryCard img='https://images.deliveryhero.io/image/pedidosya/menu-sections/new-verticals/default/papeleria.jpg?quality=100&width=300' name='Papeles'/>
        <CategoryCard img='https://images.deliveryhero.io/image/pedidosya/menu-sections/new-verticals/default/papeleria.jpg?quality=100&width=300' name='Papeles'/>
        <CategoryCard img='https://images.deliveryhero.io/image/pedidosya/menu-sections/new-verticals/default/papeleria.jpg?quality=100&width=300' name='Papeles'/>
      </section>
    </main>
  ) 
}
