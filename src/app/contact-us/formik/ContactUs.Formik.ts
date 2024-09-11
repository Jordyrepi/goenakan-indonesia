import { useFormik } from "formik";
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
      country: "",
      email: "",
      phoneNumber: "",
      companyName: "",
      website: "",
      message: "",
    },
    validationSchema: contactUsValidationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setLoading(true);
      try {
        const sendEmail = await sendEmailContact(values, toast);
        console.log("check send email ", sendEmail);

        
        resetForm();
      } catch (error) {
        console.log("check error ", error);
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

  return { formik, loading };
}
