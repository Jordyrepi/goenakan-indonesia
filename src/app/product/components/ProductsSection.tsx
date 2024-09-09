"use client";
import { Categories } from "@/types/categories.types";
import { Product } from "@/types/product.types";
import React, { useState, useEffect } from "react";
import FilterProducts from "./FilterProducts";
import CardProduct from "@/app/components/CardProduct";
import PaginationComp from "./Pagination";

interface ProductsSectionProps {
  products: Product;
  categories: Categories;
  totalPages: number;
}

const ProductsSection: React.FC<ProductsSectionProps> = ({
  products,
  categories,
  totalPages,
}) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("");

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
  };

  return (
    <section className="space-y-10 py-10">
      <div className="mr-5 flex justify-end">
        <FilterProducts
          categories={categories}
          onCategoryChange={handleCategoryChange}
        />
      </div>

      {/* Display filtered products */}
      <div className="flex flex-wrap items-center gap-6">
        {products.items.map((product, index) => {
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

      <PaginationComp totalPages={totalPages} />
    </section>
  );
};

export default ProductsSection;
