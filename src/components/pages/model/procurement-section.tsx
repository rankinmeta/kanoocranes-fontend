import HighlightedTitle from "@/components/common/highlight-title";
import { StrapiImage } from "@/components/common/strapi-image";
import Tag from "@/components/common/tag";
import { extractHighlightText } from "@/lib/utils";
import type { MediaProps, TagTitleProps } from "@/type";

type Props = {
  id: number;
  description: string;
  tag_title: TagTitleProps;
  image: MediaProps;
};

const ProcurementSection = ({ description, image, tag_title }: Props) => {
  if (!description || !image || !tag_title) return null;

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

      <div className="relative z-10 container container-padding-x py-10 md:py-16 lg:py-20 grid md:grid-cols-5 gap-5 items-center">
        <StrapiImage
          src={image.url}
          alt={image.alternativeText || ""}
          width={400}
          height={400}
          className="hidden md:block aspect-[1/0.7] col-span-2 rounded-md object-cover"
        />

        <div className="md:col-span-3">
          <div className="space-y-2.5">
            <Tag className="bg-white">{tag_title.tag}</Tag>
            <HighlightedTitle
              title={tag_title.title}
              highlights={extractHighlightText(tag_title.title)}
              className="max-w-md"
            />
            <StrapiImage
              src={image.url}
              alt={image.alternativeText || ""}
              width={400}
              height={400}
              className="md:hidden my-5 aspect-[1/0.7] rounded-md object-cover"
            />
            <p className="max-w-xl mt-5">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcurementSection;
