"use client";
import { ArticleCategory } from "@/types/article-category.types";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface FilterArticleProps {
  articleCategory: ArticleCategory;
}

const FilterArticles: React.FC<FilterArticleProps> = ({ articleCategory }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const router = useRouter();

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
    router.push(`/article?category=${categoryId}`);
  };
  return (
    <ul className="mt-4 space-y-5">
      {articleCategory.items.map((category, index) => (
        <React.Fragment key={index}>
          <li
            key={index}
            onClick={() => handleCategoryChange(category.sys.id)}
            className={`text-base duration-500 hover:font-medium hover:text-[#463b34] ${
              selectedCategoryId === category.sys.id
                ? "font-bold text-[#463b34]"
                : ""
            }`}
          >
            {category.fields.title}
          </li>
          <hr className="w-full border-[0.5]" />
        </React.Fragment>
      ))}
    </ul>
  );
};

export default FilterArticles;
