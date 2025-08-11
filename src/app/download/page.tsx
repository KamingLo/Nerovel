'use client';
import { useState } from 'react';
import UrlInput from '@/components/UrlInput';
import VideoCard from '@/components/VideoCard';

interface VideoInfo {
  title: string;
  author: string;
  thumbnail?: string;
  lengthSeconds: string;
  views?: string;
  url: string;
}

export default function DownloadPage() {
  const [video, setVideo] = useState<VideoInfo | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (url: string) => {
    setLoading(true);
    setVideo(null);

    try {
      const res = await fetch(`/api/info?url=${encodeURIComponent(url)}`);
      if (!res.ok) throw new Error('Failed to fetch video info');

      const data = await res.json();
      setVideo({
        title: data.title,
        author: data.author,
        thumbnail: data.thumbnail,
        lengthSeconds: data.lengthSeconds,
        views: data.views,
        url,
      });
    } catch (err) {
      console.error(err);
      alert('Error fetching video info');
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!video) return;
    // Langsung trigger download di browser
    window.location.href = `/api/download?url=${encodeURIComponent(video.url)}&type=audio`;
  };

  return (
    <div className="pt-20">
      {/* Heading dua baris responsif */}
      <h1 className="text-white text-3xl sm:text-4xl font-bold mb-8 [letter-spacing:-2px] leading-tight text-center">
        Download your favorite music<br />
        fast, easy, without limits
      </h1>

      {/* Input URL */}
      <UrlInput onSubmit={handleSearch} />

      {/* Loading */}
      {loading && <p className="mt-4 text-gray-300">Loading video info...</p>}

      {/* Video Info */}
      {video && (
        <div className="mt-8">
          <VideoCard
            title={video.title}
            author={video.author}
            thumbnail={video.thumbnail}
            lengthSeconds={video.lengthSeconds}
            onDownload={handleDownload}
          />
        </div>
      )}
    </div>
  );
}