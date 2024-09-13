"use client";
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
import { useCustomOrderForm } from "../formik/customOrder.formik";

const CustomOrderSection = () => {
  const { formik, loading } = useCustomOrderForm();

  return (
    <section className="mx-auto w-full max-w-7xl space-y-12 px-4">
      <h2 className="text-center font-serif text-3xl font-medium md:text-5xl">
        Custom Order Form
      </h2>
      <form
        onSubmit={formik.handleSubmit}
        className="flex items-center justify-center"
      >
        <div className="space-y-8 rounded-lg border border-black p-8 md:w-[45rem] md:p-16">
          <div className="flex flex-col gap-2">
            <label htmlFor="companyName" className="font-bold">
              Company Name
            </label>
            <input
              id="companyName"
              name="companyName"
              type="text"
              className="rounded-md border border-gray-500 px-4 py-3 focus:outline-none"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.companyName}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="departmentName" className="font-bold">
              Department Name
            </label>
            <input
              id="departmentName"
              name="departmentName"
              type="text"
              className="rounded-md border-[0.5px] border-gray-500 px-4 py-3 focus:outline-none"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.departmentName}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="up" className="font-bold">
              UP
            </label>
            <Select
              onValueChange={(value) => formik.setFieldValue("up", value)}
              value={formik.values.up}
            >
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.product}
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.quantity}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="printingMethod" className="font-bold">
              Printing Method
            </label>
            <Select
              onValueChange={(value) =>
                formik.setFieldValue("printingMethod", value)
              }
              value={formik.values.printingMethod}
            >
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
            <label htmlFor="customDetail" className="font-bold">
              Custom Detail
            </label>
            <input
              id="customDetail"
              name="customDetail"
              type="text"
              className="rounded-md border-[0.5px] border-gray-500 px-4 py-3 focus:outline-none"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.customDetail}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="shippingAddress" className="font-bold">
              Shipping Address
            </label>
            <input
              id="shippingAddress"
              name="shippingAddress"
              type="text"
              className="rounded-md border-[0.5px] border-gray-500 px-4 py-3 focus:outline-none"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.shippingAddress}
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.reference}
            />
          </div>
          <button
            type="submit"
            className="rounded-md bg-[#463B34] px-16 py-3 text-white hover:bg-[#352d29]"
            disabled={loading}
          >
            {loading ? "Sending..." : "Request For Quotation"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CustomOrderSection;
