import { FooterTypes } from "@/types/footer.types";
import { getEntries } from "@/utils/contenful/get-entries";
import { createWhatsAppLink } from "@/utils/format-contact";
import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // Import the WhatsApp icon

const ButtonWhatsapp = async () => {
  const contactEntries: FooterTypes = await getEntries("footer");

  const whatsappLink = createWhatsAppLink(
    contactEntries.items[0].fields.contactPerson1,
  );

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 z-50 right-6 flex items-center rounded-[10rem] bg-green-500 px-6 py-2 text-white shadow-lg transition-colors duration-300 hover:bg-green-600"
    >
      <FaWhatsapp className="mr-2 h-8 w-8" />
      <span className="font-semibold">Hi, MinGo&#39;s Here</span>
    </a>
  );
};

export default ButtonWhatsapp;
