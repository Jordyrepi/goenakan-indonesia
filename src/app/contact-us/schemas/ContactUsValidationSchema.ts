import * as Yup from "yup";

export const contactUsValidationSchema = Yup.object({
  name: Yup.string()
    .trim()
    .required("Name is required")
    .test("no-spaces", "Name cannot be empty", (value) => value?.trim() !== ""),
  subject: Yup.string()
    .trim()
    .required("Subject is required")
    .test(
      "no-spaces",
      "Subject cannot be empty",
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
  message: Yup.string()
    .trim()
    .required("Message is required")
    .test(
      "no-spaces",
      "Message cannot be empty",
      (value) => value?.trim() !== "",
    ),
});