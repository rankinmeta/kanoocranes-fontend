import HighlightedTitle from "@/components/common/highlight-title";
import Tag from "@/components/common/tag";
import { extractHighlightText } from "@/lib/utils";
import type { BuyingGuideSectionProps } from "@/type";

const BuyingGuideSection = ({
  details,
  tag_title,
}: BuyingGuideSectionProps) => {
  if (!details || !tag_title) return null;

  return (
    <section className="relative bg-secondary text-white">
      {/* Circles */}
      <div className="hidden lg:grid absolute top-7 right-0 grid-cols-4 gap-2 after:absolute after:inset-0 after:bg-linear-to-r after:from-transparent after:to-secondary after:z-10">
        {Array(12)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="size-14 bg-[#03297a] rounded-full"></div>
          ))}
      </div>
      <div className="relative container container-padding-x py-10 md:py-16 lg:py-20">
        <div className="space-y-2 sticky top-28">
          <Tag>{tag_title.tag}</Tag>
          <HighlightedTitle
            title={tag_title.title}
            highlights={extractHighlightText(tag_title.title)}
            className="max-w-md"
          />
        </div>

        <div className="mt-10">
          {details.map((detail, i) => (
            <Card key={detail.id} {...detail} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuyingGuideSection;

function Card({
  label,
  description,
  index,
}: BuyingGuideSectionProps["details"][0] & { index: number }) {
  return (
    <div className="sticky top-64 flex flex-col md:flex-row gap-3 md:gap-0 border-t border-[#F5F5F5]/30 py-10 bg-secondary">
      <span className="flex-[20%] text-5xl font-manrope font-medium">
        0{index + 1}
      </span>
      <div className="flex-[30%]">
        <h4 className="text-lg font-manrope max-w-60 leading-5">{label}</h4>
      </div>
      <p className="flex-1/2 text-sm">{description}</p>
    </div>
  );
}
