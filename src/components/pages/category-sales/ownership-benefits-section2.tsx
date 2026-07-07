import HighlightedTitle from "@/components/common/highlight-title";
import Tag from "@/components/common/tag";
import { extractHighlightText } from "@/lib/utils";
import { TagTitleProps } from "@/type";

type Props = {
    tag_title: TagTitleProps;
    description: string;
    points: {
        id: number;
        label: string;
    }[];
}

const OwnershipBenefitsSection2 = ({tag_title, description,points}: Props) => {
    if (!tag_title || !description || !points) return null;

    return (
        <section className="bg-[#f5f5f5]">
            <div className="container container-padding-x py-10 md:py-20 grid md:grid-cols-2 gap-5">
                <div className="space-y-2.5">
                    <Tag>{tag_title.tag}</Tag>
                    <HighlightedTitle
                        title={tag_title.title}
                        highlights={extractHighlightText(
                            tag_title.title
                        )}
                        className="max-w-sm"
                    />
                    <p className="text-[#414651] max-w-lg">
                        {description}
                    </p>
                </div>

                <div className="bg-white rounded-md p-5">
                    <span className="font-manrope text-lg font-medium">
                        Benefits
                    </span>
                    <ul className="mt-2 space-y-1">
                        {points.map((point) => (
                            <li key={point.id} className="flex items-center gap-2">
                                <div className="size-2 bg-primary" />
                                <span>{point.label}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default OwnershipBenefitsSection2;
