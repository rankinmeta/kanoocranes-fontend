import HighlightedTitle from "@/components/common/highlight-title";
import Tag from "@/components/common/tag";
import Automation from "@/components/icons/automation";
import Payments from "@/components/icons/payments";
import Verified from "@/components/icons/verified";
import { extractHighlightText } from "@/lib/utils";
import type { TagTitleProps } from "@/type";
import type { ReactNode } from "react";

type Section2Props = {
  tag_title: TagTitleProps;
  description: string;
  details: {
    id: number;
    label: string;
    description: string;
  }[];
};

const Section2 = ({ description, details, tag_title }: Section2Props) => {
  if (!tag_title || !details) return null;

  return (
    <section className="bg-[#F5F5F5]">
      <div className="container container-padding-x py-10 md:py-16 lg:py-20 grid md:grid-cols-4 gap-3">
        <div className="space-y-2 md:col-span-2">
          <Tag>{tag_title.tag}</Tag>
          <HighlightedTitle
            title={tag_title.title}
            highlights={extractHighlightText(tag_title.title)}
            className="max-w-md"
          />
        </div>
        <p className="col-span-2">{description}</p>

        {/* Cards */}
        <div className="flex md:grid grid-cols-2 lg:grid-cols-4 md:col-span-4 gap-3 mt-5 md:mt-10 overflow-x-scroll scrollbar-none">
          {details[0] && (
            <Card
              title={details[0].label}
              description={details[0].description}
              icon={<Automation />}
            />
          )}
          {details[1] && (
            <Card
              title={details[1].label}
              description={details[1].description}
              icon={<Payments />}
            />
          )}
          {details[2] && (
            <Card
              title={details[2].label}
              description={details[2].description}
              icon={<Verified />}
            />
          )}
          {details[3] && (
            <Card
              title={details[3].label}
              description={details[3].description}
              icon={<Automation />}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Section2;

function Card({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="shrink-0 w-[90%] md:w-auto bg-white rounded-md p-6 space-y-2">
      {icon}
      <h4 className="text-lg font-manrope font-medium mt-5 leading-6">
        {title}
      </h4>
      <p className="text-sm text-[#414651]">{description}</p>
    </div>
  );
}
