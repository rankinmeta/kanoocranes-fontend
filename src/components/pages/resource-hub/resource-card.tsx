import { StrapiImage } from "@/components/common/strapi-image";
import { cn } from "@/lib/utils";
import { MediaProps } from "@/type";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type ResourceCardProps = {
  resource: {
    id: number;
    documentId: string;
    title: string;
    slug: string;
    date: string;
    image: MediaProps;
    resource_type: {
      id: number;
      type: string;
      slug: string;
    };
  };
};

const ResourceCard = ({
  resource,
  className,
}: ResourceCardProps & { className?: string }) => {
  if (!resource) return null;
  return (
    <Link
      href={`/resource-hub/${resource.slug}`}
      target="_blank"
      className={cn("shrink-0 w-[90%] md:w-1/2 lg:w-auto", className)}
    >
      <div className="group bg-white md:bg-transparent p-3 pb-5 hover:bg-white transition-colors duration-300">
        <div className="overflow-hidden">
          <StrapiImage
            src={resource.image.url}
            alt={resource.image.alternativeText || ""}
            width={200}
            height={150}
            className="w-full aspect-video rounded-sm object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        <div className="flex justify-between items-center text-xs mt-5 mb-2">
          <span className="bg-[#E9EAEB] px-1.5 py-px">
            {resource.resource_type.type}
          </span>
          <span className="text-[#414651]">
            {new Intl.DateTimeFormat("en-GB", {
              day: "numeric",
              month: "short",
              year: "2-digit",
            }).format(new Date(resource.date))}
          </span>
        </div>
        <h4 className="font-medium mb-3">{resource.title}</h4>
        <button className="flex items-center gap-2 text-primary text-sm">
          Read more <ArrowRight size={16} />
        </button>
      </div>
    </Link>
  );
};

export default ResourceCard;
