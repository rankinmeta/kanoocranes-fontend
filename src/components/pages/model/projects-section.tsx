import HighlightedTitle from "@/components/common/highlight-title";
import { StrapiImage } from "@/components/common/strapi-image";
import Tag from "@/components/common/tag";
import { extractHighlightText, getImage } from "@/lib/utils";

const ProjectsSection = () => {
    return (
        <section className="container container-padding-x py-10 md:py-16 lg:py-20">
            <div className="space-y-2">
                <Tag>Projects</Tag>
                <HighlightedTitle
                    title="Projects using <b>this crane</b>"
                    highlights={extractHighlightText(
                        "Projects using <b>this crane</b>"
                    )}
                />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-7 md:mt-10">
                <Card />
                <Card />
                <Card />
            </div>
        </section>
    );
};

export default ProjectsSection;

function Card() {
    return (
        <div className="bg-[#f5f5f5] rounded-md p-4 space-y-4">
            <div className="flex items-center gap-3">
                <StrapiImage
                    src={getImage({
                        local: "http://localhost:3000/local/crane1.png",
                        prod: "",
                    })}
                    alt={"crane"}
                    width={100}
                    height={100}
                    className="rounded-sm aspect-[2/1.3] object-cover"
                />
                <h3 className="max-w-48 font-medium">
                    Downtown High-Rise Development, UAE
                </h3>
            </div>

            <ul className="space-y-3">
                <li className="space-y-2">
                    <div className="flex items-center gap-2">
                        <div className="size-2 bg-primary" />
                        <span>Solution</span>
                    </div>
                    <p className="text-[#414651] text-sm">
                        The JASO J560 was utilized for structural works,
                        concrete placement, and material handling across a
                        45-story mixed-use development.
                    </p>
                </li>
                <hr className="my-5 bg-[#D5D7DA]" />
                <li className="space-y-2">
                    <div className="flex items-center gap-2">
                        <div className="size-2 bg-primary" />
                        <span>Outcome</span>
                    </div>
                    <p className="text-[#414651] text-sm">
                        Accelerated construction progress through efficient
                        vertical transportation and reliable lifting
                        performance.
                    </p>
                </li>
            </ul>
        </div>
    );
}
