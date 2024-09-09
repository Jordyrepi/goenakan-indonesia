import { Categories } from "@/types/categories.types";
import { Product } from "@/types/product.types";
import {
  getEntries,
  getEntriesPagination,
} from "@/utils/contenful/get-entries";
import ProductsSection from "./components/ProductsSection";

const ProductPage = async ({ searchParams }: any) => {
  const entriesCategories: Categories = await getEntries("category");

  const selectedCategory = searchParams.category || "";

  const entriesPagination: Product = await getEntriesPagination(
    Number(searchParams.page) || 1,
    selectedCategory,
  );
  
  
  const totalPages = Math.ceil(entriesPagination.total / 12);

  return (
    <main className="mx-auto w-full max-w-7xl">
      <ProductsSection
        categories={entriesCategories}
        products={entriesPagination}
        totalPages={totalPages}
      />
    </main>
  );
};

export default ProductPage;
