"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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

  const navbarStyle = {
    transition: "background-color 0.6s ease",
    backgroundColor: scrollPosition > 0 ? "blur" : "transparent",
  };
  return (
    <header
      className={`sticky top-0 z-50 transition duration-300 ${
        scrollPosition > 0
          ? "bg-white bg-opacity-50 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="h-10 bg-[#7A543E]"></div>
      <nav className="max-w-[1400px] mx-auto w-full flex justify-between items-center">
        <div className="relative w-[190px] h-[70px]">
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
      </nav>
    </header>
  );
};

export default Navbar;
