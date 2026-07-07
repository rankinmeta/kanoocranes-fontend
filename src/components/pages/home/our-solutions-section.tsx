import HighlightedTitle from "@/components/common/highlight-title";
import { StrapiImage } from "@/components/common/strapi-image";
import Tag from "@/components/common/tag";
import { Button } from "@/components/ui/button";
import { extractHighlightText } from "@/lib/utils";
import { LinkProps, MediaProps, TagTitleProps } from "@/type";
import Link from "next/link";

type OurSolutionsSectionProps = {
    id: number;
    tag_title: TagTitleProps;
    our_solutions_card: {
        id: number;
        image: MediaProps;
        link: LinkProps | null;
        title: string;
        description: string;
    }[]
};

const OurSolutionsSection = ({tag_title,our_solutions_card}: OurSolutionsSectionProps) => {
    if (!tag_title || !our_solutions_card) return null;

    return (
        <section className="bg-secondary relative">
            {/* Circles */}
            <div className="absolute right-5 top-10 hidden md:grid grid-cols-4 gap-2 gap-y-3 after:bg-linear-to-r after:from-transparent after:to-secondary after:absolute after:inset-0">
                {Array(12)
                    .fill(0)
                    .map((_, i) => (
                        <div
                            key={i}
                            className="size-14 bg-[#03297a] rounded-full"
                        ></div>
                    ))}
            </div>

            <div className="container container-padding-x py-10 md:py-16 lg:py-20 text-white">
                <div className="space-y-2 mb-10 md:mb-20">
                    <Tag className="bg-white">{tag_title.tag}</Tag>
                    <HighlightedTitle
                        title={tag_title.title}
                        highlights={extractHighlightText(
                            tag_title.title,
                        )}
                        className="max-w-lg"
                    />
                </div>

                <div className="relative">
                    {our_solutions_card.map((card) => (
                        <Card key={card.id} {...card} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurSolutionsSection;

function Card({title, description, image, link}: OurSolutionsSectionProps["our_solutions_card"][0]) {
    if (!title || !description || !image) return null;

    return (
        <div className="sticky top-[15%] border-t border-[#F5F5F5]/30 py-12 grid md:grid-cols-3 gap-2 bg-secondary">
            <div className="md:col-span-2 flex flex-col md:flex-row justify-between">
                <h4 className="text-2xl font-manrope flex-1">{title}</h4>
                <div className="space-y-5 md:mx-auto mt-3 md:mt-0 flex-[1.3]">
                    <p className="tracking-wide max-w-sm">
                        {description}
                    </p>
                    {link && <Link href={link.href} target={link.isExternal ? "_blank": "_self"}><Button className="bg-white text-primary hover:text-white hover:bg-primary">
                        {link.label}
                    </Button></Link>}
                </div>
            </div>
            <div className="overflow-hidden rounded-md mt-5 md:mt-0">
                <StrapiImage
                    src={image.url}
                    alt={image.alternativeText || ""}
                    width={500}
                    height={300}
                    className="rounded-md aspect-[2/1.3] object-cover hover:scale-110 transition-transform duration-300"
                />
            </div>
        </div>
    );
}
