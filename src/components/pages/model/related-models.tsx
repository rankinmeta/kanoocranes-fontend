import HighlightedTitle from "@/components/common/highlight-title";
import { StrapiImage } from "@/components/common/strapi-image";
import Tag from "@/components/common/tag";
import { Button } from "@/components/ui/button";
import { extractHighlightText, getImage } from "@/lib/utils";
import { MediaProps, TagTitleProps } from "@/type";
import Link from "next/link";

type RelatedModelsProps = {
    tag_title: TagTitleProps;
    models: {
        id: number;
        model_name: string;
        model_slug: string;
        main_section: {
            model_short_name: string;
            crane_capacity: number;
            max_working_radius: number;
            max_lifting_height: number;
            listingType: string;
            images: MediaProps[];
        };
    }[];
}

const RelatedModels = ({ tag_title, models}: RelatedModelsProps) => {
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
            <div className="flex w-full md:grid grid-cols-2 lg:grid-cols-4 gap-5 overflow-x-scroll scrollbar-none">
                {models.map((model) => (
                    <Card key={model.id} {...model} />
                ))}
            </div>
        </section>
    );
};

export default RelatedModels;

function Card({ model_name, model_slug, main_section }: RelatedModelsProps['models'][number]) {
    if (!model_name || !model_slug || !main_section) return null;

    return (
        <div className="shrink-0 w-[80%] md:w-auto mt-7 md:mt-10">
            <div className="bg-[#F5F5F5] rounded-md flex items-center justify-center p-5 overflow-hidden">
                <StrapiImage
                    src={getImage({
                        local: "http://localhost:3000/local/crane2.png",
                        prod: main_section.images[0].url,
                    })}
                    alt={main_section.images[0].alternativeText || "crane image"}
                    width={200}
                    height={200}
                    className="hover:scale-110 transition-transform duration-300"
                />
            </div>

            <h3 className="text-lg font-medium mt-5 mb-2">
                {main_section.model_short_name}
            </h3>
            <div>
                <div className="flex items-center gap-2 py-3">
                    <div className="size-2 bg-primary rounded-xs shrink-0" />
                    <span className="text-sm font-semibold">
                        Crane capacity
                    </span>
                    <span className="text-sm text-gray-600">{main_section.crane_capacity} Ton</span>
                </div>
                <hr />
                <div className="flex items-center gap-2 py-3">
                    <div className="size-2 bg-primary rounded-xs shrink-0" />
                    <span className="text-sm font-semibold">
                        Max. working radius
                    </span>
                    <span className="text-sm text-gray-600">{main_section.max_working_radius}m</span>
                </div>
                <hr />
                <div className="flex items-center gap-2 py-3">
                    <div className="size-2 bg-primary rounded-xs shrink-0" />
                    <span className="text-sm font-semibold">
                        Max. lifting height
                    </span>
                    <span className="text-sm text-gray-600">{main_section.max_lifting_height}m</span>
                </div>

                <div className="space-x-3 mt-2">
                    <Link href={`/models/${model_slug}`} target="_blank">
                        <Button className="w-full">View Details</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
