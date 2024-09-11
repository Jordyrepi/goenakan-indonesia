export interface ContactFormData {
  name: string;
  subject: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  message: string;
}

export async function sendEmailContact(data: ContactFormData, toast: Function) {
  const apiEndpoint = "/api/contact-us";

  try {
    const response = await fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log("check response ", response);

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Something went wrong");
    }

    toast({
      title: "Success",
      description:
        "Thank you for your interest in our company! We will be in touch shortly.",
      variant: "default",
    });
  } catch (err) {
    if (err instanceof Error) {
      toast({
        title: "Error",
        description: `${err.message}`,
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
