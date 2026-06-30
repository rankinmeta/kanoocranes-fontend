import HighlightedTitle from "@/components/common/highlight-title";
import { StrapiImage } from "@/components/common/strapi-image";
import Tag from "@/components/common/tag";
import { cn, extractHighlightText } from "@/lib/utils";
import type { SimpleSectionProps } from "@/type";

const CardsSection = ({
  sticky_cards,
}: {
  sticky_cards: SimpleSectionProps[];
}) => {
  if (!sticky_cards || sticky_cards.length === 0) return null;

  return (
    <section className="relative container container-padding-x py-10 md:py-20 space-y-10">
      {sticky_cards.map((sticky_card, i) => (
        <Card key={sticky_card.id} {...sticky_card} reversed={i % 2 === 0} />
      ))}
    </section>
  );
};

export default CardsSection;

function Card({
  reversed = false,
  description,
  image,
  tag_title,
}: SimpleSectionProps & { reversed?: boolean }) {
  if (!description || !image || !tag_title) return null;

  return (
    <div className="sticky top-28 bg-[#f5f5f5] rounded-md grid md:grid-cols-5 gap-5 items-center p-6">
      <StrapiImage
        src={image.url}
        alt={image.alternativeText || ""}
        width={400}
        height={400}
        className={cn(
          "hidden md:block aspect-[1/0.7] object-cover col-span-2 rounded-md",
          reversed && "order-2 ms-auto",
        )}
      />

      <div className="col-span-3 space-y-2.5">
        <Tag>{tag_title.tag}</Tag>
        <HighlightedTitle
          title={tag_title.title}
          highlights={extractHighlightText(tag_title.title)}
          className="text-3xl! max-w-xs"
        />

        <StrapiImage
          src={image.url}
          alt={image.alternativeText || ""}
          width={400}
          height={400}
          className={cn(
            "md:hidden aspect-[1/0.7] my-5 object-cover rounded-md",
            reversed && "order-2 ms-auto",
          )}
        />

        <p className="text-[#414651]">{description}</p>
      </div>
    </div>
  );
}
