import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { StrapiImage } from "../common/strapi-image";
import { type MediaProps } from "@/type";
import Linkedin from "../icons/linkedin";
import Link from "next/link";

export function TeamCarousel({
  members,
}: {
  members: {
    id: number;
    image: MediaProps;
    name: string;
    role: string;
    linkedin_url: string | null;
  }[];
}) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: false,
      }}
      className="w-full mt-12"
    >
      <CarouselContent>
        {members.map((member) => (
          <CarouselItem
            key={member.id}
            className="basis-[80%] md:basis-1/3 lg:basis-1/4"
          >
            <div>
              <div className="relative bg-secondary w-full aspect-square rounded-md flex justify-center items-end overflow-hidden">
                <StrapiImage
                  src={member.image.url}
                  alt={member.image.alternativeText || "Team member"}
                  width={250}
                  height={100}
                  className="relative -bottom-24"
                />
                {member.linkedin_url && (
                  <div className="absolute size-11 bottom-3 right-3 flex justify-center items-center bg-white/20 backdrop-blur-3xl rounded-full">
                    <Link
                      href={member.linkedin_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin />
                    </Link>
                  </div>
                )}
              </div>

              <h5 className="text-lg font-medium font-manrope mt-6 leading-5">
                {member.name}
              </h5>
              <span className="text-xs text-[#414651]">{member.role}</span>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious size="icon-lg" className="-top-20" />
      <CarouselNext size="icon-lg" className="-top-20" />
    </Carousel>
  );
}
