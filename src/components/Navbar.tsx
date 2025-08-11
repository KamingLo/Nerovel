'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/download', label: 'Download' },
    { href: '/about', label: 'About' },
  ];

  const linkClass =
    'relative group hover:text-white transition-colors duration-300 text-gray-300';

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 bg-black/4 border border-white/10 backdrop-blur-xl shadow-lg rounded-full px-6 py-3 flex items-center justify-between w-[92%] max-w-3xl z-50">
      <Link href="/" className="text-lg drop-shadow-sm text-white">
        Nerovel
      </Link>

      <div className="hidden md:flex space-x-8 p-2">
        {navLinks.map(({ href, label }) => (
          <Link key={href} href={href} className={linkClass}>
            {label}
          </Link>
        ))}
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
        className="md:hidden p-2 rounded-lg hover:bg-white/30 dark:hover:bg-gray-700/30 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      <div
        className={`absolute top-14 right-4 bg-white/5 border border-white/30 backdrop-blur-xl rounded-lg shadow-lg p-5 flex flex-col space-y-4 md:hidden transform transition-all duration-300 origin-top ${
          isOpen
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
        }`}
      >
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            onClick={() => setIsOpen(false)}
            className="hover:text-white transition-colors duration-300 text-gray-400"
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
