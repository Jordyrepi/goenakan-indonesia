"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
} from "@/components/ui/Select";
import { Client } from "@/types/client.types";
import { SelectTrigger, SelectValue } from "@radix-ui/react-select";
import Image from "next/image";
import { useState } from "react";
import CarouselClient from "./components/CarouselClient";

export default function Home() {
  const dummyClients: Client[] = [
    {
      id: 1,
      name: "Hotel Indigo",
      image: "/Hotel-Indigo.png",
    },
    {
      id: 2,
      name: "Potato Head",
      image: "/Potato-Head.png",
    },
    {
      id: 3,
      name: "Sima Hotel",
      image: "/Sima-Hotel.png",
    },
    {
      id: 4,
      name: "Make Over",
      image: "/Make-Over.png",
    },
    {
      id: 5,
      name: "Nihi Sumba",
      image: "/Nihi-Sumba.png",
    },
    {
      id: 6,
      name: "Como Ubud",
      image: "/Como-Ubud.png",
    },
    {
      id: 7,
      name: "Como Ubud",
      image: "/Como-Ubud.png",
    },
    {
      id: 8,
      name: "Como Ubud",
      image: "/Como-Ubud.png",
    },
    {
      id: 9,
      name: "Como Ubud",
      image: "/Como-Ubud.png",
    },
    {
      id: 10,
      name: "Como Ubud",
      image: "/Como-Ubud.png",
    },
  ];

  const dummyBestSeller = [
    {
      id: 1,
      categoryName: "STAINLESS STEEL",
      image: "/Stainless Steel.png",
      product: [
        {
          id: 1,
          thumbnail: "/product/Stainless-Sublimation-Bottle-Bamboo.jpg",
          sold: "12345 products sold",
          title: "Stainless Sublimation Bottle ",
          price: "$15.00",
        },
        {
          id: 2,
          thumbnail: "/product/Stainless-Steel-Bottle.png",
          sold: "12345 products sold",
          title: "Stainless Steel Bottle  ",
          price: "$15.00",
        },
        {
          id: 2,
          thumbnail: "/product/Stainless-Steel-Vacum-Bottle.jpg",
          sold: "12345 products sold",
          title: "Stainless Steel Vacum Bottle ",
          price: "$15.00",
        },
        {
          id: 2,
          thumbnail: "/product/Stainless-Steel-Bottle-1.png ",
          sold: "12345 products sold",
          title: "Stainless Steel Bottle  ",
          price: "$15.00",
        },
      ],
    },
    {
      id: 2,
      categoryName: "BAMBOO PRODUCTS",
      image: "/Stainless Steel.png",
      product: [
        {
          id: 1,
          thumbnail: "/product/Stainless-Steel-Bottle-1.png",
          sold: "12345 products sold",
          title: "Stainless Steel Bottle  ",
          price: "$15.00",
        },
      ],
    },
    {
      id: 3,
      categoryName: "GLASS PRODUCTS",
      image: "/Stainless Steel.png",
      product: [
        {
          id: 1,
          thumbnail: "/product/Stainless-Steel-Bottle.png",
          sold: "12345 products sold",
          title: "Stainless Steel Bottle  ",
          price: "$15.00",
        },
        {
          id: 2,
          thumbnail: "/product/Stainless-Steel-Vacum-Bottle.jpg",
          sold: "12345 products sold",
          title: "Stainless Steel Vacum Bottle ",
          price: "$15.00",
        },
      ],
    },
    {
      id: 4,
      categoryName: "MIX",
      image: "/Stainless Steel.png",
      product: [
        {
          id: 1,
          thumbnail: "/product/Stainless-Sublimation-Bottle-Bamboo.jpg",
          sold: "12345 products sold",
          title: "Stainless Sublimation Bottle ",
          price: "$15.00",
        },
      ],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(dummyBestSeller[0]);

  const handleCategorySelect = (category: any) => {
    setSelectedCategory(category);
  };

  const icons = [
    {
      id: 1,
      title: "Eco-friendly Products",
    },
    {
      id: 2,
      title: "Sustainable Materials",
    },
    {
      id: 3,
      title: "Reusable Materials",
    },
    {
      id: 4,
      title: "Custom Orders",
    },
    {
      id: 5,
      title: "Quality Craftsmanship",
    },
    {
      id: 6,
      title: "Hospitality Industry Expert",
    },
  ];

  return (
    <main className="space-y-10 bg-[#f4f4f4] mb-10">
      {/* Section 1: Hero */}
      <section className="flex h-screen bg-[#E1DAD6]">
        <div className="ms:top-[170px] relative top-[150px] h-fit w-[24rem] space-y-5 px-4 md:left-10 md:w-[46rem]">
          <h1 className="text-2xl font-normal md:text-4xl">
            Shining Beacon of Innovation and Sustainbility
          </h1>
          <p className="w-[35rem] text-lg font-medium">
            Born out of a deep commitment to eco-friendly practices we redifened
            everyday utensils and drinkware
          </p>
          <button className="bg-[#463B34] px-10 py-4 text-white hover:bg-[#6f584a] md:px-16">
            SHOP NOW
          </button>
        </div>
      </section>

      {/* Section 2: Clients */}
      <CarouselClient clients={dummyClients} />

      {/* Section 3: Best Seller */}
      <section className="mx-auto w-full max-w-7xl pt-20">
        <div className="flex flex-col items-center justify-center gap-y-16">
          <div className="flex flex-col items-center justify-center gap-y-10">
            <h2 className="font-serif text-5xl font-medium">
              Our Best Sellers
            </h2>

            <div className="space-x-5">
              {dummyBestSeller.map((category, index) => (
                <button
                  key={index}
                  onClick={() => handleCategorySelect(category)}
                  className="rounded-3xl bg-[#7A543E] px-5 py-2 text-sm text-white hover:bg-[#784426]"
                >
                  {category.categoryName}
                </button>
              ))}
            </div>
          </div>
          <div className="flex gap-[26px]">
            {selectedCategory.product.map((product, index) => (
              <div key={index} className="rounded-lg border p-4 shadow-md">
                <div className="relative h-[250px] w-[250px]">
                  <Image
                    src={product.thumbnail}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-[250px] space-y-4 p-4">
                  <span className="text-[#7A543E]">{product.sold}</span>
                  <h5 className="line-clamp-1 text-lg font-medium">
                    {product.title}
                  </h5>
                  <p>{product.price}</p>
                  <button className="w-full rounded-md bg-[#463B34] py-3 text-[#f4f4f4]">
                    SHOP NOW
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 : Product Categories */}
      <section className="mx-auto w-full max-w-7xl space-y-10 py-20">
        <h2 className="text-center font-serif text-5xl font-medium">
          Product Categories
        </h2>

        <div className="flex flex-wrap items-center justify-center justify-items-center gap-x-20 gap-y-12">
          {dummyBestSeller.map((categories, index) => (
            <div
              key={index}
              className="animate-fadeIn transform space-y-4 transition-transform duration-500 ease-in-out hover:-translate-y-2"
            >
              <div className="relative h-[225px] w-[425px]">
                <Image
                  src={categories.image}
                  fill
                  className="rounded-md object-cover"
                  alt={categories.categoryName}
                />
              </div>
              <h4 className="text-center font-sans text-xl font-medium">
                {categories.categoryName}
              </h4>
            </div>
          ))}
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
              impact on the environment through its eco-friendly products. With
              a strong commitment to environmental awareness, we have chosen to
              focus on offering reusable solutions that reduce waste and promote
              sustainability.
            </p>
            <button className="bg-[#463B34] px-12 py-3 text-white">
              About Us
            </button>
          </div>
        </div>
      </section>

      {/* Section 7 : Icons */}
      <section className="bg-[#E1DAD6] py-20">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-3 justify-items-center gap-10">
            {icons.map((icon, index) => (
              <div
                key={index}
                className="flex w-[180px] flex-col items-center justify-center gap-4"
              >
                <div className="h-32 w-32 rounded-full bg-[#572304]"></div>
                <p className="text-center font-serif text-xl text-[#1E1E1E]">
                  {icon.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8 : Form */}
      <section className="mx-auto w-full max-w-7xl space-y-12">
        <h2 className="text-center font-serif text-5xl font-medium">
          Custom Order Form
        </h2>
        <form className="flex items-center justify-center bg-white">
          <div className="w-[45rem] space-y-8 rounded-lg border border-black p-16">
            <div className="flex flex-col gap-2">
              <label htmlFor="product" className="font-bold">
                Product
              </label>
              <input
                id="product"
                name="product"
                type="text"
                className="rounded-md border border-gray-500 px-4 py-3 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="quantity" className="font-bold">
                Quantity
              </label>
              <input
                id="quantity"
                name="quantity"
                type="text"
                className="rounded-md border-[0.5px] border-gray-500 px-4 py-3 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="printing-method" className="font-bold">
                Printing Method
              </label>
              <Select>
                <SelectTrigger className="rounded-md border-[0.5px] border-gray-500 px-4 py-3 text-start">
                  <SelectValue placeholder="Printing Method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Printing Method</SelectLabel>
                    <SelectItem value="Engrave">Engrave</SelectItem>
                    <SelectItem value="UV-Print">UV Print</SelectItem>
                    <SelectItem value="Silk-Print">Silk Print</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="custom-detail" className="font-bold">
                Custom Detail
              </label>
              <input
                id="custom-detail"
                name="custom-detail"
                type="text"
                className="rounded-md border-[0.5px] border-gray-500 px-4 py-3 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="shipping-address" className="font-bold">
                Shipping Address
              </label>
              <input
                id="shipping-address"
                name="shipping-address"
                type="text"
                className="rounded-md border-[0.5px] border-gray-500 px-4 py-3 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="bg-[#463B34] px-16 py-3 text-white"
            >
              CUSTOMIZE
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
