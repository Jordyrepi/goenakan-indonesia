"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
} from "@/components/ui/Carousel";
import { CarouselClientProps } from "@/types/client.types";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React from "react";

const CarouselClient: React.FC<CarouselClientProps> = ({ clients }) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{
        align: "start",
        loop: true,
      }}
      className="l mx-auto w-full max-w-7xl"
    >
      <CarouselContent className="ml-1">
        {clients?.items.map((client, index) => {
          const idAsset = client.fields.logoClient.sys.id;
          const assets = clients.includes.Asset;
          const thumbnail = assets.find(
            (asset: any) => asset.sys.id === idAsset,
          );
          return (
            <CarouselItem
              key={index}
              className="flex items-center justify-center pl-1 md:basis-1/2 lg:basis-1/5"
            >
              <div className="relative h-[125px] w-[125px]">
                <Image
                  src={`https:${thumbnail?.fields.file.url}`}
                  alt={client.fields.clientName}
                  fill
                  sizes="fit"
                  quality={100}
                />
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      {/* <CarouselPrevious className="absolute left-0 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 transform items-center justify-center bg-gray-800 bg-opacity-50 text-white focus:outline-none" /> */}
      {/* <CarouselNext className="absolute right-0 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 transform items-center justify-center bg-gray-800 bg-opacity-50 text-white focus:outline-none" /> */}
    </Carousel>
  );
};

export default CarouselClient;
