"use client";

import { ProductDetails } from "@/types/product.types";
import React, { useState } from "react";

interface GalleryImagesProductProps {
  product: ProductDetails;
}

const ProducDetails: React.FC<GalleryImagesProductProps> = ({ product }) => {
  const {
    title,
    price,
    images,
    description,
    capacity,
    productsThatHaveBeenSold,
  } = product.items[0].fields;

  const [quantity, setQuantity] = useState<number>(1);
  const [customPersonalization, setCustomPersonalization] =
    useState<string>("");

  const whatsappMessage = `Hi, I'm interested in purchasing the following product:\n\nProduct: ${title}\nQuantity: ${quantity}\nCustom Personalization: ${customPersonalization}\n\nCan you please provide more details? Thanks!`;

  return (
    <section>
      <h1 className="text-3xl font-bold font-gilda">{title}</h1>
      <p className="mt-2 text-gray-700 font-openSans">{description}</p>
      <div className="mt-4 flex items-center">
        <span className="rounded bg-gray-200 px-3 py-3 text-sm font-medium font-openSans text-[#7A543E]">
          {`${productsThatHaveBeenSold} product sold`}
        </span>
      </div>
      <p className="mt-4 text-2xl font-bold font-openSans">${price} USD</p>
      {capacity && <p className="mt-2 font-bold font-openSans">Capacity: {capacity}L</p>}
      <div className="mt-4">
        <p className="font-medium text-gray-700 font-openSans">Custom Personalization:</p>
        <div className="mt-2 flex space-x-4">
          <button
            onClick={() => setCustomPersonalization("Yes")}
            className="rounded-md border bg-[#463B34] px-8 font-openSans py-2 text-sm text-white"
          >
            Yes
          </button>
          <button
            onClick={() => setCustomPersonalization("No")}
            className="rounded-md border border-[#463B34] font-openSans px-8 py-2 text-sm text-gray-700 hover:bg-gray-200"
          >
            No
          </button>
        </div>
      </div>

      <div className="mt-4">
        <p className="font-medium font-openSans text-gray-700">Quantity:</p>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="mt-2 w-[150px] font-openSans rounded-md border border-slate-300 px-4 py-2 text-center text-gray-700 focus:outline-none"
        />
      </div>

      <button className="mt-6 w-[20rem] font-openSans rounded-md bg-[#463B34] py-3 font-semibold text-white transition">
        <a
          target="_blank"
          href={`https://wa.me/6282251110493?text=${encodeURIComponent(whatsappMessage)}`}
        >
          Shop now
        </a>
      </button>
    </section>
  );
};

export default ProducDetails;
