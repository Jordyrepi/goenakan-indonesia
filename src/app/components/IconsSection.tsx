import { icons } from "@/utils/dummy-data/icons";
import React from "react";

const IconsSection = () => {
  return (
    <section className="bg-[#E1DAD6] py-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-3 justify-items-center gap-10">
          {icons.map((icon, index) => (
            <div
              key={index}
              className="flex w-[180px] flex-col items-center justify-center gap-4"
            >
              <div className="h-32 w-32 rounded-full bg-[#572304]"></div>
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
