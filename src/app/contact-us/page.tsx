import React from "react";
import ContactForm from "./components/ContactForm";

const page = () => {
  return (
    <main className="mx-auto w-full max-w-7xl">
    {/* Contact us */}
    <section className="grid grid-cols-1 justify-items-center p-2 px-4 md:h-[667px] md:w-[1198px] md:grid-cols-2">
      <div className="w-full space-y-10 rounded-md p-10 text-black md:h-[647px] md:w-[491px]">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">Contact Us</h2>
          <h3 className="text-xl font-semibold">
            Have questions or inquiries?
          </h3>
          <p>
            Please fill out the form or send email to get in touch with our
            team. Give us a few details and we'll help you to find the best
            solution.
          </p>
        </div>
        <div className=" ">
          <span className="font-bold">
            Have a simple question? Please check our{" "}
            <a href="/frequently-ask-question" className="text-sky-700">
              FAQ
            </a>
          </span>
        </div>
      </div>
      <div className="h-full w-full space-y-10 pt-6 md:space-y-8 md:pl-6">
        <ContactForm />
      </div>
    </section>
  </main>
  );
};

export default page;
