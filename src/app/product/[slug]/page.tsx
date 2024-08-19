import { getEntries, getEntriesBySlug } from "@/utils/contenful/get-entries";
import GalleryImagesProduct from "./components/GalleryImagesProduct";
import { ProductDetails } from "@/types/product.types";

const ProductSlugpage = async ({ params }: any) => {
  const product: ProductDetails = await getEntriesBySlug(
    "product",
    `${params.slug}`,
  );

  const { title, price, images, description, capacity } =
    product.items[0].fields;

  // console.log(product.items[0].fields);

  return (
    <main>
      {/* Product Detail Section */}
      <div className="mx-auto my-8 w-full max-w-6xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Product Image Section */}
          {/* <div className="space-y-4">
            <div className="relative h-[26rem] w-full overflow-hidden rounded-lg">
              <Image
                fill
                src="/product/Stainless-Sublimation-Bottle-Bamboo.jpg"
                alt="Stainless Steel Water Bottle"
                className="h-[26rem] w-full object-cover"
              />
            </div>
            <div className="flex justify-center gap-x-6">
              <Image
                fill
                src="/product/Stainless-Sublimation-Bottle-Bamboo.jpg"
                alt="Thumbnail 1"
                className="h-20 w-20 rounded-lg object-cover"
              />
              <Image
                fill
                src="/product/Stainless-Sublimation-Bottle-Bamboo.jpg"
                alt="Thumbnail 1"
                className="h-20 w-20 rounded-lg object-cover"
              />
              <Image
                fill
                src="/product/Stainless-Sublimation-Bottle-Bamboo.jpg"
                alt="Thumbnail 2"
                className="h-20 w-20 rounded-lg object-cover"
              />
              <Image
                fill
                src="/product/Stainless-Sublimation-Bottle-Bamboo.jpg"
                alt="Thumbnail 3"
                className="h-20 w-20 rounded-lg object-cover"
              />
              <Image
                fill
                src="/product/Stainless-Sublimation-Bottle-Bamboo.jpg"
                alt="Thumbnail 4"
                className="h-20 w-20 rounded-lg object-cover"
              />
            </div>
          </div> */}
          <GalleryImagesProduct />

          <div>
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="mt-2 text-gray-700">{description}</p>
            <div className="mt-4 flex items-center">
              <span className="rounded bg-gray-200 px-3 py-3 text-sm font-medium text-[#7A543E]">
                products sold
              </span>
            </div>
            <p className="mt-4 text-2xl font-bold">${price} USD</p>
            {capacity && (
              <p className="mt-2 font-bold">Capacity: {capacity}L</p>
            )}
            <div className="mt-4">
              <p className="font-medium text-gray-700">
                Custom Personalization:
              </p>
              <div className="mt-2 flex space-x-4">
                <button className="rounded-md border bg-[#463B34] px-8 py-2 text-sm text-white">
                  Yes
                </button>
                <button className="rounded-md border border-[#463B34] px-8 py-2 text-sm text-gray-700 hover:bg-gray-200">
                  No
                </button>
              </div>
            </div>

            <div className="mt-4">
              <p className="font-medium text-gray-700">Quantity:</p>
              <input
                type="number"
                defaultValue="1"
                className="mt-2 w-[150px] rounded-md border border-slate-300 px-4 py-2 text-center text-gray-700 focus:outline-none"
              />
            </div>

            <button className="mt-6 w-[20rem] rounded-md bg-[#463B34] py-3 font-semibold text-white transition">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductSlugpage;
