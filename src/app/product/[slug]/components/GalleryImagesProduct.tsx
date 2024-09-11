"use client";

import { ProductDetails } from "@/types/product.types";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface GalleryImagesProductProps {
  product: ProductDetails;
}

const GalleryImagesProduct: React.FC<GalleryImagesProductProps> = ({
  product,
}) => {
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    if (
      product?.items[0].fields?.images &&
      product?.items[0].fields?.images.length > 0
    ) {
      const firstImageId = product.items[0].fields.images[0].sys.id;
      const assets = product.includes?.Asset;
      const firstImageAsset = assets?.find(
        (asset) => asset.sys.id === firstImageId,
      );
      const firstImageUrl = firstImageAsset?.fields?.file?.url;

      if (firstImageUrl) {
        setSelectedImage(firstImageUrl);
      } else {
        setSelectedImage("");
      }
    }
  }, [product]);

  const handleImageClick = (imageId: string) => {
    const assets = product.includes?.Asset;
    const selectedAsset = assets?.find((asset) => asset.sys.id === imageId);
    const selectedImageUrl = selectedAsset?.fields?.file?.url;

    if (selectedImageUrl) {
      setSelectedImage(selectedImageUrl);
    }
  };

  return (
    <section className="space-y-8">
      {selectedImage && (
        <div className="relative mb-4 flex h-[27rem] w-full transform items-center justify-center transition-all duration-300 hover:scale-105">
          <Image
            src={`https:${selectedImage}`}
            alt={product.items[0].fields.title}
            className="rounded-lg object-contain shadow-md transition duration-300 ease-in-out"
            fill
            quality={100}
          />
        </div>
      )}

      <div className="flex h-[7rem] items-center justify-start space-x-4 overflow-x-auto">
        {product.items[0].fields.images &&
        product.items[0].fields.images.length > 0
          ? product.items[0].fields.images.map((image, index) => {
              const imageId = image.sys.id;
              const assets = product.includes?.Asset;
              const thumbnailAsset = assets?.find(
                (asset) => asset.sys.id === imageId,
              );
              const thumbnailUrl = thumbnailAsset?.fields?.file?.url;

              return thumbnailUrl ? (
                <div
                  key={imageId}
                  className="relative mx-auto aspect-square h-[5rem] w-[5rem] flex-shrink-0 overflow-hidden"
                >
                  <Image
                    src={`https:${thumbnailUrl}`}
                    alt={`${product.items[0].fields.title} - Thumbnail ${index}`}
                    className={`transform cursor-pointer rounded-md object-cover shadow-md transition-all duration-300 hover:scale-105 ${
                      selectedImage === thumbnailUrl
                        ? "brightness-100"
                        : "brightness-75 hover:brightness-100"
                    }`}
                    onClick={() => handleImageClick(imageId)}
                    fill
                  />
                </div>
              ) : null;
            })
          : null}
      </div>
    </section>
  );
};

export default GalleryImagesProduct;
