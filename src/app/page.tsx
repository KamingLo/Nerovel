"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [url, setUrl] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    if (!url) return alert('Please enter a URL');
    router.push(`/download?url=${encodeURIComponent(url)}`);
  };

  return (
    <div className="">
      <h1 className="text-white text-2xl font-bold mb-4">Music Downloader</h1>
      <input
        type="text"
        placeholder="Paste YouTube link..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="p-2 rounded text-white w-96"
      />
      <button
        onClick={handleSearch}
        className="mt-4 bg-green-500 px-4 py-2 rounded hover:bg-green-600"
      >
        Search
      </button>
    </div>
  );
}
