"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { Categories } from "@/types/categories.types";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface FilterProductsProps {
  categories: Categories;
  onCategoryChange: (categoryId: string) => void; // Passing sys.id of the selected category
}

const FilterProducts: React.FC<FilterProductsProps> = ({
  categories,
  onCategoryChange,
}) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const router = useRouter();
  useEffect(() => {}, [categories]);

  const handleCategoryChange = (newCategoryId: string) => {
    setSelectedCategoryId(newCategoryId);
    onCategoryChange(newCategoryId);
    router.push(`/product?category=${newCategoryId}`);
  };

  return (
    <div className="flex items-center ">
      <Select value={selectedCategoryId} onValueChange={handleCategoryChange}>
        <SelectTrigger className="">
          <SelectValue placeholder={selectedCategoryId? selectedCategoryId : "All products"} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {categories.items.map((category) => (
              <SelectItem key={category.sys.id} value={category.sys.id}>
                {category.fields.title}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default FilterProducts;
