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
  console.log("check product details : ", product);
  const [selectedImage, setSelectedImage] = useState("");

  // Extracting the thumbnail URLs
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
    <section>
      {selectedImage && (
        <div className="relative mb-4 flex transform items-center justify-center transition-all duration-300 hover:scale-105">
          <Image
            src={`https:${selectedImage}`}
            alt={product.items[0].fields.title}
            className="h-auto max-w-full rounded-lg object-cover shadow-md transition duration-300 ease-in-out"
            priority
            width={500}
            height={500}
            quality={100}
          />
        </div>
      )}

<div className="flex justify-center items-center space-x-2 overflow-x-auto">
        {product.items[0].fields.images && product.items[0].fields.images.length > 0 ? (
          product.items[0].fields.images.map((image, index) => {
            const imageId = image.sys.id;
            const assets = product.includes?.Asset;
            const thumbnailAsset = assets?.find((asset) => asset.sys.id === imageId);
            const thumbnailUrl = thumbnailAsset?.fields?.file?.url;

            return thumbnailUrl ? (
              <Image
                key={imageId}
                src={`https:${thumbnailUrl}`}
                alt={`${product.items[0].fields.title} - Thumbnail ${index}`}
                className={`rounded-md shadow-md cursor-pointer transform transition-all hover:scale-105 duration-300 ${
                  selectedImage === thumbnailUrl
                    ? "brightness-100"
                    : "brightness-75 hover:brightness-100"
                }`}
                onClick={() => handleImageClick(imageId)}
                width={100}
                height={100}
              />
            ) : null;
          })
        ) : null}
      </div>
    </section>
  );
};

export default GalleryImagesProduct;
