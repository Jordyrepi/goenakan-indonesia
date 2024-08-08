"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/Carousel";
import { CarouselClientProps } from "@/types/client.types";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React from "react";

const CarouselClient: React.FC<CarouselClientProps> = ({ clients }) => {
  const plugin = React.useRef(
    Autoplay({ delay: 1500, stopOnInteraction: true })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-7xl l mx-auto "
    >
      <CarouselContent className="ml-1">
        {clients.map((client, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/6">
            <div className="relative h-[125px] w-[125px]">
              <Image
                src={client.image}
                alt={client.name}
                fill
                className="object-contain"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CarouselClient;
