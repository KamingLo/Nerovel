'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="w-full border-b">
      <div className="mx-auto max-w-7xl px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          MyModernSite
        </Link>
        <nav className="space-x-6 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </nav>
      </div>
    </header>
  )
}
