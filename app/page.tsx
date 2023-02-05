import CategoryCard from "./components/CategoryCard";
import MarketCard from "./components/MarketCard";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center p-2 gap-4">
      <section className="flex flex-col gap-4">
        <MarketCard img='https://images.deliveryhero.io/image/pedidosya/restaurants/carrefour-116-market-sta-fe-nuevo-jpg.png?quality=70&width=100&webp=1' name='Carrefour - Market Chilavert (203)' />
        <MarketCard img='https://images.deliveryhero.io/image/pedidosya/restaurants/carrefour-116-market-sta-fe-nuevo-jpg.png?quality=70&width=100&webp=1' name='Carrefour - Market Chilavert (203)' />
      </section>
      <section className="flex justify-between gap-4">
        <CategoryCard img='https://images.deliveryhero.io/image/pedidosya/menu-sections/new-verticals/default/papeleria.jpg?quality=100&width=300' name='Papeles'/>
        <CategoryCard img='https://images.deliveryhero.io/image/pedidosya/menu-sections/new-verticals/default/papeleria.jpg?quality=100&width=300' name='Papeles'/>
        <CategoryCard img='https://images.deliveryhero.io/image/pedidosya/menu-sections/new-verticals/default/papeleria.jpg?quality=100&width=300' name='Papeles'/>
      </section>
    </main>
  ) 
}
