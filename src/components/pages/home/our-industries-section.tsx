import HighlightedTitle from "@/components/common/highlight-title";
import { StrapiImage } from "@/components/common/strapi-image";
import Tag from "@/components/common/tag";
import { extractHighlightText } from "@/lib/utils";
import type { MediaProps, TagTitleProps } from "@/type";

type OurIndustriesSectionProps = {
  id: number;
  tag_title: TagTitleProps;
  industries: {
    id: number;
    icon: MediaProps;
    title: string;
    description: string;
  }[];
};

const OurIndustriesSection = ({
  industries,
  tag_title,
}: OurIndustriesSectionProps) => {
  if (!tag_title || !industries) return null;

  return (
    <section className="container container-padding-x py-10 md:py-16 lg:py-20">
      <div className="space-y-3">
        <Tag>{tag_title.tag}</Tag>
        <HighlightedTitle
          title={tag_title.title}
          highlights={extractHighlightText(tag_title.title)}
          className="max-w-md"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-4 mt-7 lg:mt-14">
        {industries.map((industry) => (
          <Card key={industry.id} {...industry} />
        ))}
      </div>
    </section>
  );
};

export default OurIndustriesSection;

function Card({
  description,
  icon,
  title,
}: OurIndustriesSectionProps["industries"][0]) {
  if (!title || !icon) return null;

  return (
    <div className="bg-[#F5F5F5] rounded-xl p-6">
      <StrapiImage
        src={icon.url}
        alt={icon.alternativeText || ""}
        width={45}
        height={45}
      />

      <h4 className="text-lg font-medium mt-4 mb-1">{title}</h4>

      <p className="text-[#717680] text-sm">{description}</p>
    </div>
  );
}
