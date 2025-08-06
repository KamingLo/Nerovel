'use client'

import { useEffect, useState } from 'react'
import { getWishlist } from '@/lib/wishlist'
import { Product } from '@/types/product'
import { ProductCard } from '@/components/ProductCard'

export default function WishlistPage() {
  const [items, setItems] = useState<Product[]>([])

  useEffect(() => {
    setItems(getWishlist())
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Wishlist Saya</h1>
      {items.length === 0 ? (
        <p className="text-gray-600">Belum ada produk di wishlist.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      )}
    </div>
  )
}
