"use client";

import { useContactForm } from "../formik/ContactUs.Formik";

const ContactForm = () => {
  const { formik, loading } = useContactForm();

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-y-4 rounded-md bg-[#2C3E50] p-6 text-white md:w-[33rem] md:gap-y-5 md:p-11"
    >
      <div className="flex flex-col gap-y-1">
        <label htmlFor="name" className="text-sm">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="h-9 rounded-md px-2 text-black"
          {...formik.getFieldProps("name")}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="text-red-500">{formik.errors.name}</div>
        ) : null}
      </div>

      <div className="flex flex-col gap-y-1">
        <label htmlFor="subject" className="text-sm">
          Subject
        </label>
        <input
          type="text"
          id="subject"

          className="h-9 rounded-md px-2 text-black"
          {...formik.getFieldProps("subject")}
        />
        {formik.touched.subject && formik.errors.subject ? (
          <div className="text-red-500">{formik.errors.subject}</div>
        ) : null}
      </div>

      <div className="flex flex-col gap-y-1">
        <label htmlFor="companyName" className="text-sm">
          Company Name
        </label>
        <input
          type="text"
          id="companyName"
          className="h-9 rounded-md px-2 text-black"
          {...formik.getFieldProps("companyName")}
        />
        {formik.touched.companyName && formik.errors.companyName ? (
          <div className="text-red-500">{formik.errors.companyName}</div>
        ) : null}
      </div>

      <div className="flex flex-wrap gap-6">
        <div className="flex w-full flex-col gap-y-1 md:w-[208px]">
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            type="text"
            id="email"
            className="h-9 rounded-md px-2 text-black"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="flex w-full flex-col gap-y-1 md:w-[208px]">
          <label htmlFor="phoneNumber" className="text-sm">
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            className="h-9 rounded-md px-2 text-black"
            {...formik.getFieldProps("phoneNumber")}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
            <div className="text-red-500">{formik.errors.phoneNumber}</div>
          ) : null}
        </div>
      </div>

      <div className="flex flex-col gap-y-1">
        <label htmlFor="message" className="text-sm">
          Message
        </label>
        <textarea
          id="message"
          className="h-24 rounded-md px-2 py-1 text-black"
          {...formik.getFieldProps("message")}
        />
        {formik.touched.message && formik.errors.message ? (
          <div className="text-red-500">{formik.errors.message}</div>
        ) : null}
      </div>

      <button
        type="submit"
        className="flex w-fit justify-start rounded-md bg-[#ce8c23] px-10 py-3 font-medium hover:bg-[#9F6544]"
        disabled={formik.isSubmitting || loading}
      >
        {formik.isSubmitting || loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default ContactForm;
