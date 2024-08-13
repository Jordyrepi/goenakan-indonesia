"use client";
import { Categories } from "@/types/categories.types";
import { Product } from "@/types/product.types";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

interface BestSellerSectionProps {
  products: Product;
  categories: Categories;
}

const BestSellerSection: React.FC<BestSellerSectionProps> = ({
  products,
  categories,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    categories?.items[0]?.sys.id,
  );


  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const filteredProducts = products?.items?.filter((product) => {
    return selectedCategory
      ? product.fields.category.sys.id === selectedCategory
      : true;
  });

  return (
    <section className="mx-auto w-full max-w-7xl pt-20">
      <div className="flex flex-col items-center justify-center gap-y-16">
        <div className="flex flex-col items-center justify-center gap-y-10">
          <h2 className="font-serif text-5xl font-medium">Our Best Sellers</h2>

          {/* Category Buttons */}
          <div className="space-x-5">
            {categories?.items.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategorySelect(category.sys.id)}
                className={`rounded-3xl px-5 py-2 text-sm text-white ${
                  selectedCategory === category.sys.id
                    ? "bg-[#784426]"
                    : "bg-[#7A543E] hover:bg-[#784426]"
                }`}
              >
                {category.fields.title}
              </button>
            ))}
          </div>
        </div>
        <div className="flex gap-[26px]">
          {filteredProducts?.slice(0, 4).map((product, index) => {
            const idAsset = product.fields.images[0].sys.id;
            const assets = products?.includes.Asset;
            const thumbnail = assets?.find((asset) => asset.sys.id === idAsset);

            return (
              <Link
                href={`/product/${product.fields.slug}`}
                key={index}
                className="rounded-lg border p-4 shadow-md"
              >
                <div className="relative h-[250px] w-[250px]">
                  <Image
                    src={`https:${thumbnail?.fields.file.url}`}
                    alt={product.fields.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-[250px] space-y-4 p-4">
                  <span className="text-[#7A543E]">
                    {product.fields.productsThatHaveBeenSold} sold
                  </span>
                  <h5 className="line-clamp-1 text-lg font-medium">
                    {product.fields.title}
                  </h5>
                  <p>{product.fields.price}</p>
                  <button className="w-full rounded-md bg-[#463B34] py-3 text-[#f4f4f4]">
                    SHOP NOW
                  </button>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BestSellerSection;
