import HighlightedTitle from "@/components/common/highlight-title";
import Tag from "@/components/common/tag";
import { extractHighlightText } from "@/lib/utils";
import { LinkProps, MediaProps, TagTitleProps } from "@/type";
import { ProjectsCarousel } from "@/components/carousel/projects";

type FeaturedProjectsSectionProps = {
  id: number;
  tag_title: TagTitleProps;
  description: string;
  projects: {
    image: MediaProps;
    title: string;
    link: LinkProps | null;
    details:
      | {
          label: string;
          description: string;
        }[]
      | null;
  }[];
};

const FeaturedProjectsSection = ({
  tag_title,
  description,
  projects,
}: FeaturedProjectsSectionProps) => {
  if (!tag_title || !projects || projects.length === 0) return null;

  return (
    <section className="container container-padding-x py-10 md:py-16 lg:py-20 grid lg:grid-cols-2 gap-10">
      <div className="space-y-10">
        <div className="space-y-3">
          <Tag>{tag_title.tag}</Tag>
          <HighlightedTitle
            title={tag_title.title}
            highlights={extractHighlightText(tag_title.title)}
            className="max-w-md"
          />
          <p className="mt-7">{description}</p>
        </div>
      </div>
      <div>
        <ProjectsCarousel projects={projects} />
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
