'use client'

import CategoryCard from "./CategoryCard";
import MarketCard from "./MarketCard";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";

export default function Content() {
  const handleSearch = (value: string) => {
    console.log(value)
  }

  return (
    <div className="flex flex-col items-center p-4 gap-4 max-w-5xl">
      <SearchBar handleSearch={handleSearch} />
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center w-full">
        <MarketCard img='https://pedidosya-api.whoknows.workers.dev/static/markets/63ccfd52aa705832ee237632.webp' name='Carrefour - Market Chilavert (203)' />
        <MarketCard img='https://pedidosya-api.whoknows.workers.dev/static/markets/63ccfa15aa705832ee236776.webp' name='Dia - Villa Ballester (204)' />
      </section>
      <section className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex-wrap justify-between gap-4 w-full">
        <CategoryCard img='/images/placeholder-product.png' name='Aceites' />
        <CategoryCard img='/images/placeholder-product.png' name='Aguas' />
        <CategoryCard img='/images/placeholder-product.png' name='Alimentos saludables' />
      </section>
      <section className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex-wrap justify-between gap-4 w-full">
        <ProductCard
          name="Aceite En Aerosol Fritolim Girasol 120 G."
          src="https://pedidosya-api.whoknows.workers.dev/static/products/63ccfa15aa705832ee236778.webp"
          id='1'
          markets={[
            {
              id: 'market1',
              name: 'Carrefour - Market Chilavert (203)',
              price: 520.10,
              img: 'https://pedidosya-api.whoknows.workers.dev/static/markets/63ccfd52aa705832ee237632.webp'
            },
            {
              id: 'market2',
              name: 'Dia - Villa Ballester (204)',
              price: 530.2,
              img: 'https://pedidosya-api.whoknows.workers.dev/static/markets/63ccfa15aa705832ee236776.webp'
            }
          ]}
        />
        <ProductCard
          name="Aceite Lira Girasol 900 mL"
          src="https://pedidosya-api.whoknows.workers.dev/static/products/63ccfd52aa705832ee23763e.webp"
          id='2'
          markets={[
            {
              id: 'market2',
              name: 'Dia - Villa Ballester (204)',
              price: 530,
              img: 'https://pedidosya-api.whoknows.workers.dev/static/markets/63ccfa15aa705832ee236776.webp'
            },
            {
              id: 'market1',
              name: 'Carrefour - Market Chilavert (203)',
              price: 504,
              img: 'https://pedidosya-api.whoknows.workers.dev/static/markets/63ccfd52aa705832ee237632.webp'
            }
          ]}
        />
        <ProductCard
          name="Aceite De Girasol Pureza 1.5 L"
          src="https://pedidosya-api.whoknows.workers.dev/static/products/63ccfa1baa705832ee2367e4.webp"
          id='3'
          markets={[
            {
              id: 'market1',
              name: 'Carrefour - Market Chilavert (203)',
              price: 759,
              img: 'https://pedidosya-api.whoknows.workers.dev/static/markets/63ccfd52aa705832ee237632.webp'
            },
          ]}
        />
      </section>
    </div>
  )
}
