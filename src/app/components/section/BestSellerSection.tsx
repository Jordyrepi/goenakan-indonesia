"use client";
import { Categories } from "@/types/categories.types";
import { Product } from "@/types/product.types";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import CardProduct from "../CardProduct";

interface BestSellerSectionProps {
  products: Product;
  categories: Categories;
}

const BestSellerSection: React.FC<BestSellerSectionProps> = ({
  products,
  categories,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    categories?.items[2]?.sys.id,
  );

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const filteredProducts = products?.items
    ?.filter((product) => product.fields.bestSeller)
    ?.filter((product) => {
      return selectedCategory
        ? product.fields.category.sys.id === selectedCategory
        : true;
    });

  return (
    <section className="mx-auto w-full max-w-7xl">
      <div className="flex flex-col items-center justify-center gap-y-7">
        <div className="flex flex-col items-center justify-center gap-y-5">
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

        <div className="flex gap-[20px]">
          {filteredProducts?.slice(0, 4).map((product, index) => {
            const idAsset = product.fields.images[0].sys.id;
            const assets = products?.includes.Asset;
            const thumbnail = assets?.find((asset) => asset.sys.id === idAsset);
            const idCategory = product.fields.category.sys.id;
            const categories = products.includes.Entry;
            const category = categories.find(
              (category) => category.sys.id === idCategory,
            );
            return (
              <CardProduct
                key={index}
                thumbnailUrl={thumbnail?.fields.file.url || ""}
                category={category?.fields.title || ""}
                product={product.fields}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BestSellerSection;
