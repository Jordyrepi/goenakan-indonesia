import { icons } from "@/utils/dummy-data/icons";
import Image from "next/image";
import React from "react";

const IconsSection = () => {
  return (
    <section className="bg-[#E1DAD6] px-4 py-10 md:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-3 justify-items-center gap-x-4 gap-y-14 md:gap-10">
          {icons.map((icon, index) => (
            <div
              key={index}
              className="animate-fadeIn flex transform flex-col items-center justify-center space-y-4 transition-transform duration-500 ease-in-out hover:-translate-y-2 md:w-[180px] md:gap-4"
            >
              <div className="relative h-8 w-8 rounded-full md:h-32 md:w-32">
                <Image
                  src={icon.icon}
                  alt={icon.title}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="font-gilda text-center text-sm text-[#1E1E1E] md:text-xl">
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
