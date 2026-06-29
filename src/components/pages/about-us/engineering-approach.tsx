import HighlightedTitle from "@/components/common/highlight-title";
import { StrapiImage } from "@/components/common/strapi-image";
import Tag from "@/components/common/tag";
import { cn, extractHighlightText } from "@/lib/utils";
import { MediaProps, TagTitleProps } from "@/type";

type EngineeringApproachProps = {
    id: number;
    tag_title: TagTitleProps;
    description: string;
    details: {
        id: number;
        title: string;
        description: string;
        icon: MediaProps | null;
    }[];
}

const EngineeringApproach = ({
    description,
    details,
    tag_title
}: EngineeringApproachProps) => {
    if(!tag_title || !details) return null;

    return (
        <section className="relative bg-secondary text-white">
            {/* Circles */}
            <div className="hidden lg:grid absolute top-12 right-0 grid-cols-6 gap-2 after:absolute after:inset-0 after:bg-linear-to-r after:from-transparent after:to-secondary after:z-10">
                {Array(18)
                    .fill(0)
                    .map((_, i) => (
                        <div
                            key={i}
                            className="size-12 bg-[#03297a] rounded-full"
                        ></div>
                    ))}
            </div>

            <div className="container container-padding-x py-10 md:py-16 lg:py-20">
                <div className="space-y-2.5">
                    <Tag className="bg-white">{tag_title.tag}</Tag>
                    <HighlightedTitle
                        title={tag_title.title}
                        highlights={extractHighlightText(
                            tag_title.title
                        )}
                    />
                    <p className="max-w-3xl font-light">
                        {description}
                    </p>
                </div>

                <div className="flex lg:grid grid-cols-3 gap-5 mt-16 lg:mt-32 overflow-x-scroll lg:overflow-visible scrollbar-none">
                    {details?.length > 0 &&
                        details.map((detail, i) => (
                            <FeatureCard
                                title={detail.title}
                                description={detail.description}
                                icon={detail.icon}
                                key={detail.id}
                                index={i}
                            />
                        ))}
                    
                </div>
            </div>
        </section>
    );
};

export default EngineeringApproach;

function FeatureCard({
    title,
    description,
        icon,
    index,
}: {
    title: string;
    description: string;
    index: number;
    icon: MediaProps | null;
}) {
    if(!title || !description) return null;

    return (
        <div
            className={cn(
                "shrink-0 w-[80%] md:w-1/2 lg:w-auto relative bg-[#041D54] p-6 flex flex-col justify-between rounded-md aspect-square lg:aspect-[1/0.8]",
                {
                    "lg:-top-8": index === 1,
                    "lg:-top-16": index === 0,
                }
            )}
        >
            {icon && <StrapiImage
                src={icon.url}
                alt={icon.alternativeText || "icon"}
                width={56}
                height={56}
            />}

            <div className="space-y-2">
                <h6 className="text-xl font-manrope font-medium">{title}</h6>
                <p className="text-sm font-light">{description}</p>
            </div>
        </div>
    );
}
