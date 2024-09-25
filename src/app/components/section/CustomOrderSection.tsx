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
import { useCustomOrderForm } from "../formik/customOrder.formik";

const CustomOrderSection = () => {
  const { formik, loading, handleFileChange, handleFileDelete } = useCustomOrderForm();

  return (
    <section className="mx-auto w-full max-w-7xl space-y-12 px-4">
      <h2 className="text-center font-gilda text-3xl font-medium md:text-5xl">
        Custom Order Form
      </h2>
      <form
        onSubmit={formik.handleSubmit}
        className="flex items-center justify-center"
        encType="multipart/form-data"
      >
        <div className="space-y-8 rounded-lg border border-black p-8 md:w-[45rem] md:p-16">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-openSans font-bold">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="rounded-md border border-gray-500 px-4 py-3 font-openSans focus:outline-none"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500">{formik.errors.email}</div>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="companyName" className="font-openSans font-bold">
              Company Name
            </label>
            <input
              id="companyName"
              name="companyName"
              type="text"
              className="rounded-md border border-gray-500 px-4 py-3 font-openSans focus:outline-none"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.companyName}
            />
            {formik.touched.companyName && formik.errors.companyName && (
              <div className="text-red-500">{formik.errors.companyName}</div>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="departmentName" className="font-openSans font-bold">
              Department Name
            </label>
            <input
              id="departmentName"
              name="departmentName"
              type="text"
              className="rounded-md border-[0.5px] border-gray-500 px-4 py-3 font-openSans focus:outline-none"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.departmentName}
            />
            {formik.touched.departmentName && formik.errors.departmentName && (
              <div className="text-red-500">{formik.errors.departmentName}</div>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="up" className="font-openSans font-bold">
              UP
            </label>
            <Select
              onValueChange={(value) => formik.setFieldValue("up", value)}
              value={formik.values.up}
            >
              <SelectTrigger className="rounded-md border-[0.5px] border-gray-500 px-4 py-3 text-start font-openSans">
                <SelectValue placeholder="UP" className="font-openSans" />
              </SelectTrigger>
              <SelectContent className="font-openSans">
                <SelectGroup>
                  <SelectLabel>UP</SelectLabel>
                  <SelectItem value="Mr">Mr</SelectItem>
                  <SelectItem value="Mrs">Mrs</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {formik.touched.up && formik.errors.up && (
              <div className="text-red-500">{formik.errors.up}</div>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="product" className="font-openSans font-bold">
              Products
            </label>
            <input
              id="product"
              name="product"
              type="text"
              className="rounded-md border-[0.5px] border-gray-500 px-4 py-3 font-openSans focus:outline-none"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.product}
            />
            {formik.touched.product && formik.errors.product && (
              <div className="text-red-500">{formik.errors.product}</div>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="quantity" className="font-openSans font-bold">
              Quantity
            </label>
            <input
              id="quantity"
              name="quantity"
              type="text"
              className="rounded-md border-[0.5px] border-gray-500 px-4 py-3 font-openSans focus:outline-none"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.quantity}
            />
            {formik.touched.quantity && formik.errors.quantity && (
              <div className="text-red-500">{formik.errors.quantity}</div>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="printingMethod" className="font-openSans font-bold">
              Printing Method
            </label>
            <Select
              onValueChange={(value) =>
                formik.setFieldValue("printingMethod", value)
              }
              value={formik.values.printingMethod}
            >
              <SelectTrigger className="rounded-md border-[0.5px] border-gray-500 px-4 py-3 text-start font-openSans">
                <SelectValue placeholder="Printing Method" />
              </SelectTrigger>
              <SelectContent className="font-openSans">
                <SelectGroup>
                  <SelectLabel>Printing Method</SelectLabel>
                  <SelectItem value="Engrave">Engrave</SelectItem>
                  <SelectItem value="UV-Print">UV Print</SelectItem>
                  <SelectItem value="Silk-Print">Silk Print</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {formik.touched.printingMethod && formik.errors.printingMethod && (
              <div className="text-red-500">{formik.errors.printingMethod}</div>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="customDetail" className="font-openSans font-bold">
              Custom Detail
            </label>
            <input
              id="customDetail"
              name="customDetail"
              type="text"
              className="rounded-md border-[0.5px] border-gray-500 px-4 py-3 font-openSans focus:outline-none"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.customDetail}
            />
            {formik.touched.customDetail && formik.errors.customDetail && (
              <div className="text-red-500">{formik.errors.customDetail}</div>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="shippingAddress"
              className="font-openSans font-bold"
            >
              Shipping Address
            </label>
            <input
              id="shippingAddress"
              name="shippingAddress"
              type="text"
              className="rounded-md border-[0.5px] border-gray-500 px-4 py-3 font-openSans focus:outline-none"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.shippingAddress}
            />
            {formik.touched.shippingAddress &&
              formik.errors.shippingAddress && (
                <div className="text-red-500">
                  {formik.errors.shippingAddress}
                </div>
              )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="reference" className="font-openSans font-bold">
              Attach Your Reference (if any)
            </label>
            <input
              id="reference"
              name="reference"
              type="file"
              className="rounded-md border-[0.5px] border-gray-500 px-4 py-3 font-openSans focus:outline-none"
              onChange={(event) => {
                const files = event.currentTarget.files;
                if (files && files.length > 0) {
                  formik.setFieldValue("reference", files[0]);
                }
              }}
              onBlur={formik.handleBlur}
            />
            <div className="flex flex-col gap-2">
            <label htmlFor="reference" className="font-openSans font-bold">
              Attach Your Reference (if any)
            </label>
            {formik.values.reference ? (
              <div className="flex items-center gap-2">
                <span className="font-openSans">{formik.values.reference.name}</span>
                <button
                  type="button"
                  onClick={handleFileDelete}
                  className="rounded-md bg-red-500 px-2 py-1 font-openSans text-white hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            ) : (
              <input
                id="reference"
                name="reference"
                type="file"
                className="rounded-md border-[0.5px] border-gray-500 px-4 py-3 font-openSans focus:outline-none"
                onChange={handleFileChange}
                onBlur={formik.handleBlur}
              />
            )}
          </div>
          </div>
          <button
            type="submit"
            className="rounded-md bg-[#463B34] px-16 py-3 font-openSans text-white hover:bg-[#352d29]"
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
