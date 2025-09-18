import type { Picture } from "@/services/picture";
import Image from "next/image";

interface PictureProps {
  data: Picture;
  url: string;
}

export default function Picture({ data, url }: PictureProps) {
  return (
    <div className="py-4 border border-gray-200 rounded-lg">
      <div className="shadow-md overflow-hidden bg-white group cursor-pointer">
        <div className="relative w-full h-56">
          <Image
            src={url}
            alt={`Picture ${data.id}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gray-900 bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="text-center text-white p-4">
              <h3 className="text-lg font-semibold mb-2 break-words">
                {data.name}
              </h3>
              <p className="text-sm text-gray-200 break-all">{data.url}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
