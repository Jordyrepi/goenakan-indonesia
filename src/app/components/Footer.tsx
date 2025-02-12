import { Categories } from "@/types/categories.types";
import { FooterTypes } from "@/types/footer.types";
import {
  getBestSellerCategoriesEntries,
  getEntries,
} from "@/utils/contenful/get-entries";
import { createWhatsAppLink, formatContact } from "@/utils/format-contact";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaShippingFast } from "react-icons/fa";

const Footer = async () => {
  const footer: FooterTypes = await getEntries("footer");
  const bestSellerCategories: Categories =
    await getBestSellerCategoriesEntries();

  const contact1 = footer.items[0].fields?.contactPerson1
    ? formatContact(footer.items[0].fields.contactPerson1)
    : "";
  const contact2 = footer.items[0].fields?.contactPerson2
    ? formatContact(footer.items[0].fields.contactPerson2)
    : "";
  const contact3 = footer.items[0].fields?.contactPerson3
    ? formatContact(footer.items[0].fields.contactPerson3)
    : "";

  const contact1WhatsAppLink = footer.items[0].fields?.contactPerson1
    ? createWhatsAppLink(footer.items[0].fields.contactPerson1)
    : "";
  const contact2WhatsAppLink = footer.items[0].fields?.contactPerson2
    ? createWhatsAppLink(footer.items[0].fields.contactPerson2)
    : "";
  const contact3WhatsAppLink = footer.items[0].fields?.contactPerson3
    ? createWhatsAppLink(footer.items[0].fields.contactPerson3)
    : "";

  return (
    <footer>
      <div className="h-16 bg-black">
        <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-center gap-x-10 overflow-x-auto text-white">
          <span className="flex items-center gap-5">
            <p className="font-extralight">Small MOQ</p>
          </span>
          <span className="flex items-center gap-5">
            <p className="font-extralight">Personalization</p>
          </span>
          <span className="flex items-center gap-5">
            <p className="font-extralight">Quality and Detail Oriented</p>
          </span>
          <span className="flex items-center gap-5">
            <p className="font-extralight">Competitive Price</p>
          </span>
          <span className="flex items-center gap-5">
            <p className="font-extralight">FREE SAMPLE</p>
          </span>
          <span className="flex items-center gap-5">
            <p className="font-extralight">Free Shipping</p>
          </span>
          <span className="flex items-center gap-5">
            <p className="font-extralight">Fast Response</p>
          </span>
          <span className="flex items-center gap-5">
            <p className="font-extralight">Fast Delivery</p>
          </span>
        </div>
      </div>
      <div className="mx-auto w-full max-w-7xl justify-center px-4 py-10 md:flex">
        <div className="gap-10 md:flex">
          <div className="space-y-5 font-medium md:w-[30rem]">
            <div className="relative flex h-[10rem] w-[17rem] items-start">
              <Image
                src={"/logo/Goenakan Logo Text Brown-01.svg"}
                alt="logo footer"
                fill
              />
            </div>
            <div className="space-y-3">
              <p>{footer.items[0].fields?.location}</p>
            </div>
            <div className="space-y-3">
              {contact1 && (
                <Link href={contact1WhatsAppLink} className="flex">
                  <p>{contact1}</p>
                </Link>
              )}
              {contact2 && (
                <Link href={contact2WhatsAppLink} className="flex">
                  <p>{contact2}</p>
                </Link>
              )}
              {contact3 && (
                <Link href={contact3WhatsAppLink} className="flex">
                  <p>{contact3}</p>
                </Link>
              )}
            </div>
          </div>
          <div className="gap-x-5 md:ml-14 md:flex">
            <div className="space-y-5 py-6 md:w-[20rem]">
              <h1 className="font-gilda text-3xl font-medium">INFORMATION</h1>
              <ul className="space-y-4 font-openSans font-medium">
                <li>
                  <Link href={"/product"}>Show All</Link>
                </li>
                {bestSellerCategories.items.map((category, index) => (
                  <li key={index}>
                    <Link href={`/product?category=${category.sys.id}`}>
                      {category.fields.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href={"/frequently-ask-question"}>FAQ</Link>
                </li>
              </ul>
            </div>
            <div className="space-y-6 py-6 md:w-[20reksm]">
              <h1 className="font-gilda text-3xl font-medium">SUPPORT</h1>
              <ul className="space-y-4 font-openSans font-medium">
                <li>
                  <Link href={"/about-us"}>About Us</Link>
                </li>
                <li>
                  <Link href={"/contact-us"}>Contact Us</Link>
                </li>
                {/* <li>
                  <Link href={"/"}>Terms of Services</Link>
                </li> */}
              </ul>

              <div className="space-y-3">
                <h2 className="font-gilda text-2xl font-medium">Follow Us</h2>
                <div className="flex gap-x-4">
                  {footer.items[0].fields.linkedInLink && (
                    <a
                      href={footer.items[0].fields.linkedInLink}
                      target="_blank"
                    >
                      <div className="relative h-10 w-10">
                        <Image
                          src={"/icons/linkedin.svg"}
                          alt="Linkedin"
                          fill
                        />
                      </div>
                    </a>
                  )}
                  {footer.items[0].fields.facebookLink && (
                    <a
                      href={footer.items[0].fields.facebookLink}
                      target="_blank"
                    >
                      <div className="relative h-10 w-10">
                        <Image
                          src={"/icons/facebook.svg"}
                          alt="Linkedin"
                          fill
                        />
                      </div>
                    </a>
                  )}
                  {footer.items[0].fields.instagramLink && (
                    <a
                      href={footer.items[0].fields.instagramLink}
                      target="_blank"
                    >
                      <div className="relative h-10 w-10">
                        <Image
                          src={"/icons/instagram.svg"}
                          alt="Linkedin"
                          fill
                        />
                      </div>
                    </a>
                  )}
                  {footer.items[0].fields.tikTokLink && (
                    <a href={footer.items[0].fields.tikTokLink} target="_blank">
                      <div className="relative h-10 w-10">
                        <Image src={"/icons/tiktok.svg"} alt="Linkedin" fill />
                      </div>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
