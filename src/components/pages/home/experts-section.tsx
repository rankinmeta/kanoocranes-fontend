import HighlightedTitle from "@/components/common/highlight-title";
import { StrapiImage } from "@/components/common/strapi-image";
import Tag from "@/components/common/tag";
import { cn, extractHighlightText } from "@/lib/utils";
import type { MediaProps, TagTitleProps } from "@/type";
import { ArrowRight, Mail, Phone } from "lucide-react";
import Link from "next/link";

type ExpertsSectionProps = {
  theme?: "dark" | "light";
  id: number;
  tag_title: TagTitleProps;
  description: string;
  experts: {
    id: number;
    image: MediaProps | null;
    name: string;
    role: string;
    phone: string;
    mail: string;
  }[];
};

const ExpertsSection = ({
  theme = "dark",
  tag_title,
  description,
  experts,
}: ExpertsSectionProps) => {
  if (!theme || !tag_title || !description || !experts) return null;

  return (
    <section
      className={cn(
        "relative bg-secondary py-10 md:py-16 lg:py-20 text-white",
        theme === "light" && "bg-white text-black",
      )}
    >
      {/* Circles */}
      <div
        className={cn(
          "absolute right-5 top-10 grid-cols-4 gap-2 gap-y-3 after:bg-linear-to-r after:from-transparent after:to-secondary after:absolute after:inset-0",
          theme === "light" ? "hidden" : "hidden lg:grid",
        )}
      >
        {Array(8)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="size-14 bg-[#03297a] rounded-full"></div>
          ))}
      </div>

      <div className="container container-padding-x flex flex-col items-center justify-center">
        <div className="flex flex-col justify-center md:items-center md:text-center gap-3">
          <Tag className={cn("bg-white", theme === "light" && "bg-primary")}>
            {tag_title.tag}
          </Tag>
          <HighlightedTitle
            title={tag_title.title}
            highlights={extractHighlightText(tag_title.title)}
            className={cn(
              "max-w-xl",
              theme === "dark" && "[&>span]:text-white!",
            )}
          />
          <p className="max-w-xl text-sm">{description}</p>
        </div>

        <div className="flex w-full lg:grid grid-cols-4 gap-4 mt-8 lg:mt-16 overflow-x-scroll scrollbar-none">
          {experts.map((expert) => (
            <Card key={expert.id} theme={theme} {...expert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertsSection;

function Card({
  theme = "dark",
  ...props
}: { theme?: "dark" | "light" } & ExpertsSectionProps["experts"][0]) {
  return (
    <div
      className={cn(
        "bg-[#041D54] w-[90%] shrink-0 md:w-auto p-6 flex flex-col gap-4 rounded-xl border-b-2 border-transparent hover:border-primary transition-colors duration-300",
        theme === "light" && "bg-[#f5f5f5] hover:border-white",
      )}
    >
      {props.image && (
        <StrapiImage
          src={props.image.url}
          alt={props.image.alternativeText || ""}
          width={100}
          height={100}
          className="rounded-full object-cover size-12"
        />
      )}

      <div className="flex flex-col">
        <span>{props.name}</span>
        <span className="text-xs text-[#A4A7AE]">{props.role}</span>
      </div>

      <div className="text-xs space-y-1">
        <span className="flex gap-2 items-center">
          <Phone size={16} className="shrink-0" /> {props.phone}
        </span>
        <span className="flex gap-2 items-center">
          <Mail size={16} className="shrink-0" />{" "}
          <Link href={`mailto:${props.mail}`}>{props.mail}</Link>
        </span>
      </div>

      <Link
        href="/contact-us"
        className={cn(
          "text-primary flex items-center gap-2 text-sm",
          theme === "light" && "text-secondary",
        )}
      >
        Schedule call <ArrowRight />
      </Link>
    </div>
  );
}
