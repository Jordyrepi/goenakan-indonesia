import { icons } from "@/utils/dummy-data/icons";
import Image from "next/image";
import React from "react";

const IconsSection = () => {
  return (
    <section className="bg-[#E1DAD6] md:py-20 py-10 px-4">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-3 justify-items-center md:gap-10 gap-y-14 gap-x-4">
          {icons.map((icon, index) => (
            <div
              key={index}
              className="flex md:w-[180px] flex-col items-center justify-center md:gap-4 animate-fadeIn transform space-y-4 transition-transform duration-500 ease-in-out hover:-translate-y-2"
            >
              <div className="relative md:h-32 md:w-32 h-16 w-16 rounded-full  ">
                <Image src={icon.icon} alt={icon.title} fill className="object-cover"/>
              </div>
              <p className="text-center font-serif md:text-xl text-sm text-[#1E1E1E]">
                {icon.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IconsSection;
