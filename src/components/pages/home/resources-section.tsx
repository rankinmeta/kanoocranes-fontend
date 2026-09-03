import HighlightedTitle from "@/components/common/highlight-title";
import Tag from "@/components/common/tag";
import { Button } from "@/components/ui/button";
import { extractHighlightText } from "@/lib/utils";
import ResourceCard from "../resource-hub/resource-card";
import Link from "next/link";
import type { MediaProps, TagTitleProps } from "@/type";

type ResourcesSectionProps = {
  tag_title: TagTitleProps;
  resources: {
    id: number;
    documentId: string;
    title: string;
    slug: string;
    date: string;
    image: MediaProps;
    resource_type: {
      id: number;
      type: string;
      slug: string;
    };
  }[];
};

const ResourcesSection = ({ tag_title, resources }: ResourcesSectionProps) => {
  if (!tag_title || !resources) return null;

  return (
    <section className="bg-[#F5F5F5]">
      <div className="container container-padding-x py-10 md:py-16 lg:py-20">
        <div className="flex justify-between items-end">
          <div className="space-y-3">
            <Tag>{tag_title.tag}</Tag>
            <HighlightedTitle
              title={tag_title.title}
              highlights={extractHighlightText(tag_title.title)}
              className="max-w-lg"
            />
          </div>
          <Link href={"/resource-hub"} className="hidden md:block">
            <Button className="bg-transparent border-secondary text-secondary hover:bg-secondary hover:text-white">
              View all resources
            </Button>
          </Link>
        </div>

        <div className="flex lg:grid grid-cols-3 gap-5 mt-7 mb-5 md:mb-0 lg:mt-10 overflow-x-scroll scrollbar-none">
          {resources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>

        <Link href={"/resource-hub"} className="md:hidden">
          <Button className="w-full bg-transparent border-secondary text-secondary hover:bg-secondary hover:text-white">
            View all resources
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ResourcesSection;
