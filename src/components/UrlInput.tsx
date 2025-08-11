'use client';
import { useState } from 'react';

interface UrlInputProps {
  initialUrl?: string;
  onSubmit: (url: string) => void;
  placeholder?: string;
  buttonLabel?: string;
}

export default function UrlInput({
  initialUrl = '',
  onSubmit,
  placeholder = 'Paste YouTube URL...',
  buttonLabel = 'Search',
}: UrlInputProps) {
  const [url, setUrl] = useState(initialUrl);

  const handleSubmit = () => {
    if (!url) return alert('Please enter a URL');
    onSubmit(url);
  };

  return (
    <div className="flex w-full max-w-lg gap-3 bg-gray-900/60 border border-white/10 backdrop-blur-xl pl-2 pt-1 pb-1 rounded-xl shadow-lg">
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder={placeholder}
        className="flex-1 p-1 rounded-lg text-white bg-transparent outline-none placeholder-gray-400"
      />
      <button
        onClick={handleSubmit}
        className="rounded-full px-4 py-1 bg-white text-black font-medium hover:bg-gray-200 transition-colors duration-200 m-2 w-auto"
      >
        {buttonLabel}
      </button>
    </div>
  );
}
