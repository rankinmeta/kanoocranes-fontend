import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { LinkProps, MediaProps } from "@/type";
import { StrapiImage } from "../common/strapi-image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ProjectProps = {
  image: MediaProps;
  title: string;
  link: LinkProps | null;
  details:
    | {
        label: string;
        description: string;
      }[]
    | null;
};

export function ProjectsCarousel({ projects }: { projects: ProjectProps[] }) {
  if (!projects) return null;
  return (
    <Carousel
      opts={{
        align: "start",
        loop: false,
      }}
      className="w-full mt-7"
    >
      <CarouselContent>
        {projects.map((res, i) => (
          <CarouselItem key={i} className="basis-1/1">
            <Card {...res} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious size="icon-lg" className="-top-14" />
      <CarouselNext size="icon-lg" className="-top-14" />
    </Carousel>
  );
}

function Card({ details, image, link, title }: ProjectProps) {
  return (
    <div className="bg-[#F5F5F5] rounded-md p-3 md:p-6 pe-0 w-full">
      <div className="flex items-center gap-3">
        <StrapiImage
          src={image.url}
          alt={image.alternativeText || "crane"}
          width={100}
          height={100}
          className="rounded-md aspect-[2/1.3] object-cover"
        />
        <div className="space-y-2">
          <h3 className="max-w-48 font-medium">{title}</h3>
          {link && (
            <Link
              href={link.href || "#"}
              className="text-primary flex items-center gap-1 text-sm font-semibold"
              target={link.isExternal ? "_blank" : "_self"}
            >
              {link.label} <ArrowRight size={16} />
            </Link>
          )}
        </div>
      </div>

      {details && (
        <ul className="pt-4">
          {details.map((data) => (
            <li
              key={data.label}
              className="border-b border-[#D5D7DA] pb-4 pt-3 last:border-none"
            >
              <div className="flex items-center gap-2">
                <div className="size-2 bg-primary" />
                <span className="font-medium">{data.label}</span>
              </div>
              <span className="text-[#414651]">{data.description}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
