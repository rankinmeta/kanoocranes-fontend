import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { StrapiImage } from "../common/strapi-image";
import Quote from "../icons/quote";
import { MediaProps } from "@/type";

type TestimonialCarouselProps = {
  testimonials: {
    id: number;
    image: MediaProps;
    testimonial: string;
    name: string;
    role: string | null;
  }[];
};

export function TestimonialCarousel({
  testimonials,
}: TestimonialCarouselProps) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full mt-8 lg:mt-16"
    >
      <CarouselContent>
        {testimonials.map((data) => (
          <CarouselItem key={data.id} className="basis-[90%] lg:basis-1/2">
            <div className="flex flex-col md:flex-row gap-6">
              <StrapiImage
                src={data.image.url}
                alt={data.image.alternativeText || ""}
                width={200}
                height={200}
                className="rounded-md object-cover aspect-square shrink-0"
              />

              <div>
                <Quote />
                <p className="text-[#414651]">{data.testimonial}</p>

                <div className="flex flex-col mt-3">
                  <span className="font-medium">{data.name}</span>
                  <span className="text-[#414651] text-sm">{data.role}</span>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious size="icon-lg" className="hidden lg:block" />
      <CarouselNext size="icon-lg" className="hidden lg:block" />
    </Carousel>
  );
}
