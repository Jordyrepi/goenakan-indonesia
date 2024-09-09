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
    <div className="w-[300px] rounded-xl border bg-white shadow-md">
     <div className="relative h-[200px]">
        {!product.isAvailable && (
          <>
            <div className="absolute inset-0 bg-black opacity-50 z-10 rounded-md" />
            <Image
              src="/watermark out of stock.svg"
              alt="Out of stock"
              fill
              className="object-contain z-20"
            />
          </>
        )}
        <Image
          src={`https:${thumbnailUrl}`}
          alt={product.title}
          fill
          className={`object-contain ${!product.isAvailable ? 'opacity-70' : ''}`}
        />
      </div>
      <div className="p-8">
        <div className="space-y-1">
          <span className="font-sans line-clamp-1">{category}</span>
          <h5 className="line-clamp-1 text-lg font-medium">{product.title}</h5>
          <p>{`${product.long} x ${product.width} cm`}</p>
        </div>
        <h6 className="my-4 text-xl font-medium">Rp {product.price}</h6>
        <button className="h-11 w-full rounded-lg bg-[#463b34] text-white hover:bg-[#352d29]">
          <Link href={`/product/${product.slug}`}>Product Detail</Link>
        </button>
      </div>
    </div>
  );
};

export default CardProduct;
