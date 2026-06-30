import HighlightedTitle from "@/components/common/highlight-title";
import Tag from "@/components/common/tag";
import { extractHighlightText } from "@/lib/utils";
import type { MediaProps, TagTitleProps } from "@/type";

type EngineeringServicesSectionProps = {
  id: number;
  tag_title: TagTitleProps;
  description: string;
  details: {
    id: number;
    label: string;
    description: string;
    icon: MediaProps | null;
  }[];
};

const EngineeringServicesSection = ({
  description,
  tag_title,
  details,
}: EngineeringServicesSectionProps) => {
  if (!description || !tag_title || !details) return null;

  return (
    <section className="relative bg-secondary text-white">
      {/* Circles */}
      <div className="hidden lg:grid absolute top-7 right-0 grid-cols-4 gap-2 after:absolute after:inset-0 after:bg-linear-to-r after:from-transparent after:to-secondary after:z-10">
        {Array(8)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="size-14 bg-[#03297a] rounded-full"></div>
          ))}
      </div>

      <div className="container container-padding-x py-10 md:py-20 flex flex-col justify-center items-center md:text-center">
        <div className="space-y-2 flex flex-col justify-center md:items-center">
          <Tag className="bg-white">{tag_title.tag}</Tag>
          <HighlightedTitle
            title={tag_title.title}
            highlights={extractHighlightText(tag_title.title)}
          />
          <p className="max-w-xl">{description}</p>
        </div>

        <div className="flex w-full lg:grid grid-cols-4 gap-4 mt-6 lg:mt-10 overflow-x-scroll scrollbar-none">
          {details.map((detail) => (
            <Card key={detail.id} {...detail} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringServicesSection;

function Card({
  description,
  label,
}: EngineeringServicesSectionProps["details"][0]) {
  return (
    <div className="w-[80%] md:w-1/2 lg:w-auto shrink-0 border border-white/10 p-6 flex flex-col gap-10 rounded-md text-left hover:bg-[#041D54]">
      <h4 className="font-manrope font-medium text-lg">{label}</h4>
      <p className="font-light">{description}</p>
    </div>
  );
}
