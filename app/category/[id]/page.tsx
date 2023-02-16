import ProductCard from '@/app/components/ProductCard'
import { getCategories } from '@/app/services/category-services'
import { getProductsBy, Product } from '@/app/services/product-services'

interface Params {
  id: string
}

export interface Category {
  id: string,
  name: string
}

type Props = {
  params: Params
} 

export default async function Category({ params }: Props) {
  const { id } = params
  let products:Product[] = []

  try {
    products = await getProductsBy(id)
  } catch(error) {
    console.log(error)
  }

  return (
    <section className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex-wrap justify-between gap-4 w-full">
      {products.map((product) => {
        const markets = product.prices.map(({ price, market }) => {
          return {
            id: market.id,
            name: market.name,
            img: market.image,
            price
          }
        })
        return (
          <ProductCard key={product.id} src={product.image} name={product.name} id={product.id} markets={markets}/>
        )
      })}
    </section>
  );
}

export async function generateStaticParams(): Promise<Params[]> {
  const posts:Category[] = await getCategories()

  return posts.map(({ id }) => ({
    id,
  }));
}