'use client';
import { useState } from 'react';

interface UrlInputProps {
  initialUrl?: string;
  onSubmit: (url: string) => void;
  placeholder?: string;
  buttonLabel?: string;
}

export default function UrlInput({ initialUrl = '', onSubmit, placeholder = 'Paste YouTube URL...', buttonLabel = 'Search' }: UrlInputProps) {
  const [url, setUrl] = useState(initialUrl);

  const handleSubmit = () => {
    if (!url) return alert('Please enter a URL');
    onSubmit(url);
  };

  return (
    <div className="flex w-full max-w-md gap-2">
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder={placeholder}
        className="flex-1 p-3 rounded text-black"
      />
      <button
        onClick={handleSubmit}
        className="bg-green-500 px-4 py-2 rounded hover:bg-green-600"
      >
        {buttonLabel}
      </button>
    </div>
  );
}
