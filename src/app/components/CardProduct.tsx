import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductCardProps } from "@/types/product.types";

interface CardProductProps {
  thumbnailUrl: string;
  product: ProductCardProps;
  category: string;
}

const CardProduct: React.FC<CardProductProps> = ({
  thumbnailUrl,
  product,
  category,
}) => {
  return (
    <div className="w-[173px] rounded-xl border bg-white shadow-md md:w-[300px]">
      <div className="relative mx-auto aspect-square w-full overflow-hidden">
        {!product.isAvailable && (
          <>
            <div className="absolute inset-0 z-10 rounded-md bg-black opacity-50" />
            <Image
              src="/watermark out of stock.svg"
              alt="Out of stock"
              fill
              className="z-20 "
            />
          </>
        )}
        <Image
          src={`https:${thumbnailUrl}`}
          alt={product.title}
          fill
          className={`mx-auto object-cover rounded-md ${!product.isAvailable ? "opacity-70" : ""}`}
        />
      </div>
      <div className="p-4 md:p-8">
        <div className="space-y-1">
          <span className="line-clamp-1 font-sans text-[12px] md:text-sm">
            {category}
          </span>
          <h5 className="line-clamp-1 font-medium md:text-lg">
            {product.title}
          </h5>
          <p>{`${product.long} x ${product.width} cm`}</p>
        </div>
        <h6 className="my-4 font-medium md:text-xl">Rp {product.price}</h6>
        <button className="h-8 w-full rounded-lg bg-[#463b34] text-white hover:bg-[#352d29] md:h-11">
          <Link href={`/product/${product.slug}`}>Product Detail</Link>
        </button>
      </div>
    </div>
  );
};

export default CardProduct;
