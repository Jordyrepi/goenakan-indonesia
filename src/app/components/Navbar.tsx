"use client";

import {
  ListItem,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/NavigationMenu";
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

  const components: { title: string; href: string; description: string }[] = [
    {
      title: "Glass Products",
      href: "/docs/primitives/alert-dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Wooden Products",
      href: "/docs/primitives/hover-card",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Stainless Steel Products",
      href: "/docs/primitives/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Bamboo Products",
      href: "/docs/primitives/scroll-area",
      description: "Visually or semantically separates content.",
    },
  ];
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
          <div className="flex gap-x-10">
            <div className="relative h-[70px] w-[190px]">
              <Image
                fill
                className="object-cover"
                src={"/company-logo.png"}
                alt="logo navbar"
              />
            </div>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Category</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        ></ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
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
