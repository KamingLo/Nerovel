import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="shadow p-4 flex justify-between">
      <Link href="/" className="text-lg font-bold">Katalog</Link>
      <Link href="/wishlist" className="text-blue-600 hover:underline">Wishlist</Link>
    </nav>
  )
}
