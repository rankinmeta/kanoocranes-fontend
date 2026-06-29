import HighlightedTitle from "@/components/common/highlight-title";
import Tag from "@/components/common/tag";
import { extractHighlightText } from "@/lib/utils";
import { MediaProps, TagTitleProps } from "@/type";

type ExpertiseSectionProps = {
    tag_title: TagTitleProps;
    description: string;
    details: {
        id: number;
        label: string;
        description: string;
        icon: MediaProps | null;
    }[]
}

const ExpertiseAndCapabilitySection = ({
    description,
    details,
    tag_title
}: ExpertiseSectionProps) => {
    if(!tag_title || !details) return null;

    return (
        <section className="bg-[#F5F5F5]">
            <div className="container container-padding-x py-10 md:py-16 lg:py-20 grid md:grid-cols-5 gap-5">
                <div className="md:col-span-3 space-y-2">
                    <Tag>{tag_title.tag}</Tag>
                    <HighlightedTitle
                        title={ tag_title.title}
                        highlights={extractHighlightText(
                            tag_title.title
                        )}
                        className="max-w-sm"
                    />
                    <p className="text-[#414651] max-w-152 mt-4">
                        {description}
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-4 md:col-span-2">
                    {details.map((detail) => (
                        <Card key={detail.id} {...detail} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExpertiseAndCapabilitySection;

function Card({description, label}: ExpertiseSectionProps["details"][0]) {
    return (
        <div className="bg-white rounded-md p-7 flex flex-col">
            <span className="text-primary text-2xl font-manrope font-bold">
                {label}
            </span>
            <span className="text-sm font-medium">{description}</span>
        </div>
    );
}
