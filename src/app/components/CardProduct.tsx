import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CardProductProps {
  slug: string;
  thumbnailUrl: string;
  title: string;
  productsThatHaveBeenSold: string;
  price: string;
}

const CardProduct: React.FC<CardProductProps> = ({
  slug,
  thumbnailUrl,
  title,
  productsThatHaveBeenSold,
  price,
}) => {
  return (
    <Link
      href={`/product/${slug}`}
      className="w-[300px] rounded-lg border shadow-md"
    >
      <div className="relative h-[200px]">
        <Image
          src={`https:${thumbnailUrl}`}
          alt={title}
          fill
          className="object-contain"
        />
      </div>
      <div className="space-y-4 p-4">
        <span className="text-[#7A543E]">{productsThatHaveBeenSold} sold</span>
        <h5 className="line-clamp-1 text-lg font-medium">{title}</h5>
        <p>{price}</p>
        <button className="w-full rounded-md bg-[#463B34] py-3 text-[#f4f4f4]">
          SHOP NOW
        </button>
      </div>
    </Link>
  );
};

export default CardProduct;
