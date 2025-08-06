'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { addToWishlist, isInWishlist } from '@/lib/wishlist'
import { Product } from '@/types/product'

interface Props {
  product: Product
}

export function ProductCard({ product }: Props) {
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    setSaved(isInWishlist(product.id))
  }, [product.id])

  const handleClick = () => {
    addToWishlist(product)
    setSaved(true)
  }

  return (
    <div className="border p-4 rounded shadow">
      <Image
        src={product.thumbnail}
        alt={product.title}
        width={400}
        height={200}
        className="h-40 w-full object-cover mb-2 rounded"
      />
      <h2 className="font-bold text-lg">{product.title}</h2>
      <p className="text-gray-600">${product.price}</p>
      <button
        onClick={handleClick}
        disabled={saved}
        className={`mt-2 px-4 py-1 rounded ${
          saved ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600 text-white'
        }`}
      >
        {saved ? 'Tersimpan' : 'Tambah ke Wishlist'}
      </button>
    </div>
  )
}
