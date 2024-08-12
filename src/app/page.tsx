"use client";
import { Categories } from "@/types/categories.types";
import { Client, initialClientState } from "@/types/client.types";
import { Product } from "@/types/product.types";
import { getEntries } from "@/utils/contenful/get-entries";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import CarouselClient from "./components/CarouselClient";
import CustomOrderSection from "./components/CustomOrderSection";
import IconsSection from "./components/IconsSection";
import LoadingSpinner from "./components/LoadingSpinner ";

export default function Home() {
  const [client, setClient] = useState<Client>(initialClientState);
  const [categories, setCategory] = useState<Categories>();
  const [selectedCategory, setSelectedCategory] = useState();
  const [products, SetProducts] = useState<Product>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const handleCategorySelect = (category: any) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    const getClientEntries = async () => {
      setIsLoading(true);
      const entries = await getEntries("client");
      setClient(entries);
    };

    const getCategories = async () => {
      const entries = await getEntries("category");
      setCategory(entries);

      if (entries?.items.length > 0) {
        setSelectedCategory(entries.items[0].sys.id);
      }
    };

    const getBestSellerProducts = async () => {
      const entries = await getEntries("product");
      SetProducts(entries);
      setIsLoading(false);
    };

    getBestSellerProducts();
    getClientEntries();
    getCategories();
  }, []);

  const filteredProducts = products?.items.filter((product) => {
    return product.fields.category.sys.id === selectedCategory;
  });

  return (
    <main className="mb-10 space-y-10 bg-[#f4f4f4]">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <section className="flex h-screen bg-[#E1DAD6]">
            <div className="ms:top-[170px] relative top-[150px] h-fit w-[24rem] space-y-5 px-4 md:left-10 md:w-[46rem]">
              <h1 className="text-2xl font-normal md:text-4xl">
                Shining Beacon of Innovation and Sustainbility
              </h1>
              <p className="w-[35rem] text-lg font-medium">
                Born out of a deep commitment to eco-friendly practices we
                redifened everyday utensils and drinkware
              </p>
              <button className="bg-[#463B34] px-10 py-4 text-white hover:bg-[#6f584a] md:px-16">
                SHOP NOW
              </button>
            </div>
          </section>

          {/* Section 2: Clients */}
          <CarouselClient clients={client} />

          {/* Section 3: Best Seller */}
          <section className="mx-auto w-full max-w-7xl pt-20">
            <div className="flex flex-col items-center justify-center gap-y-16">
              <div className="flex flex-col items-center justify-center gap-y-10">
                <h2 className="font-serif text-5xl font-medium">
                  Our Best Sellers
                </h2>

                {/* Category Buttons */}
                <div className="space-x-5">
                  {categories?.items.map((category, index) => (
                    <button
                      key={index}
                      onClick={() => handleCategorySelect(category.sys.id)}
                      className="rounded-3xl bg-[#7A543E] px-5 py-2 text-sm text-white hover:bg-[#784426]"
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
                  const thumbnail = assets?.find(
                    (asset: any) => asset.sys.id === idAsset,
                  );

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

          {/* Section 4 : Product Categories */}
          <section className="mx-auto w-full max-w-7xl space-y-10 py-20">
            <h2 className="text-center font-serif text-5xl font-medium">
              Product Categories
            </h2>

            <div className="flex flex-wrap items-center justify-center justify-items-center gap-x-20 gap-y-12">
              {categories?.items.map((category, index) => {
                const idAsset = category.fields.image.sys.id;
                const assets = categories.includes.Asset;
                const thumbnail = assets.find(
                  (asset: any) => asset.sys.id === idAsset,
                );
                return (
                  <div
                    key={index}
                    className="animate-fadeIn transform space-y-4 transition-transform duration-500 ease-in-out hover:-translate-y-2"
                  >
                    <div className="relative h-[225px] w-[425px]">
                      <Image
                        src={`https:${thumbnail?.fields.file.url}`}
                        fill
                        className="rounded-md object-cover"
                        alt={category.fields.title}
                      />
                    </div>
                    <h4 className="text-center font-sans text-xl font-medium">
                      {category.fields.title}
                    </h4>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Section 5 : Goenakan banner */}
          <section className="relative h-[650px] w-full">
            <Image
              fill
              className="absolute z-0 object-cover"
              src={"/Goenakan ID Banner 1.png"}
              alt="Goenakan ID Banner"
            />
            <div className="absolute right-0 top-0 z-10 flex flex-col items-end space-y-5 p-10">
              <h2 className="font-serif text-4xl">
                Best Utensils from Best Materials
              </h2>
              <button className="rounded-sm bg-[#463B34] px-16 py-3 text-[#f4f4f4]">
                SHOP NOW
              </button>
            </div>
          </section>

          {/* Section 6 : Our Story */}
          <section className="mx-auto w-full max-w-7xl space-y-12 pt-14">
            <h2 className="text-center font-serif text-5xl font-medium">
              Our Story
            </h2>
            <div className="flex items-center justify-center gap-20">
              <div className="relative h-[400px] w-[350px]">
                <Image
                  fill
                  className="rounded-xl object-cover"
                  src={"/Story-Section-1.png"}
                  alt="Story-Section"
                />
              </div>
              <div className="space-y-8 md:w-[350px]">
                <p>
                  Goenakan Indonesia is a brand dedicated to making a positive
                  impact on the environment through its eco-friendly products.
                  With a strong commitment to environmental awareness, we have
                  chosen to focus on offering reusable solutions that reduce
                  waste and promote sustainability.
                </p>
                <button className="bg-[#463B34] px-12 py-3 text-white">
                  About Us
                </button>
              </div>
            </div>
          </section>

          {/* Section 7 : Icons */}
          <IconsSection />

          {/* Section 8 : Form */}
          <CustomOrderSection />
        </>
      )}
    </main>
  );
}
