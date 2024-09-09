import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import React from "react";

const CustomOrderSection = () => {
  return (
    <section className="mx-auto w-full max-w-7xl space-y-12">
      <h2 className="text-center font-serif text-5xl font-medium">
        Custom Order Form
      </h2>
      <form className="flex items-center justify-center">
        <div className="w-[45rem] space-y-8 rounded-lg border border-black p-16">
          <div className="flex flex-col gap-2">
            <label htmlFor="company-name" className="font-bold">
              Company Name
            </label>
            <input
              id="company-name"
              name="company-name"
              type="text"
              className="rounded-md border border-gray-500 px-4 py-3 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="department-name" className="font-bold">
              Department Name
            </label>
            <input
              id="department-name"
              name="department-name"
              type="text"
              className="rounded-md border-[0.5px] border-gray-500 px-4 py-3 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="up" className="font-bold">
              UP
            </label>
            <Select>
              <SelectTrigger className="rounded-md border-[0.5px] border-gray-500 px-4 py-3 text-start">
                <SelectValue placeholder="UP" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>UP</SelectLabel>
                  <SelectItem value="Mr">Mr</SelectItem>
                  <SelectItem value="Mrs">Mrs</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="product" className="font-bold">
              Products
            </label>
            <input
              id="product"
              name="product"
              type="text"
              className="rounded-md border-[0.5px] border-gray-500 px-4 py-3 focus:outline-none"
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
          <div className="flex flex-col gap-2">
            <label htmlFor="reference" className="font-bold">
              Attach Your Reference (if any)
            </label>
            <input
              id="reference"
              name="reference"
              type="text"
              className="rounded-md border-[0.5px] border-gray-500 px-4 py-3 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="rounded-md bg-[#463B34] px-16 py-3 hover:bg-[#352d29] text-white"
          >
            Request For Quotation
          </button>
        </div>
      </form>
    </section>
  );
};

export default CustomOrderSection;
