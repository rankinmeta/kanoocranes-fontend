import HighlightedTitle from "@/components/common/highlight-title";
import { StrapiImage } from "@/components/common/strapi-image";
import Tag from "@/components/common/tag";
import { cn, extractHighlightText } from "@/lib/utils";
import { SectionWithStickyCardsProps } from "@/type";

const StickyCardsOneSideSection = ({
  tag_title,
  description,
  cards,
  className,
  cardStyles,
}: SectionWithStickyCardsProps & {
  className?: string;
  cardStyles?: string;
}) => {
  if (!tag_title || !description || !cards) return null;

  return (
    <section className={cn("bg-[#F5F5F5]", className)}>
      <div className="relative container container-padding-x py-10 md:py-16 lg:py-20 grid md:grid-cols-2 gap-5">
        <div className="md:sticky top-28 self-start space-y-2.5">
          <Tag>{tag_title.tag}</Tag>
          <HighlightedTitle
            title={tag_title.title}
            highlights={extractHighlightText(tag_title.title)}
          />
          <p>{description}</p>
        </div>

        <div className="space-y-3">
          {cards.map((card) => (
            <BrandCard key={card.id} cardStyles={cardStyles} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StickyCardsOneSideSection;

function BrandCard({
  label,
  description,
  icon,
  cardStyles,
}: { cardStyles?: string } & SectionWithStickyCardsProps["cards"][0]) {
  return (
    <div
      className={cn(
        "md:sticky top-28 bg-white rounded-md px-8 py-7 flex flex-col lg:flex-row lg:items-center gap-5",
        cardStyles,
      )}
    >
      <StrapiImage
        src={icon.url}
        alt={icon.alternativeText || ""}
        width={150}
        height={150}
        className="shrink-0 aspect-square rounded-full object-cover"
      />

      <div className="space-y-2">
        <h4 className="text-lg font-semibold font-manrope">{label}</h4>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}
