import * as Yup from "yup";

export const contactUsValidationSchema = Yup.object({
  name: Yup.string()
    .trim()
    .required("Name is required")
    .test("no-spaces", "Name cannot be empty", (value) => value?.trim() !== ""),
  country: Yup.string()
    .trim()
    .required("Country is required")
    .test(
      "no-spaces",
      "Country cannot be empty",
      (value) => value?.trim() !== "",
    ),
  email: Yup.string()
    .email("Invalid Email address")
    .required("Email is Required")
    .test(
      "no-spaces",
      "Email cannot be empty",
      (value) => value?.trim() !== "",
    ),
  phoneNumber: Yup.number()
    .required("Phone number is required")
    .min(3, "Phone number must be at least 3 digits")
    .required("Fill with the correct number"),
  companyName: Yup.string()
    .trim()
    .required("Company name is required")
    .test(
      "no-spaces",
      "Company name cannot be empty",
      (value) => value?.trim() !== "",
    ),
  website: Yup.string().required("Website is required").optional(),
  message: Yup.string()
    .trim()
    .required("Message is required")
    .test(
      "no-spaces",
      "Message cannot be empty",
      (value) => value?.trim() !== "",
    ),
});