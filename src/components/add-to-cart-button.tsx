'use client'

import { useCart } from '@/app/contexts/cart-context'

export interface AddToCartButtonProps {
  productId: number
}

export function AddToCartButton({ productId }: AddToCartButtonProps) {
  const { addToCart } = useCart()

  function handleAddProductToCart() {
    addToCart(productId)
  }

  return (
    <button
      type="button"
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold  hover:bg-emerald-700 transition-[300ms] text-white  hover:text-zinc-300"
      onClick={handleAddProductToCart}
    >
      Adicionar ao carrinho
    </button>
  )
}
