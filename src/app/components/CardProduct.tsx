import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductCardProps } from "@/types/product.types";

interface CardProductProps {
  thumbnailUrl: string;
  product: ProductCardProps;
}

const CardProduct: React.FC<CardProductProps> = ({ thumbnailUrl, product }) => {
  console.log("check product : ", product);

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
      <div className="space-y p-4">
        <span className="text-[#7A543E]">
          {product.productsThatHaveBeenSold} sold
        </span>
        <h5 className="line-clamp-1 text-lg font-medium">{product.title}</h5>
        <p className="my-4 line-clamp-2">{product.description}</p>
        <div className="group relative inline-block">
          <Link
            href={`/product/${product.slug}`}
            className="font-medium text-orange-400"
          >
            Product Detail...
          </Link>
          <span className="absolute bottom-0 left-0 h-[0.5px] w-full origin-left scale-x-0 transform bg-[#7A543E] transition-transform duration-1000 group-hover:scale-x-100"></span>
        </div>
        {/* <button className="w-full rounded-md bg-[#463B34] py-3 text-[#f4f4f4]">
          Product Detail
        </button> */}
      </div>
    </div>
  );
};

export default CardProduct;
