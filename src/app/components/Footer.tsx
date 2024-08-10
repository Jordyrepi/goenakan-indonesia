import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaShippingFast } from "react-icons/fa";

const Footer = () => {
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
      <div className="mx-auto my-10 w-full max-w-6xl">
        <div className="flex gap-10">
          <div className="w-[30rem] space-y-5 font-medium">
            <div className="relative h-[10rem] w-[10rem]">
              <Image
                src={"/logo footer.png"}
                alt="logo footer"
                fill
                className="object-cover"
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
              <p>
                Darmo Baru Barat I no. 35, Sonokwijenan, Sukomanunggal,
                Surabaya, Jawa Timur, Indonesia - 60189
              </p>
            </div>
            <div className="space-y-3">
              <Link className="flex" href={"/"}>
                <p className="text-blue-600">+6281231659960</p>
                <p> (Marissa)</p>
              </Link>
              <Link className="flex" href={"/"}>
                <p className="text-blue-600">+6281231659960</p>
                <p> (Marissa)</p>
              </Link>
            </div>
          </div>
          <div className="w-[30rem] space-y-5 py-16">
            <h1 className="text-3xl font-medium">INFORMATION</h1>
            <ul className="space-y-4">
              <li>
                <Link href={"/"}>Shop All</Link>
              </li>
              <li>
                <Link href={"/"}>About Us</Link>
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
                <Link href={"/"}>FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="w-[30rem] space-y-6 py-16">
            <h1 className="text-3xl font-medium">SUPPORT</h1>
            <ul className="space-y-4">
              <li>
                <Link href={"/"}>Contact Us</Link>
              </li>
              <li>
                <Link href={"/"}>Search</Link>
              </li>
              <li>
                <Link href={"/"}>Terms of Services</Link>
              </li>
              <li>
                <Link href={"/"}>Refund Policy</Link>
              </li>
              <li>
                <Link href={"/"}>Shipping Policy</Link>
              </li>
              <li>
                <Link href={"/"}>Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
