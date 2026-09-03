import HighlightedTitle from "@/components/common/highlight-title";
import Tag from "@/components/common/tag";
import { Button } from "@/components/ui/button";
import { extractHighlightText } from "@/lib/utils";
import type { MediaProps, TagTitleProps } from "@/type";
import Link from "next/link";

type Props = {
  tag_title: TagTitleProps;
  resources: {
    id: number;
    title: string;
    description: string;
    resource: MediaProps;
  }[];
};

const DownloadsSection = ({ resources, tag_title }: Props) => {
  if (!tag_title || !resources) return null;

  return (
    <section className="relative bg-secondary text-white">
      {/* Circles */}
      <div className="hidden lg:grid absolute top-12 right-0 grid-cols-5 gap-2 after:absolute after:inset-0 after:bg-linear-to-r after:from-transparent after:to-secondary after:z-10">
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="size-14 bg-[#03297a] rounded-full"></div>
          ))}
      </div>

      <div className="container container-padding-x py-10 md:py-16 lg:py-20">
        <div className="space-y-2">
          <Tag>{tag_title.tag}</Tag>
          <HighlightedTitle
            title={tag_title.title}
            highlights={extractHighlightText(tag_title.title)}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-5 lg:mt-10">
          {resources.map((resource) => (
            <div
              className="p-5 bg-[#041D54] flex flex-col rounded-md"
              key={resource.id}
            >
              <h6 className="text-xl font-manrope">{resource.title}</h6>
              <p className="text-sm text-[#A4A7AE] mt-2">
                {resource.description}
              </p>

              <Link
                href={
                  process.env.NEXT_PUBLIC_STRAPI_API_URL + resource.resource.url
                }
                download={"Kanoo Crane.pdf"}
                target="_blank"
              >
                <Button className="bg-white text-primary w-fit mt-16 hover:text-white">
                  Download
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DownloadsSection;
