import HighlightedTitle from "@/components/common/highlight-title";
import Tag from "@/components/common/tag";
import { extractHighlightText } from "@/lib/utils";
import UnitCard from "./unit-card";
import { BusinessUnitSectionProps } from "@/type";

const BusinessUnitSection = ({
    tag_title,
    details
}: BusinessUnitSectionProps) => {
    if(!tag_title || !details) return null;

    return (
        <section className="container container-padding-x py-10 md:py-16 lg:py-20 flex flex-col justify-center items-center gap-10">
            <div className="flex flex-col justify-center md:items-center gap-2.5">
                <Tag>{tag_title.tag}</Tag>
                <HighlightedTitle
                    title={tag_title.title}
                    highlights={extractHighlightText(
                        tag_title.title
                    )}
                />
            </div>

            <UnitCard units={details} />
        </section>
    );
};

export default BusinessUnitSection;
