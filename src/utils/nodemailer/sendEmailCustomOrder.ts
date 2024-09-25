// import axios from "axios";

// export interface CustomOrderData {
//   email: string;
//   companyName: string;
//   departmentName: string;
//   up: string;
//   product: string;
//   quantity: string;
//   printingMethod: string;
//   customDetail: string;
//   shippingAddress: string;
//   reference?: File | null; // Handle file type
// }

// export async function sendCustomOrder(
//   orderData: CustomOrderData,
//   toast: Function,
// ) {
//   const apiEndpoint = "/api/custom-order";
//   try {
//     const response = await fetch(apiEndpoint, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(orderData),
//     });

//     const result = await response.json();

//     if (!response.ok) {
//       throw new Error(result.message || "Something went wrong");
//     }

//     toast({
//       title: "Success",
//       description:
//         "Thank you for your interest in our company! We will be in touch shortly.",
//       variant: "default",
//     });
//   } catch (error) {
//     if (error instanceof Error) {
//       toast({
//         title: "Error",
//         description: `${error.message}`,
//         variant: "destructive",
//       });
//     } else {
//       toast({
//         title: "Error",
//         description: "Something went wrong, please try again later.",
//         variant: "destructive",
//       });
//     }
//   }
// }

import axios from "axios";

export interface CustomOrderData {
  email: string;
  companyName: string;
  departmentName: string;
  up: string;
  product: string;
  quantity: string;
  printingMethod: string;
  customDetail: string;
  shippingAddress: string;
  reference?: File | null; // Handle file type
}

export async function sendCustomOrder(
  orderData: FormData, // Now expect FormData instead of a plain object
  toast: Function,
) {
  const apiEndpoint = "/api/custom-order";
  try {
    const response = await fetch(apiEndpoint, {
      method: "POST",
      body: orderData, // FormData is passed directly
    });

    const result = await response.json();

    console.log("check result ",result);
    

    if (!response.ok) {
      throw new Error(result.message || "Something went wrong");
    }

    toast({
      title: "Success",
      description:
        "Thank you for your interest in our company! We will be in touch shortly.",
      variant: "default",
    });
  } catch (error) {
    if (error instanceof Error) {
      toast({
        title: "Error",
        description: `${error.message}`,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Error",
        description: "Something went wrong, please try again later.",
        variant: "destructive",
      });
    }
  }
}
