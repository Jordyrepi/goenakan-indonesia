import { Categories } from "@/types/categories.types";
import { Product } from "@/types/product.types";
import {
  getBestSellerCategoriesEntries,
  getEntries,
} from "@/utils/contenful/get-entries";
import Image from "next/image";
import CarouselClient from "./components/CarouselClient";
import CustomOrderSection from "./components/section/CustomOrderSection";
import IconsSection from "./components/section/IconsSection";
import BestSellerSection from "./components/section/BestSellerSection";

const Home = async () => {
  const client = await getEntries("client");
  const bestSellerCategories: Categories =
    await getBestSellerCategoriesEntries();
  const products: Product = await getEntries("product");

  return (
    <main className="mb-10 space-y-10 bg-[#f4f4f4] md:space-y-20">
      <section className="flex h-screen bg-[#E1DAD6]">
        <div className="relative top-[80px] h-fit space-y-5 px-4 md:left-10 md:top-[170px] md:w-[46rem]">
          <h1 className="font-gilda text-2xl font-normal md:text-4xl">
            Shining Beacon of Innovation and Sustainbility
          </h1>
          <p className="text-lg font-medium font-openSans md:w-[35rem]">
            Born out of a deep commitment to eco-friendly practices we redifened
            everyday utensils and drinkware
          </p>
          <button className="rounded-sm bg-[#463B34] px-10 py-2 text-white hover:bg-[#6f584a] md:px-16 md:py-4">
            SHOP NOW
          </button>
        </div>
      </section>

      {/* Section 2: Clients */}
      <CarouselClient clients={client} />

      {/* Section 3: Best Seller */}
      <BestSellerSection
        products={products}
        categories={bestSellerCategories}
      />

      {/* Section 4 : Product Categories */}
      <section className="mx-auto my-20 w-full max-w-7xl space-y-5 px-4">
        <h2 className="font-gilda text-center text-3xl font-medium md:text-5xl">
          Product Categories
        </h2>

        <div className="flex flex-wrap items-center justify-center justify-items-center">
          <div className="flex w-[820px] flex-wrap gap-5 gap-x-[60px]">
            {bestSellerCategories?.items
              .slice(0, 4)
              .map((category, index: number) => {
                const idAsset = category.fields.image.sys.id;
                const assets = bestSellerCategories.includes.Asset;
                const thumbnail = assets.find(
                  (asset: any) => asset.sys.id === idAsset,
                );

                return (
                  <div
                    key={index}
                    className="animate-fadeIn transform space-y-4 transition-transform duration-500 ease-in-out hover:-translate-y-2"
                  >
                    <div className="relative h-[180px] w-[380px]">
                      <Image
                        src={`https:${thumbnail?.fields.file.url}`}
                        fill
                        className="rounded-md object-cover"
                        alt={category.fields.title}
                      />
                    </div>
                    <h4 className="font-openSans text-center text-xl font-semibold">
                      {category.fields.title}
                    </h4>
                  </div>
                );
              })}
          </div>
        </div>
      </section>

      {/* Section 5 : Goenakan banner */}
      <section className="relative h-[325px] w-full md:h-[650px]">
        <Image
          fill
          className="absolute z-0 object-cover"
          src={"/Goenakan ID Banner 1.png"}
          alt="Goenakan ID Banner"
        />
        <div className="absolute right-0 top-0 z-10 flex flex-col items-end space-y-5 p-2 md:p-10">
          <h2 className="font-gilda text-xl md:text-4xl">
            Best Utensils from Best Materials
          </h2>
          <button className="font-openSans rounded-sm bg-[#463B34] px-10 py-2 text-sm text-[#f4f4f4] md:px-16 md:py-3">
            SHOP NOW
          </button>
        </div>
      </section>

      {/* Section 6 : Our Story */}
      <section className="mx-auto w-full max-w-7xl space-y-4 px-4 md:space-y-12 md:pt-14">
        <h2 className="font-gilda text-center text-3xl font-medium md:text-5xl">
          Our Story
        </h2>
        <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:gap-20">
          <div className="relative h-[200px] w-full md:h-[400px] md:w-[350px]">
            <Image
              fill
              className="rounded-xl object-cover"
              src={"/Story-Section-1.png"}
              alt="Story-Section"
            />
          </div>
          <div className="space-y-4 md:w-[350px] md:space-y-8">
            <p className="font-gilda text-[19px] font-medium">
              Goenakan Indonesia is a brand dedicated to making a positive
              impact on the environment through its eco-friendly products. With
              a strong commitment to environmental awareness, we have chosen to
              focus on offering reusable solutions that reduce waste and promote
              sustainability.
            </p>
            <button className="font-openSans rounded-md bg-[#463B34] px-12 py-3 text-white hover:bg-[#352d29]">
              About Us
            </button>
          </div>
        </div>
      </section>

      {/* Section 7 : Why Choose Us Icons */}
      <IconsSection />

      {/* Section 8 : Form */}
      <CustomOrderSection />
    </main>
  );
};

export default Home;
