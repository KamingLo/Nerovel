export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="max-w-7xl mx-auto px-4 py-6 text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} MyModernSite. All rights reserved.
      </div>
    </footer>
  )
}
