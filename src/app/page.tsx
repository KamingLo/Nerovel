'use client'

import { useState } from 'react'

export default function HomePage() {
  const [count, setCount] = useState(0)

  return (
    <main className="flex items-center justify-center min-h-screen text-gray-900">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md text-center border border-gray-200">
        <h1 className="text-2xl font-semibold mb-4 text-grey-900">🔥 Clicker Counter</h1>

        <div className="text-6xl font-bold text-blue-600 mb-6">{count}</div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => setCount(count + 1)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-xl transition duration-200"
          >
            + Click
          </button>

          <button
            onClick={() => setCount(0)}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-3 px-6 rounded-xl transition duration-200"
          >
            Reset
          </button>
        </div>
      </div>
    </main>
  )
}
