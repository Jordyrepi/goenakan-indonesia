import CarouselClient from "@/app/components/CarouselClient";
import CustomOrderSection from "@/app/components/section/CustomOrderSection";
import IconsSection from "@/app/components/section/IconsSection";
import { Client, initialClientState } from "@/types/client.types";
import { getEntries } from "@/utils/contenful/get-entries";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const ProductSlugpage = async () => {
  const client = await getEntries("client");

  const params = useParams();
  const { slug } = params;
  console.log("check params", params);

  return (
    <main>
      {/* Product Detail Section */}
      <div className="mx-auto my-8 w-full max-w-6xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Product Image Section */}
          <div className="space-y-4">
            <div className="overflow-hidden rounded-lg">
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
          </div>

          {/* Product Info Section */}
          <div>
            <h1 className="text-3xl font-bold">Stainless Steel Water Bottle</h1>
            <p className="mt-2 text-gray-700">
              Introducing the Goenakan Indonesia Ceramic Coating Inner Water
              Bottle, the perfect fusion of style and functionality. Crafted
              with precision, this sports bottle and drink tumbler is designed
              to meet your hydration needs while making a bold statement.
            </p>
            <div className="mt-4 flex items-center">
              <span className="rounded bg-gray-200 px-3 py-3 text-sm font-medium text-[#7A543E]">
                12345 products sold
              </span>
            </div>
            <p className="mt-4 text-2xl font-bold">$15 USD</p>
            <p className="mt-2 font-bold">Capacity: 0.5L</p>

            {/* Custom Personalization Option */}
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

            {/* Quantity Selector */}
            <div className="mt-4">
              <p className="font-medium text-gray-700">Quantity:</p>
              <input
                type="number"
                defaultValue="1"
                className="mt-2 w-[150px] rounded-md border border-slate-300 px-4 py-2 text-center text-gray-700 focus:outline-none"
              />
            </div>

            {/* Shop Now Button */}
            <button className="mt-6 w-[20rem] rounded-md bg-[#463B34] py-3 font-semibold text-white transition">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>

      <CarouselClient clients={client} />
      {/* Section Icons */}
      <IconsSection />
      {/* Custom FOrm */}
      <CustomOrderSection />
    </main>
  );
};

export default ProductSlugpage;
