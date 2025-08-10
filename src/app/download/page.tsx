"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface VideoInfo {
  title: string;
  thumbnail: string;
  lengthSeconds: string;
  author: string;
}

export default function DownloadPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [info, setInfo] = useState<VideoInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string>("");

  // Ambil info video kalau query ada
  useEffect(() => {
    const urlParam = searchParams.get("url");

    if (urlParam) {
      setVideoUrl(urlParam);
      setLoading(true);

      fetch(`/api/info?url=${urlParam}`) // 🚀 Tidak pakai encode lagi
        .then((res) => res.json())
        .then((data) => {
          if (data && !data.error) {
            setInfo(data);
          } else {
            setInfo(null);
          }
        })
        .catch(() => {
          setInfo(null);
        })
        .finally(() => setLoading(false));
    }
  }, [searchParams]);

  // Form input kalau belum ada query
  if (!searchParams.get("url")) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
        <h1 className="text-2xl font-bold mb-4">Paste YouTube Link</h1>
        <input
          type="text"
          placeholder="https://www.youtube.com/watch?v=..."
          className="w-96 p-2 rounded text-black"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />
        <button
          className="mt-4 bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => {
            if (videoUrl) {
              router.push(`/download?url=${encodeURIComponent(videoUrl)}`);
            }
          }}
        >
          Search
        </button>
      </div>
    );
  }

  if (loading) return <div className="text-white p-6">Loading...</div>;
  if (!info) return <div className="text-red-500 p-6">Invalid video or no URL provided</div>;

  // Tampilkan info video + tombol download
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">Download Music</h1>
      <img src={info.thumbnail} alt={info.title} className="w-64 rounded shadow" />
      <h2 className="mt-4 text-xl">{info.title}</h2>
      <p className="text-gray-400">
        By {info.author} • {Math.floor(Number(info.lengthSeconds) / 60)} min
      </p>
      <a
        href={`/api/download?url=${encodeURIComponent(videoUrl)}`}
        className="mt-6 bg-green-500 px-4 py-2 rounded hover:bg-green-600"
      >
        Download MP3
      </a>
    </div>
  );
}
