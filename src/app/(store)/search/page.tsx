import { api } from '@/data/api'
import { Product } from '@/data/types/product'
import { numberToCurrencyWithoutCents } from '@/data/util/number-to-currency'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'

interface SearchProps {
  searchParams: {
    q: string
  }
}

async function getSearchProducts(query: string): Promise<Product[]> {
  const response = await api(`/products/search?q=${query}`, {
    next: {
      revalidate: 60 * 60,
    },
  })

  const products = await response.json()

  return products
}

export default async function Search({ searchParams }: SearchProps) {
  const query = searchParams.q

  if (!query) {
    redirect('/')
  }
  const products = await getSearchProducts(query)

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para: <span className="font-semibold">{query}</span>
      </p>
      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            href={product.slug}
            className="group relative flex rounded-lg bg-zinc-900 overflow-hidden justify-center items-end"
          >
            <Image
              src={product.image}
              width={400}
              height={400}
              quality={100}
              alt=""
              className="group-hover:scale-105 transition-transform duration-200"
            />
            <div className="absolute bottom-8 right-8 h-12 flex items-center gap-2 max-w-[250px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
              <span className="text-sm truncate">{product.title}</span>
              <span className="text-sm flex h-full items-center justify-center min-w-[80px] rounded-full bg-red-800 px-4 font-semibold colo">
                {numberToCurrencyWithoutCents(product.price)}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
