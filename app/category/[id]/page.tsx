import { getCategories } from '@/app/services/category-services';

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

  return (
    <>
      <h1>{id}</h1>
    </>
  );
}

export async function generateStaticParams(): Promise<Params[]> {
  const posts:Category[] = await getCategories()

  return posts.map(({ id }) => ({
    id,
  }));
}