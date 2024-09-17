import Image, { StaticImageData } from "next/image";
import { useState } from "react";

interface GalleryProps {
  images: StaticImageData[];
};
export default function Gallery({ images }: GalleryProps) {

    const [selectedImage, setSelectedImage] = useState<StaticImageData>(images[0]);
  
    return (
      <div className="flex w-1/2">
  
        <div className="flex flex-col w-1/6 mr-2">
          {images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className={`w-full rounded mb-2 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 ${
                selectedImage === img ? "border-2 border-gray-500" : ""
              }`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>

        <div className="w-full">
          <Image
            src={selectedImage}
            alt="Main Product"
            className="w-42 rounded mx-10"
          />
        </div>
      </div>
    );
  };