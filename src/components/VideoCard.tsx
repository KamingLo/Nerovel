interface VideoCardProps {
  title: string;
  author: string;
  thumbnail?: string;
  lengthSeconds: string;
  onDownload?: () => void;
}

export default function VideoCard({ title, author, thumbnail, lengthSeconds, onDownload }: VideoCardProps) {
  return (
    <div className="bg-gray-800 p-4 rounded w-full max-w-md text-center">
      {thumbnail && <img src={thumbnail} alt="thumbnail" className="mb-4 w-full rounded" />}
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm text-gray-400">{author}</p>
      <p className="text-sm text-gray-400">Length: {lengthSeconds} sec</p>
      {onDownload && (
        <button
          onClick={onDownload}
          className="mt-4 bg-green-500 px-4 py-2 rounded hover:bg-green-600"
        >
          Download MP3
        </button>
      )}
    </div>
  );
}
