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
      companyName: "",
      departmentName: "",
      up: "",
      product: "",
      quantity: "",
      printingMethod: "",
      customDetail: "",
      shippingAddress: "",
      reference: "",
    },
    validationSchema: customOrderValidationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setLoading(true);
      try {
        await sendCustomOrder(values, toast);

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

  return { formik, loading };
}
