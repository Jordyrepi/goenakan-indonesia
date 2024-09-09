import { icons } from "@/utils/dummy-data/icons";
import Image from "next/image";
import React from "react";

const IconsSection = () => {
  return (
    <section className="bg-[#E1DAD6] py-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-3 justify-items-center gap-10">
          {icons.map((icon, index) => (
            <div
              key={index}
              className="flex w-[180px] flex-col items-center justify-center gap-4 animate-fadeIn transform space-y-4 transition-transform duration-500 ease-in-out hover:-translate-y-2"
            >
              <div className="relative h-32 w-32 rounded-full  ">
                <Image src={icon.icon} alt={icon.title} fill className="object-cover"/>
              </div>
              <p className="text-center font-serif text-xl text-[#1E1E1E]">
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
