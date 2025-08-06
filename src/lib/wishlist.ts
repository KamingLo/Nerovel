import { Product } from '@/types/product'

export function getWishlist(): Product[] {
  if (typeof window === 'undefined') return []
  const saved = localStorage.getItem('wishlist')
  return saved ? JSON.parse(saved) : []
}

export function addToWishlist(product: Product): void {
  const current = getWishlist()
  const exists = current.find((item) => item.id === product.id)
  if (!exists) {
    const updated = [...current, product]
    localStorage.setItem('wishlist', JSON.stringify(updated))
  }
}

export function isInWishlist(id: number): boolean {
  const current = getWishlist()
  return current.some((item) => item.id === id)
}
