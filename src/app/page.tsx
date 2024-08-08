"use client";
import { Client } from "@/types/client.types";
import CarouselClient from "./components/CarouselClient";
import { useState } from "react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
} from "@/components/ui/Select";
import { SelectTrigger, SelectValue } from "@radix-ui/react-select";

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
          thumbnail: "/product/Stainless-Steel-Bottle .png",
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
          thumbnail: "/product/Stainless-Steel-Bottle-1 .png ",
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
          thumbnail: "/product/Stainless-Steel-Bottle-1 .png",
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
    <main className="bg-[#f4f4f4] space-y-20">
      {/* Section 1: Hero */}
      <section className="bg-[#E1DAD6] h-screen flex">
        <div className="relative w-[50rem] left-10 top-[170px] h-fit space-y-10 ">
          <h1 className="text-5xl">
            Shining Beacon of Innovation and Sustainbility
          </h1>
          <p className="font-medium text-xl">
            Born out of a deep commitment to eco-friendly practices we redifened
            everyday utensils and drinkware
          </p>
          <button className="bg-[#463B34] hover:bg-[#6f584a] px-20 py-4 text text-white">
            SHOP NOW
          </button>
        </div>
      </section>

      {/* Section 2: Clients */}
      <CarouselClient clients={dummyClients} />

      {/* Section 3: Best Seller */}
      <section className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col gap-y-16 justify-center items-center">
          <div className="flex justify-center flex-col items-center gap-y-10">
            <h2 className="text-6xl font-serif font-medium">
              Our Best Sellers
            </h2>

            <div className="space-x-5">
              {dummyBestSeller.map((category, index) => (
                <button
                  onClick={() => handleCategorySelect(category)}
                  className="bg-[#7A543E] hover:bg-[#784426] px-5 py-2 text-[#f4f4f4] rounded-3xl"
                >
                  {category.categoryName}
                </button>
              ))}
            </div>
          </div>
          <div className="flex gap-[26px]">
            {selectedCategory.product.map((product, index) => (
              <div className="">
                <div className="relative w-[300px] h-[350px]">
                  <Image
                    src={product.thumbnail}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 space-y-4">
                  <span className="text-[#7A543E]">{product.sold}</span>
                  <h5 className="text-lg font-medium">{product.title}</h5>
                  <p>{product.price}</p>
                  <button className="bg-[#463B34] w-full py-3 rounded-md text-[#f4f4f4]">
                    SHOP NOW
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 : Product Categories */}
      <section className="max-w-7xl mx-auto w-full space-y-4">
        <h2 className="text-6xl font-serif font-medium text-center">
          Product Categories
        </h2>

        <div className="grid grid-cols-2 justify-items-center gap-10">
          {dummyBestSeller.map((categories, index) => (
            <div className="space-y-4 animate-fadeIn transform  transition-transform  duration-500 ease-in-out hover:-translate-y-2">
              <div className="relative w-[450px] h-[250px]">
                <Image
                  src={categories.image}
                  fill
                  className="object-cover"
                  alt={categories.categoryName}
                />
              </div>
              <h4 className="font-medium text-xl font-sans text-center">
                {categories.categoryName}
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5 : Goenakan banner */}
      <section className="relative w-full h-[650px]">
        <Image
          fill
          className="absolute z-0 object-cover"
          src={"/Goenakan ID Banner 1.png"}
          alt="Goenakan ID Banner"
        />
        <div className="absolute top-0 right-0 z-10 space-y-5 p-10  flex flex-col items-end ">
          <h2 className="text-5xl font-serif">
            Best Utensils from Best Materials
          </h2>
          <button className="px-20 py-3 bg-[#463B34] rounded-sm text-[#f4f4f4]">
            SHOP NOW
          </button>
        </div>
      </section>

      {/* Section 6 : Our Story */}
      <section className="max-w-7xl mx-auto w-full space-y-12">
        <h2 className="text-6xl font-serif font-medium text-center">
          Our Story
        </h2>
        <div className="flex justify-center items-center gap-20">
          <div className="relative w-[350px] h-[400px]">
            <Image
              fill
              className="object-cover rounded-xl"
              src={"/Story-Section-1.png"}
              alt="Story-Section"
            />
          </div>
          <div className="md:w-[350px] space-y-8">
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
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-3 justify-items-center gap-10">
            {icons.map((icon, index) => (
              <div
                key={index}
                className="flex w-[180px] justify-center items-center flex-col gap-4"
              >
                <div className="bg-[#572304] h-32 w-32  rounded-full"></div>
                <p className="text-xl text-center text-[#1E1E1E] font-serif">
                  {icon.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8 : Form */}
      <section className="max-w-7xl mx-auto w-full space-y-12">
        <h2 className="text-6xl font-serif font-medium text-center">
          Custom Personalization
        </h2>
        <form className="flex justify-center items-center bg-white">
          <div className="border border-black w-[55rem] rounded-lg p-16  space-y-8 ">
            <div className="flex flex-col gap-2">
              <label htmlFor="product" className="font-bold">
                Product
              </label>
              <input
                id="product"
                name="product"
                type="text"
                className="focus:outline-none border border-gray-500 px-4 py-3 rounded-md"
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
                className="focus:outline-none border-[0.5px] border-gray-500 px-4 py-3 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="printing-method" className="font-bold">
                Printing Method
              </label>
              <Select>
                <SelectTrigger className="text-start border-[0.5px] border-gray-500 px-4 py-3 rounded-md">
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
                className="focus:outline-none border-[0.5px] border-gray-500 px-4 py-3 rounded-md"
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
                className="focus:outline-none border-[0.5px] border-gray-500 px-4 py-3 rounded-md"
              />
            </div>
            <button
              type="submit"
              className="bg-[#463B34] text-white px-16 py-3"
            >
              CUSTOMIZE
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
