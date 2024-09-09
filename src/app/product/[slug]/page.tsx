import { ProductDetails } from "@/types/product.types";
import { getEntriesBySlug } from "@/utils/contenful/get-entries";
import GalleryImagesProduct from "./components/GalleryImagesProduct";
import ProducDetails from "./components/ProducDetails";

const ProductSlugpage = async ({ params }: any) => {
  const product: ProductDetails = await getEntriesBySlug(
    "product",
    `${params.slug}`,
  );

  const { title, price, images, description, capacity } =
    product.items[0].fields;

  return (
    <main>
      {/* Product Detail Section */}
      <div className="mx-auto my-8 w-full max-w-6xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Product Image Section */}
          <GalleryImagesProduct product={product} />

          <ProducDetails product={product} />
        </div>
      </div>
    </main>
  );
};

export default ProductSlugpage;
