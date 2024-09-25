"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/Carousel";
import { CarouselClientProps } from "@/types/client.types";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const CarouselClient: React.FC<CarouselClientProps> = ({ clients }) => {
  const plugin = React.useRef(Autoplay({ delay: 2000 }));

  const reversePlugin = React.useRef(Autoplay({ delay: 2000 }));

  const handleReverseAutoplay = (embla: any) => {
    embla.reInit();
    embla.scrollTo(embla.slideNodes().length - 1); // Start at the last slide
    const autoplayReverse = () => embla.scrollPrev(); // Reverse the scroll
    const autoplayInterval = setInterval(autoplayReverse, 2000);

    embla.on("destroy", () => clearInterval(autoplayInterval)); // Cleanup on destroy
  };

  return (
    <section className="space-y-4">
      <h2 className="text-center font-gilda text-3xl font-medium md:text-5xl">
        Our Clients
      </h2>

      {/* Careousel moving from left to right */}
      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="mx-auto w-full max-w-7xl"
      >
        <CarouselContent className="ml-1 space-x-16">
          {clients?.items.map((client, index) => {
            const idAsset = client.fields.logoClient.sys.id;
            const assets = clients.includes.Asset;
            const thumbnail = assets.find(
              (asset: any) => asset.sys.id === idAsset,
            );
            return (
              <CarouselItem
                key={index}
                className="flex basis-1/3 items-center justify-center pl-1 md:basis-1/2 lg:basis-1/5"
              >
                <div className="relative h-[75px] w-[75px] md:h-[125px] md:w-full">
                  <Image
                    src={`https:${thumbnail?.fields.file.url}`}
                    alt={client.fields.clientName}
                    fill
                    className="object-contain"
                    quality={100}
                  />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>

      {/* Careousel moving from right to left */}
      {/* <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="mx-auto w-full max-w-7xl"
      >
        <CarouselContent className="ml-1 space-x-16">
          {clients?.items.map((client, index) => {
            const idAsset = client.fields.logoClient.sys.id;
            const assets = clients.includes.Asset;
            const thumbnail = assets.find(
              (asset: any) => asset.sys.id === idAsset,
            );
            return (
              <CarouselItem
                key={index}
                className="flex basis-1/3 items-center justify-center pl-1 md:basis-1/2 lg:basis-1/5"
              >
                <div className="relative h-[75px] w-[75px] md:h-[125px] md:w-full">
                  <Image
                    src={`https:${thumbnail?.fields.file.url}`}
                    alt={client.fields.clientName}
                    fill
                    className="object-contain"
                    quality={100}
                  />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel> */}
    </section>
  );
};

export default CarouselClient;
