import HighlightedTitle from "@/components/common/highlight-title";
import { StrapiImage } from "@/components/common/strapi-image";
import { extractHighlightText } from "@/lib/utils";
import type { MediaProps } from "@/type";
import Link from "next/link";

type RecommendedCraneSectionProps = {
  title: string;
  models: {
    id: number;
    model_slug: string;
    crane_type: {
      type: string;
      slug: string;
    };
    main_section: {
      model_short_name: string;
      best_for: string;
      images: MediaProps[];
    };
  }[];
};

const RecommendedCraneSection = ({
  title,
  models,
}: RecommendedCraneSectionProps) => {
    if(!title || !models || models.length === 0) return null;
  return (
    <div>
      <HighlightedTitle
        title={title}
        highlights={extractHighlightText(title)}
        className="md:text-3xl"
      />

      <div className="grid grid-cols-4 gap-3">
        {models.map((model) => (
          <Card {...model} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedCraneSection;

function Card({
  model_slug,
  main_section,
  crane_type,
}: RecommendedCraneSectionProps["models"][number]) {
  return (
    <div className="mt-10">
      <Link href={`/models/${model_slug}`} target="_blank">
        <div className="bg-[#F5F5F5] rounded-md flex items-center justify-center p-5 overflow-hidden">
          <StrapiImage
            src={main_section.images[0].url}
            alt={main_section.images[0].alternativeText || "crane image"}
            width={200}
            height={200}
            className="hover:scale-110 transition-transform duration-300"
          />
        </div>

        <h3 className="text-lg font-medium mt-5 mb-2">
          {main_section.model_short_name}
        </h3>
        <div>
          <div className="flex items-center gap-2 py-3">
            <div className="size-2 bg-primary rounded-xs shrink-0" />
            <span className="text-sm font-semibold">Type</span>
            <span className="text-sm text-gray-600">{crane_type.type}</span>
          </div>
          <hr />
          <div className="flex items-center gap-2 py-3">
            <div className="size-2 bg-primary rounded-xs shrink-0" />
            <span className="text-sm font-semibold whitespace-nowrap">
              Best for
            </span>
            <span className="text-sm text-gray-600">
              {main_section.best_for}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
