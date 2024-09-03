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
  // console.log("check product : ",product);

  return (
    <div className="w-[300px] rounded-lg border shadow-md">
      <div className="relative h-[200px]">
        <Image
          src={`https:${thumbnailUrl}`}
          alt={product.title}
          fill
          className="object-contain"
        />
      </div>
      <div className="p-4">
        <div className="mb-4 space-y-1">
          <span className="font-sans">{category}</span>
          <h5 className="line-clamp-1 text-lg font-medium">{product.title}</h5>
        </div>
        <h6 className="font-medium text-xl mb-2">Rp {product.price}</h6>
        {/* <div className="group relative inline-block">
          <Link
            href={`/product/${product.slug}`}
            className="font-medium text-orange-400"
          >
            Product Detail...
          </Link>
          <span className="absolute bottom-0 left-0 h-[0.5px] w-full origin-left scale-x-0 transform bg-[#7A543E] transition-transform duration-1000 group-hover:scale-x-100"></span>
        </div> */}
        <button className="h-11 rounded-sm w-full bg-[#784426] text-white">Product Detail...</button>
      </div>
    </div>
  );
};

export default CardProduct;
