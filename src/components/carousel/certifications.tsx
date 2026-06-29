import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { StrapiImage } from "../common/strapi-image";
import { type MediaProps } from "@/type";

export function CertificationsCarousel({
  certificates,
}: {
  certificates: {
    id: number;
    logo: MediaProps;
    title: string;
    label: string;
    description: string;
  }[];
}) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: false,
      }}
      className="w-full mt-7"
    >
      <CarouselContent>
        {certificates.map((certificate) => (
          <CarouselItem
            key={certificate.id}
            className="basis-1/1 md:basis-1/3 lg:basis-1/4"
          >
            <div className="space-y-2">
              <div className="bg-[#F5F5F5] flex items-center justify-center w-full aspect-video">
                <StrapiImage
                  src={certificate.logo.url}
                  alt={certificate.logo.alternativeText || ""}
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>

              <h5 className="text-xl font-semibold text-primary font-manrope">
                {certificate.title}
              </h5>
              <span className="font-medium">{certificate.label}</span>
              <p className="text-sm mt-2">{certificate.description}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious size="icon-lg" className="-top-14" />
      <CarouselNext size="icon-lg" className="-top-14" />
    </Carousel>
  );
}
