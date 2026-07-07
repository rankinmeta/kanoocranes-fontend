import HighlightedTitle from "@/components/common/highlight-title";
import { StrapiImage } from "@/components/common/strapi-image";
import Tag from "@/components/common/tag";
import { cn, extractHighlightText } from "@/lib/utils";
import { MediaProps, TagTitleProps } from "@/type";

type CraneCategoryProps = {
  theme?: "dark" | "light";
  tag_title: TagTitleProps;
  details: {
    id: number;
    title: string;
    description: string;
    logo: MediaProps;
  }[];
};

const CraneCategorySection = ({
  theme,
  details,
  tag_title,
}: CraneCategoryProps) => {
  if (!tag_title || !details) return null;

  return (
    <section
      className={cn(
        "bg-[#f5f5f5]",
        theme === "dark" && "bg-secondary text-white",
      )}
    >
      <div className="container container-padding-x py-10 md:py-20">
        <div className="space-y-2">
          <Tag className={cn(theme === "dark" && "bg-white")}>
            {tag_title.tag}
          </Tag>
          <HighlightedTitle
            title={tag_title.title}
            highlights={extractHighlightText(tag_title.title)}
          />
        </div>

        <div className="grid md:grid-cols-4 gap-5 mt-10">
          {details.map((detail) => (
            <Card key={detail.id} theme={theme} {...detail} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CraneCategorySection;

function Card({
  theme,
  description,
  logo,
  title,
}: {
  theme?: "dark" | "light";
  logo: MediaProps;
  title: string;
  description: string;
}) {
  return (
    <div
      className={cn(
        "bg-white flex flex-col md:items-center justify-center gap-3 p-6 rounded-md",
        theme === "dark" && "bg-[#041D54]",
      )}
    >
      {logo && (
        <StrapiImage
          src={logo.url}
          alt={logo.alternativeText || ""}
          width={150}
          height={150}
          className="rounded-full aspect-square object-cover"
        />
      )}

      <div className="space-y-1 mt-4 md:mt-7">
        <h4 className="text-lg font-manrope font-medium">{title}</h4>
        <p
          className={cn(
            "text-[#414651] text-sm leading-snug",
            theme === "dark" && "text-[#A4A7AE]",
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
