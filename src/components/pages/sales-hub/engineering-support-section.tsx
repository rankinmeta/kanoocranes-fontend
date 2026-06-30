import HighlightedTitle from "@/components/common/highlight-title";
import { StrapiImage } from "@/components/common/strapi-image";
import Tag from "@/components/common/tag";
import Handshake from "@/components/icons/handshake";
import Support from "@/components/icons/support";
import Towing from "@/components/icons/towing";
import Wire from "@/components/icons/wire";
import { extractHighlightText } from "@/lib/utils";
import { type EngineeringSupportSectionProps } from "@/type";
import { type ReactNode } from "react";

const EngineeringSupportSection = ({
  description,
  details,
  image,
  tag_title,
}: EngineeringSupportSectionProps) => {
  if (!description || !details || !image || !tag_title) return null;

  return (
    <section className="bg-[#F5F5F5]">
      <div className="container container-padding-x py-10 md:py-16 lg:py-20 grid md:grid-cols-2 gap-5">
        <div className="flex flex-col space-y-3">
          <Tag>{tag_title.tag}</Tag>
          <HighlightedTitle
            title={tag_title.title}
            highlights={extractHighlightText(tag_title.title)}
            className="max-w-md"
          />
          <p className="text-[#414651]">{description}</p>

          <StrapiImage
            src={image.url}
            alt={image.alternativeText || ""}
            width={500}
            height={500}
            className="md:hidden mt-5 h-full rounded-md object-cover"
          />

          <div className="grid md:grid-cols-2 gap-3 mt-5 md:mt-10">
            <Card icon={<Handshake />} title={details[0]?.label} />
            <Card icon={<Towing />} title={details[1]?.label} />
            <Card icon={<Wire />} title={details[2]?.label} />
            <Card icon={<Support />} title={details[3]?.label} />
          </div>
        </div>

        <StrapiImage
          src={image.url}
          alt={image.alternativeText || ""}
          width={500}
          height={500}
          className="hidden md:block h-full rounded-md object-cover justify-self-end"
        />
      </div>
    </section>
  );
};

export default EngineeringSupportSection;

function Card({ icon, title }: { icon: ReactNode; title: string }) {
  return (
    <div className="flex md:flex-col gap-3 md:gap-2 bg-white rounded-md p-5">
      {icon}
      <h5 className="font-manrope font-medium">{title}</h5>
    </div>
  );
}
