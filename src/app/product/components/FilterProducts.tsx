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
import { getEntriesCategoryBySysId } from "@/utils/contenful/get-entries";
import { useRouter, useSearchParams } from "next/navigation";
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
  const [categoryParams, setCategoryParams] = useState("");
  const router = useRouter();
  const params = useSearchParams();
  const categorySysId = params.get("category"); // Extracts the 'category' from URL params
  console.log("check params : ", categoryParams);

  useEffect(() => {
    if (categorySysId) {
      const fetchCategoryBySysId = async () => {
        try {
          const category: Categories = await getEntriesCategoryBySysId(
            String(categorySysId), // Pass the actual categorySysId, not the function
          );

          setCategoryParams(category.items[0].fields.slug);
          console.log("check fetch category : ", category.items[0].fields.slug);
        } catch (error) {
          console.error("Error fetching category: ", error);
        }
      };

      fetchCategoryBySysId();
    }
  }, [categorySysId]);

  const handleCategoryChange = (newCategoryId: string) => {
    setSelectedCategoryId(newCategoryId);
    onCategoryChange(newCategoryId);
    router.push(`/product?category=${newCategoryId}`);
  };
  console.log("check category id : ", selectedCategoryId);

  return (
    <div className="flex items-center">
      <Select value={selectedCategoryId} onValueChange={handleCategoryChange}>
        <SelectTrigger className="">
          <SelectValue
            placeholder={categoryParams ? categoryParams : "All products"}
          />
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
