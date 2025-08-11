interface VideoCardProps {
  title: string;
  author: string;
  thumbnail?: string;
  lengthSeconds: string;
  onDownload?: () => void;
}

export default function VideoCard({
  title,
  author,
  thumbnail,
  lengthSeconds,
  onDownload,
}: VideoCardProps) {
  return (
    <div className="bg-gray-900/60 border border-white/10 backdrop-blur-xl p-4 rounded-xl w-full max-w-md flex flex-col sm:flex-row gap-4 items-start shadow-lg mx-auto">

      {thumbnail && (
        <div className="w-full sm:w-32 aspect-square flex-shrink-0">
          <img
            src={thumbnail}
            alt="thumbnail"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
      )}

      <div className="flex flex-col flex-1 w-full">
        <h2 className="text-lg sm:text-xl font-bold text-white line-clamp-2 text-left mb-6">
          {title}
        </h2>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2 gap-2">
          <div className="text-left">
            <p className="text-sm text-gray-300">{author}</p>
            <p className="text-sm text-gray-400">
              Length: {lengthSeconds} sec
            </p>
          </div>

          {onDownload && (
            <button
              onClick={onDownload}
              className="rounded-full px-6 py-2 text-sm bg-white text-black font-medium hover:bg-gray-200 transition-colors duration-200 w-full sm:w-auto"
            >
              Download MP3
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
