import { useToast } from "@/components/hooks/use-toast";
import { sendCustomOrder } from "@/utils/nodemailer/sendEmailCustomOrder";
import { useFormik } from "formik";
import { useState } from "react";
import { customOrderValidationSchema } from "../schemas/customOrderValidationSchema";

export function useCustomOrderForm() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const formik = useFormik({
    initialValues: {
      email: "",
      companyName: "",
      departmentName: "",
      up: "",
      product: "",
      quantity: "",
      printingMethod: "",
      customDetail: "",
      shippingAddress: "",
      reference: null as File | null,
    },
    validationSchema: customOrderValidationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setLoading(true);
      const formData = new FormData();

      for (const [key, value] of Object.entries(values)) {
        if (key === "reference" && value instanceof File) {
          formData.append(key, value);
        } else {
          formData.append(key, value as string);
        }
      }

      try {
        await sendCustomOrder(formData, toast);

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

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.currentTarget.files;
    if (files && files.length > 0) {
      formik.setFieldValue("reference", files[0]);
    }
  };

  const handleFileDelete = () => {
    formik.setFieldValue("reference", null);
  };

  return { formik, loading, handleFileChange, handleFileDelete };
}
