'use client'

import CategoryCard from "./components/CategoryCard";
import MarketCard from "./components/MarketCard";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";

export default function Home() {

  const handleSearch = (value: string) => {
    console.log(value)
  }

  return (
    <main className="flex flex-col justify-center items-center p-4 gap-4 max-w-5xl mx-auto">
      <SearchBar handleSearch={handleSearch} />
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center w-full">
        <MarketCard img='https://images.deliveryhero.io/image/pedidosya/restaurants/carrefour-116-market-sta-fe-nuevo-jpg.png' name='Carrefour - Market Chilavert (203)' />
        <MarketCard img='https://images.deliveryhero.io/image/pedidosya/restaurants/logo-dia-supermercado-01.png' name='Dia - Villa Ballester (204)' />
      </section>
      <section className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex-wrap justify-between gap-4 w-full">
        <CategoryCard img='https://images.deliveryhero.io/image/pedidosya/menu-sections/new-verticals/default/aceites.jpg' name='Aceites'/>
        <CategoryCard img='https://images.deliveryhero.io/image/pedidosya/menu-sections/new-verticals/default/agua.jpg' name='Aguas'/>
        <CategoryCard img='https://images.deliveryhero.io/image/pedidosya/menu-sections/new-verticals/default/ensaladas.jpg' name='Alimentos saludables'/>
      </section>  
      <section className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex-wrap justify-between gap-4 w-full">
        <ProductCard price={[455.22, 500.23]} src="https://images.deliveryhero.io/image/pedidosya/products/8c07b9a7-d04b-4e77-8752-c95f06e07648.jpg" name="Aceite En Aerosol Fritolim Girasol 120 G."/>
        <ProductCard price={[88.8]} src="https://images.deliveryhero.io/image/pedidosya/products/467bbbfd-4381-45d4-b6f6-21923c55d358.jpg" name="Sal Fina DIA 500 g"/>
        <ProductCard price={[455.22, 528.35]} src="https://images.deliveryhero.io/image/pedidosya/products/49d0f862-5894-44ee-a4f3-ae6e08c7171c.jpg" name="Salsa barbacoa Hellmanns 400g"/>
        <ProductCard price={[1243.32, 1325.35]} src="https://images.deliveryhero.io/image/pedidosya/products/e95caec8-fdf1-4568-9c2d-9848111c783c.jpg" name="Aceite En Aerosol Fritolim Girasol 120 G."/>
      </section>
    </main>
  ) 
}
