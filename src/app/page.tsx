import { ProductCard } from '@/components/ProductCard'
import { Product } from '@/types/product'

export default async function HomePage() {
  const res = await fetch('https://dummyjson.com/products?limit=12')
  const data = await res.json()
  const products: Product[] = data.products

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  )
}
