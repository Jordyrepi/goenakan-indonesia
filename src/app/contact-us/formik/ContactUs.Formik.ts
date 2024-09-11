import { Formik, useFormik } from "formik";
import { useState } from "react";
import { sendEmailContact } from "@/utils/nodemailer/SendEmailContactUs";
import { contactUsValidationSchema } from "../schemas/ContactUsValidationSchema";
import { useToast } from "@/components/hooks/use-toast";

export function useContactForm() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const formik = useFormik({
    initialValues: {
      name: "",
      subject: "",
      email: "",
      phoneNumber: "",
      companyName: "",
      message: "",
    },
    validationSchema: contactUsValidationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setLoading(true);
      try {
        await sendEmailContact(values, toast);

        resetForm();
      } catch (error) {
        toast({
          title: "Error",
          description: "Something went wrong, please try again later.",
          variant: "destructive",
        });
      } finally {
        setSubmitting(false);
        setLoading(false);
      }
    },
  });

  console.log("check formik : ",formik);
  

  return { formik, loading };
}
