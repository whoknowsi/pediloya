'use client'

import Image from "next/image";
import Link from "next/link";
import CategoryCard from "./components/CategoryCard";
import ItemContainer from "./components/ItemContainer";
import MarketCard from "./components/MarketCard";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";

export default function Home() {

  const handleSearch = (value: string) => {
    console.log(value)
  }

  return (
    <>
      <header className="p-4 bg-white shadow-lg">
        <Link className="flex gap-1 items-center cursor-pointer" href="/">
          <Image src="/logo.png" alt="logo" width="35" height="35"/>
          <h1 className="text-2xl font-bold italic text-red-first">PediloYa</h1>
        </Link>
      </header>
      <main className="flex justify-center p-4 gap-4 max-w-6xl mx-auto">
        <ItemContainer>
        <aside className="p-4 px-5 w-64">
          <h2 className="font-bold">Categorías</h2>
          <ul className="text-sm">
            <li>
              <a href="/aguas">Aguas</a>
            </li>
            <li>
              <a href="/aceites">Aceites</a>
            </li>
            <li>
              <a href="/almacen">Almacén</a>
            </li>
            <li>
              <a href="/gaseosas">Gaseosas</a>
            </li>
          </ul>
          </aside>
        </ItemContainer>
        <div className="flex flex-col justify-center items-center p-4 gap-4 max-w-5xl">
          <SearchBar handleSearch={handleSearch} />
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center w-full">
            <MarketCard img='https://images.deliveryhero.io/image/pedidosya/restaurants/carrefour-116-market-sta-fe-nuevo-jpg.png' name='Carrefour - Market Chilavert (203)' />
            <MarketCard img='https://images.deliveryhero.io/image/pedidosya/restaurants/logo-dia-supermercado-01.png' name='Dia - Villa Ballester (204)' />
          </section>
          <section className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex-wrap justify-between gap-4 w-full">
            <CategoryCard img='https://images.deliveryhero.io/image/pedidosya/menu-sections/new-verticals/default/aceites.jpg' name='Aceites' />
            <CategoryCard img='https://images.deliveryhero.io/image/pedidosya/menu-sections/new-verticals/default/agua.jpg' name='Aguas' />
            <CategoryCard img='https://images.deliveryhero.io/image/pedidosya/menu-sections/new-verticals/default/ensaladas.jpg' name='Alimentos saludables' />
          </section>
          <section className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex-wrap justify-between gap-4 w-full">
            <ProductCard
              name="Aceite En Aerosol Fritolim Girasol 120 G."
              src="https://images.deliveryhero.io/image/pedidosya/products/8c07b9a7-d04b-4e77-8752-c95f06e07648.jpg"
              id='1'
              markets={[
                {
                  id: 'market1',
                  name: 'Carrefour - Market Chilavert (203)',
                  price: 520.10,
                  img: 'https://images.deliveryhero.io/image/pedidosya/restaurants/carrefour-116-market-sta-fe-nuevo-jpg.png'
                },
                {
                  id: 'market2',
                  name: 'Dia - Villa Ballester (204)',
                  price: 530.2,
                  img: 'https://images.deliveryhero.io/image/pedidosya/restaurants/logo-dia-supermercado-01.png'
                }
              ]}
            />
            <ProductCard
              name="Aceite Lira Girasol 900 mL"
              src="https://images.deliveryhero.io/image/pedidosya/products/3618f835-bda5-4090-896d-16a3086ddeda.jpg"
              id='2'
              markets={[
                {
                  id: 'market2',
                  name: 'Dia - Villa Ballester (204)',
                  price: 530,
                  img: 'https://images.deliveryhero.io/image/pedidosya/restaurants/logo-dia-supermercado-01.png'
                },
                {
                  id: 'market1',
                  name: 'Carrefour - Market Chilavert (203)',
                  price: 504,
                  img: 'https://images.deliveryhero.io/image/pedidosya/restaurants/carrefour-116-market-sta-fe-nuevo-jpg.png'
                }
              ]}
            />
            <ProductCard
              name="Aceite De Girasol Pureza 1.5 L"
              src="https://images.deliveryhero.io/image/pedidosya/products/7792180137944.jpg"
              id='3'
              markets={[
                {
                  id: 'market1',
                  name: 'Carrefour - Market Chilavert (203)',
                  price: 759,
                  img: 'https://images.deliveryhero.io/image/pedidosya/restaurants/carrefour-116-market-sta-fe-nuevo-jpg.png'
                },
              ]}
            />
          </section>
        </div>
      </main>
    </>
  )
}
