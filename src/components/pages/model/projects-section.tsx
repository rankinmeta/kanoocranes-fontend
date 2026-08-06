import HighlightedTitle from "@/components/common/highlight-title";
import { StrapiImage } from "@/components/common/strapi-image";
import Tag from "@/components/common/tag";
import { extractHighlightText, getImage } from "@/lib/utils";
import { MediaProps, TagTitleProps } from "@/type";

type ProjectsSectionProps = {
    tag_title: TagTitleProps;
    projects: {
        id: number;
        title: string;
        solution: string;
        outcome: string;
        image: MediaProps;
    }[];
}

const ProjectsSection = ({ tag_title, projects}: ProjectsSectionProps) => {
    if (!tag_title || !projects || projects.length === 0) return null;

    return (
        <section className="container container-padding-x py-10 md:py-16 lg:py-20">
            <div className="space-y-2">
                <Tag>{tag_title.tag}</Tag>
                <HighlightedTitle
                    title={tag_title.title}
                    highlights={extractHighlightText(
                        tag_title.title
                    )}
                />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-7 md:mt-10">
                {projects.map((project) => (
                    <Card key={project.id} {...project} />
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;

function Card({ title, solution, outcome, image }: ProjectsSectionProps['projects'][number]) {
    if (!title || !image) return null;

    return (
        <div className="bg-[#f5f5f5] rounded-md p-4 space-y-4">
            <div className="flex items-center gap-3">
                <StrapiImage
                    src={getImage({
                        local: "http://localhost:3000/local/crane1.png",
                        prod: image.url,
                    })}
                    alt={image.alternativeText || "project image"}
                    width={100}
                    height={100}
                    className="rounded-sm aspect-[2/1.3] object-cover"
                />
                <h3 className="max-w-48 font-medium">
                    {title}
                </h3>
            </div>

            <ul className="space-y-3">
                <li className="space-y-2">
                    <div className="flex items-center gap-2">
                        <div className="size-2 bg-primary" />
                        <span>Solution</span>
                    </div>
                    <p className="text-[#414651] text-sm">
                        {solution}
                    </p>
                </li>
                <hr className="my-5 bg-[#D5D7DA]" />
                <li className="space-y-2">
                    <div className="flex items-center gap-2">
                        <div className="size-2 bg-primary" />
                        <span>Outcome</span>
                    </div>
                    <p className="text-[#414651] text-sm">
                        {outcome}
                    </p>
                </li>
            </ul>
        </div>
    );
}
