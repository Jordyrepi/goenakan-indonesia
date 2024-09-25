import * as Yup from "yup";

export const customOrderValidationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid Email address")
    .required("Email is Required")
    .test(
      "no-spaces",
      "Email cannot be empty",
      (value) => value?.trim() !== "",
    ),
  companyName: Yup.string().required("Company Name is required"),
  departmentName: Yup.string().required("Department Name is required"),
  up: Yup.string().required("UP is required"),
  product: Yup.string().required("Product is required"),
  quantity: Yup.number().required("Quantity is required"),
  printingMethod: Yup.string().required("Printing Method is required"),
  customDetail: Yup.string().required("Custom Detail is required"),
  shippingAddress: Yup.string().required("Shipping Address is required"),
  reference: Yup.mixed()
    .test(
      "fileSize",
      "File size is too large",
      (value) => !value || (value && (value as File).size <= 2000000), // 2MB limit
    )
    .test(
      "fileType",
      "Unsupported file format",
      (value) =>
        !value ||
        (value &&
          ["application/pdf", "image/jpeg", "image/png"].includes(
            (value as File).type,
          )),
    ),
});
