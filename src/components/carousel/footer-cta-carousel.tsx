"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { StrapiImage } from "../common/strapi-image";
import Autoplay from "embla-carousel-autoplay";
import { MediaProps } from "@/type";

export function FooterCTACarousel({ images }: { images: MediaProps[] }) {
  if (!images || images.length === 0) return null;
  return (
    <Carousel className="h-full" plugins={[Autoplay({ delay: 4000 })]}>
      <CarouselContent wrapperClassName="h-full" className="h-full">
        {images.map((img, index) => (
          <CarouselItem key={index} className="h-full">
            <StrapiImage
              src={img.url}
              alt={img.alternativeText || "crane"}
              width={200}
              height={150}
              className="size-full aspect-video md:aspect-[1/0.6] object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
