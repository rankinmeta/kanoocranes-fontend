import HighlightedTitle from "@/components/common/highlight-title";
import { StrapiImage } from "@/components/common/strapi-image";
import Tag from "@/components/common/tag";
import { extractHighlightText } from "@/lib/utils";
import type { MediaProps, TagTitleProps } from "@/type";

type SalesCategorySectionProps = {
  id: number;
  tag_title: TagTitleProps;
  details: {
    id: number;
    title: string;
    description: string;
    logo: MediaProps;
  }[];
};

const SalesCategorySection = ({
  details,
  tag_title,
}: SalesCategorySectionProps) => {
  if (!tag_title || !details) return null;

  return (
    <section className="relative bg-secondary text-white">
      {/* Circles */}
      <div className="hidden lg:grid absolute top-12 right-0 grid-cols-5 gap-2 after:absolute after:inset-0 after:bg-linear-to-r after:from-transparent after:to-secondary after:z-10">
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="size-14 bg-[#03297a] rounded-full"></div>
          ))}
      </div>

      <div className="relative z-10 container container-padding-x py-10 md:py-16 lg:py-20">
        <div className="space-y-2">
          <Tag className="bg-white">{tag_title.tag}</Tag>
          <HighlightedTitle
            title={tag_title.title}
            highlights={extractHighlightText(tag_title.title)}
          />
        </div>
        <div className="grid lg:grid-cols-2 gap-3 mt-10">
          {details.map((detail) => (
            <Card key={detail.id} {...detail} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SalesCategorySection;

function Card({
  description,
  logo,
  title,
}: SalesCategorySectionProps["details"][0]) {
  if (!title || !description || !logo) return null;

  return (
    <div className="bg-[#041D54] p-6 rounded-md flex flex-col md:flex-row md:items-center gap-5 text-white">
      <StrapiImage
        src={logo.url}
        alt={logo.alternativeText || ""}
        width={200}
        height={200}
        className="size-40 shrink-0 rounded-full object-cover"
      />
      <div className="space-y-2">
        <h4 className="text-lg font-manrope">{title}</h4>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}
