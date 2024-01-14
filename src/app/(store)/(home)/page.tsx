import { api } from '@/data/api'
import { Product } from '@/data/types/product'
import { numberToCurrencyWithoutCents } from '@/data/util/number-to-currency'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Home',
}

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api('/products/featured/', {
    next: {
      revalidate: 60 * 60,
    },
  })

  const products = await response.json()

  return products
}

export default async function Home() {
  const [highlightedProduct, ...otherProducts] = await getFeaturedProducts()

  return (
    <div className="grid max-h-[780px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href={`/product/${highlightedProduct.slug}`}
        className="group relative col-span-6 row-span-6 flex rounded-lg bg-zinc-900 overflow-hidden justify-center items-end"
      >
        <Image
          src={highlightedProduct.image}
          width={800}
          height={800}
          quality={100}
          alt=""
          className="group-hover:scale-105 transition-transform duration-200"
        />
        <div className="absolute bottom-24 right-24 h-12 flex items-center gap-2 max-w-[250px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">{highlightedProduct.title}</span>
          <span className="text-sm flex h-full items-center justify-center rounded-full bg-red-800 px-4 font-semibold colo">
            {numberToCurrencyWithoutCents(highlightedProduct.price)}
          </span>
        </div>
      </Link>
      {otherProducts.map((product) => (
        <Link
          key={product.id}
          href={`/product/${product.slug}`}
          className="group relative col-span-3 row-span-3 flex rounded-lg bg-zinc-900 overflow-hidden justify-center items-end"
        >
          <Image
            src={product.image}
            width={400}
            height={400}
            quality={100}
            alt=""
            className="group-hover:scale-105 transition-transform duration-200"
          />
          <div className="absolute bottom-8 right-8 h-12 flex items-center gap-2 max-w-[200px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
            <span className="text-sm truncate">{product.title}</span>
            <span className="text-sm flex h-full items-center justify-center rounded-full bg-red-800 px-4 font-semibold colo">
              {numberToCurrencyWithoutCents(product.price)}
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}
