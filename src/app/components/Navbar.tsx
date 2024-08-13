"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/Sheet";
import Image from "next/image";
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
      <div className="h-5 bg-[#7A543E] lg:h-7"></div>
      <nav className="mx-auto w-full max-w-7xl">
        <div className="hidden items-center justify-between md:flex">
          <div className="relative h-[70px] w-[190px]">
            <Image
              fill
              className="object-cover"
              src={"/company-logo.png"}
              alt="logo navbar"
            />
          </div>
          <ul className="flex gap-10">
            <li>Show All</li>
            <li>Stainless Steel Products</li>
            <li>Bamboo Products</li>
            <li>Wooden Products</li>
            <li>Glass Products</li>
            <li>Mix</li>
          </ul>
          <div>search</div>
        </div>
        <div className="flex w-full items-center justify-between py-4 md:hidden">
          <div className="relative h-[50px] w-[140px] md:h-[70px] md:w-[190px]">
            <Image
              fill
              className="object-cover"
              src={"/company-logo.png"}
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
              <ul className="list-none space-y-2">
                <li>Show All</li>
                <li>Stainless Steel Products</li>
                <li>Bamboo Products</li>
                <li>Wooden Products</li>
                <li>Glass Products</li>
                <li>Mix</li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
