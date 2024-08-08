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
      className={`sticky top-0 z-50 transition duration-300 ${
        scrollPosition > 0
          ? "bg-white bg-opacity-50 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="lg:h-10 h-5 bg-[#7A543E]"></div>
      <nav className="max-w-[1400px] mx-auto w-full flex justify-between items-center">
        <div className="w-full hidden md:flex justify-between items-center">
          <div className=" relative w-[190px] h-[70px]">
            <Image
              fill
              className="object-cover"
              src={"/company-logo.png"}
              alt="logo navbar"
            />
          </div>
          <li className="flex gap-10">
            <ul>Show All</ul>
            <ul>Stainless Stell Products</ul>
            <ul>Bamboo Products</ul>
            <ul>Wooden Products</ul>
            <ul>Glass Products</ul>
            <ul>Mix</ul>
          </li>
          <div>search</div>
        </div>
        <div className="md:hidden flex justify-between items-center w-full">
          <div className=" relative md:w-[190px] w-[140px] md:h-[70px] h-[50px]">
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
              <li className="list-none space-y-2">
                <ul>Show All</ul>
                <ul>Stainless Stell Products</ul>
                <ul>Bamboo Products</ul>
                <ul>Wooden Products</ul>
                <ul>Glass Products</ul>
                <ul>Mix</ul>
              </li>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
