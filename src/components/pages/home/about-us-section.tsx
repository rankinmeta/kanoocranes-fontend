import HighlightedTitle from "@/components/common/highlight-title";
import { StrapiImage } from "@/components/common/strapi-image";
import Tag from "@/components/common/tag";
import { Button } from "@/components/ui/button";
import { extractHighlightText } from "@/lib/utils";
import { AboutUsSectionProps } from "@/type";
import Link from "next/link";

const AboutUsSection = ({
  tag_title,
  images,
  description,
  button
}: AboutUsSectionProps) => {
    if(!tag_title || !images || !description) return null;

  return (
    <section className="container container-padding-x py-10 md:py-16 lg:py-20 flex flex-col lg:flex-row justify-between items-center">
      <div className="space-y-3 md:w-1/2">
        <Tag>{tag_title.tag}</Tag>
        <HighlightedTitle
          title={tag_title.title}
          highlights={extractHighlightText(tag_title.title)}
          className="max-w-lg"
        />
        <p className="text-[#414651]">{description}</p>

        {button && (
          <Link
            href={button.href}
            target={button.isExternal ? "_blank" : "_self"}
            className="hidden lg:block"
          >
            <Button>{button.label}</Button>
          </Link>
        )}
      </div>

      <div className="grid grid-cols-3 gap-5 mt-5 lg:mt-0">
        {images?.length > 0 &&
          images.map((img) => (
            <StrapiImage
              src={img.url}
              alt={img.alternativeText || "crane"}
              key={img.id}
              width={150}
              height={150}
              className="aspect-square rounded-full object-cover"
            />
          ))}
      </div>
    </section>
  );
};

export default AboutUsSection;
