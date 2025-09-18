"use client";
import Layout from "@/components/layout";
import Picture from "@/components/pictures/picture";
import { usePictures } from "@/hooks/usePicture";

export default function PicturePages() {
  const localImages = Array.from(
    { length: 5 },
    (_, index) => `/images/${index + 1}.jpg`
  );
  const { data: pictures, isLoading, error } = usePictures();

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-center text-gray-900">
          Picture Gallery
        </h1>
        {isLoading && (
          <p className="text-center mt-8 text-gray-500">Loading pictures...</p>
        )}
        {error && (
          <p className="text-center mt-8 text-red-500">{error.message}</p>
        )}
        {pictures && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {pictures.map((p, idx) => (
              <Picture
                key={p.id}
                data={p}
                url={localImages[idx % localImages.length]}
              />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
