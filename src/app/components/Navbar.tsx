"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/Sheet";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleMenu = () => {
    setIsAnimating(true);
    setIsMenuOpen(!isMenuOpen);
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  return (
    <header
      className={`duration-400 sticky top-0 z-50 transition ease-in-out ${
        scrollPosition > 0
          ? "bg-white bg-opacity-50 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="h-5 bg-[#7A543E] lg:h-5"></div>
      <nav className="mx-auto w-full max-w-7xl px-4 md:py-3">
        <div className="hidden items-center justify-between md:flex">
          <Link href={"/"} className="relative h-[70px] w-[190px]">
            <Image
              fill
              className=""
              src={"/logo/Goenakan Logo Text Brown-01.svg"}
              alt="logo navbar"
            />
          </Link>
          <div className="space-x-10 text-lg font-gilda font-medium">
            <Link href={"/product"}>Products</Link>
            <Link href={"/about-us"}>About us</Link>
            <Link href={"/contact-us"}>Contact us</Link>
            <Link href={"/article"}>Article</Link>
          </div>
        </div>
        <div className="flex w-full items-center justify-between py-4 md:hidden">
          <div className="relative h-[50px] w-[180px] md:h-[70px] md:w-[190px]">
            <Image
              fill
              className="object-cover"
              src={"/logo/Goenakan Logo Text Brown-01.svg"}
              alt="logo navbar"
            />
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <button onClick={toggleMenu}>
                {isMenuOpen ? (
                  <FaTimes className="h-5 w-5 text-black" />
                ) : (
                  <FaBars className="h-5 w-5 text-black" />
                )}
              </button>
            </SheetTrigger>
            <SheetContent>
              <ul className="list-none space-y-2 font-gilda">
                <li>
                  {" "}
                  <Link href={"/product"}>Products</Link>
                </li>
                <li>
                  {" "}
                  <Link href={"/about-us"}>About us</Link>
                </li>
                <li>
                  {" "}
                  <Link href={"/contact-us"}>Contact us</Link>
                </li>
                <li>
                  {" "}
                  <Link href={"/"}>Article</Link>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
