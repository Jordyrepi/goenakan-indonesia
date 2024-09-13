"use client";
import { Categories } from "@/types/categories.types";
import { Product } from "@/types/product.types";
import { useState } from "react";
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
    categories?.items[0]?.sys.id,
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
    <section className="mx-auto w-full max-w-7xl px-4">
      <div className="flex flex-col items-center justify-center gap-y-7">
        <h2 className="text-center font-gilda text-3xl font-medium md:text-5xl">
          Our Best Sellers
        </h2>

        <div className="w-full overflow-x-auto">
          <div className="flex justify-center space-x-5 whitespace-nowrap">
            {categories?.items.slice(0, 4).map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategorySelect(category.sys.id)}
                className={`rounded-3xl px-4 py-2 text-sm text-white font-openSans transition-all duration-300 md:px-5 md:py-2 ${
                  selectedCategory === category.sys.id
                    ? "bg-[#463b34]"
                    : "bg-[#463b34] hover:bg-[#352d29]"
                }`}
              >
                {category.fields.title}
              </button>
            ))}
          </div>
        </div>

        <div className="md:flex md:gap-[20px] gap-3 grid grid-cols-2">
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
