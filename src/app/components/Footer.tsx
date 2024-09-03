import { FooterTypes } from "@/types/footer.types";
import { getEntries } from "@/utils/contenful/get-entries";
import { createWhatsAppLink, formatContact } from "@/utils/format-contact";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaShippingFast } from "react-icons/fa";

const Footer = async () => {
  const footer: FooterTypes = await getEntries("footer");

  const contact1 = footer.items[0].fields?.contactPerson1
    ? formatContact(
        footer.items[0].fields.contactPerson1,
        footer.items[0].fields.contactPersonName1,
      )
    : "";
  const contact2 = footer.items[0].fields?.contactPerson2
    ? formatContact(
        footer.items[0].fields.contactPerson2,
        footer.items[0].fields.contactPersonName2,
      )
    : "";
  const contact3 = footer.items[0].fields?.contactPerson3
    ? formatContact(
        footer.items[0].fields.contactPerson3,
        footer.items[0].fields.contactPersonName3,
      )
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
        <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-center gap-x-5 text-white">
          <span className="flex items-center gap-5">
            <FaShippingFast className="text-4xl" />
            <p className="font-extralight">FAST DELIVERY</p>
          </span>
          <span className="flex items-center gap-5">
            <FaShippingFast className="text-4xl" />
            <p className="font-extralight">FREE DELIVERY</p>
          </span>
          <span className="flex items-center gap-5">
            <FaShippingFast className="text-4xl" />
            <p className="font-extralight">FREE SAMPLE</p>
          </span>
          <span className="flex items-center gap-5">
            <FaShippingFast className="text-4xl" />
            <p className="font-extralight">FREE SAMPLE</p>
          </span>
          <span className="flex items-center gap-5">
            <FaShippingFast className="text-4xl" />
            <p className="font-extralight">FREE SAMPLE</p>
          </span>
          <span className="flex items-center gap-5">
            <FaShippingFast className="text-4xl" />
            <p className="font-extralight">FREE SAMPLE</p>
          </span>
        </div>
      </div>
      <div className="mx-auto my-10 w-full max-w-7xl">
        <div className="flex gap-10">
          <div className="w-[30rem] space-y-5 font-medium">
            <div className="relative h-[6rem]">
              <Image
                src={"/logo/Goenakan Logo Text Brown-01.svg"}
                alt="logo footer"
                fill
              />
            </div>
            <p>
              Goenakan Indonesia is a brand dedicated to making a positive
              impact on the environment through its eco-friendly products. With
              a strong commitment to environmental awareness, we have chosen to
              focus on offering reusable solutions that reduce waste and promote
              sustainability.
            </p>
            <div className="space-y-3">
              <p>Goenakan Indonesia</p>
              <p>{footer.items[0].fields?.location}</p>
            </div>
            <div className="space-y-3">
              {contact1 && (
                <Link href={contact1WhatsAppLink} className="flex">
                  <p>{contact1}</p>
                </Link>
              )}
              {contact2 && (
                <Link href={contact1WhatsAppLink} className="flex">
                  <p>{contact2}</p>
                </Link>
              )}
              {contact3 && (
                <Link href={contact1WhatsAppLink} className="flex">
                  <p>{contact3}</p>
                </Link>
              )}
            </div>
          </div>
          <div className="w-[30rem] space-y-5 py-16">
            <h1 className="text-3xl font-medium">INFORMATION</h1>
            <ul className="space-y-4">
              <li>
                <Link href={"/"}>Show All</Link>
              </li>
              <li>
                <Link href={"/"}>Stainless Steel Products</Link>
              </li>
              <li>
                <Link href={"/"}>Wooden Products</Link>
              </li>
              <li>
                <Link href={"/"}>Glass Products</Link>
              </li>
              <li>
                <Link href={"/"}>Mix Products</Link>
              </li>
              <li>
                <Link href={"/frequently-ask-question"}>FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="w-[30rem] space-y-6 py-16">
            <h1 className="text-3xl font-medium">SUPPORT</h1>
            <ul className="space-y-4">
              <li>
                <Link href={"/about-us"}>About Us</Link>
              </li>
              <li>
                <Link href={"/"}>Contact Us</Link>
              </li>
              <li>
                <Link href={"/"}>Terms of Services</Link>
              </li>
            </ul>

            <div className="flex gap-x-5">
              {footer.items[0].fields.linkedInLink && (
                <a href={footer.items[0].fields.linkedInLink} target="_blank">
                  <div className="relative h-10 w-10">
                    <Image src={"/icons/linkedin.svg"} alt="Linkedin" fill />
                  </div>
                </a>
              )}
              {footer.items[0].fields.facebookLink && (
                <a href={footer.items[0].fields.facebookLink} target="_blank">
                  <div className="relative h-10 w-10">
                    <Image src={"/icons/facebook.svg"} alt="Linkedin" fill />
                  </div>
                </a>
              )}
              {footer.items[0].fields.instagramLink && (
                <a href={footer.items[0].fields.instagramLink} target="_blank">
                  <div className="relative h-10 w-10">
                    <Image src={"/icons/instagram.svg"} alt="Linkedin" fill />
                  </div>
                </a>
              )}
              {footer.items[0].fields.tiktokLink && (
                <a href={footer.items[0].fields.tiktokLink} target="_blank">
                  <div className="relative h-10 w-10">
                    <Image src={"/icons/tiktok.svg"} alt="Linkedin" fill />
                  </div>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
