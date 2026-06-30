import HighlightedTitle from "@/components/common/highlight-title";
import { StrapiImage } from "@/components/common/strapi-image";
import Tag from "@/components/common/tag";
import { extractHighlightText } from "@/lib/utils";
import { SimpleSectionProps } from "@/type";

const Section2 = ({ description, image, tag_title }: SimpleSectionProps) => {
  if (!description || !image || !tag_title) return null;

  return (
    <section className="container container-padding-x py-10 md:py-16 lg:py-20 grid md:grid-cols-5 gap-5 items-center">
      <StrapiImage
        src={image.url}
        alt={image.alternativeText || ""}
        width={400}
        height={400}
        className="hidden md:block aspect-[1/0.7] col-span-2 rounded-md object-cover"
      />

      <div className="space-y-2.5 md:col-span-3">
        <Tag>{tag_title.tag}</Tag>
        <HighlightedTitle
          title={tag_title.title}
          highlights={extractHighlightText(tag_title.title)}
          className="max-w-sm"
        />

        <StrapiImage
          src={image.url}
          alt={image.alternativeText || ""}
          width={400}
          height={400}
          className="aspect-[1/0.7] my-5 md:hidden rounded-md object-cover"
        />

        <p className="text-[#414651] max-w-2xl">{description}</p>
      </div>
    </section>
  );
};

export default Section2;
