import HighlightedTitle from "@/components/common/highlight-title";
import { StrapiImage } from "@/components/common/strapi-image";
import Tag from "@/components/common/tag";
import { cn, extractHighlightText } from "@/lib/utils";
import type { SectionWithGridProps } from "@/type";

const Section2 = ({
  className,
  cards,
  description,
  tag_title,
}: SectionWithGridProps & { className?: string }) => {
  if (!description || !tag_title || !cards) return null;

  return (
    <section className={cn("bg-[#F5F5F5] py-10 md:py-16 lg:py-20", className)}>
      <div className="container container-padding-x md:grid grid-cols-2 gap-5">
        <div className="space-y-2.5">
          <Tag>{tag_title.tag}</Tag>
          <HighlightedTitle
            title={tag_title.title}
            highlights={extractHighlightText(tag_title.title)}
          />
          <p className="text-[#414651] text-sm max-w-lg">{description}</p>
        </div>

        <div className="flex md:grid lg:grid-cols-2 mt-7 md:mt-0 gap-4 gap-y-10 overflow-x-scroll scrollbar-none">
          {cards.map((card) => (
            <div className="space-y-2 shrink-0 w-[90%] md:w-auto" key={card.id}>
              {/* <Automation /> */}
              <StrapiImage
                src={card.icon.url}
                alt={card.icon.alternativeText || ""}
                width={56}
                height={56}
              />
              <h5 className="text-lg">{card.label}</h5>
              <p className="text-[#414651] text-sm">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;
