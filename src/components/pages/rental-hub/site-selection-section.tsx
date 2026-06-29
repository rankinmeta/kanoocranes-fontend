import HighlightedTitle from "@/components/common/highlight-title";
import Tag from "@/components/common/tag";
import { extractHighlightText } from "@/lib/utils";
import DetailsSection from "./details-section";
import DetailsSectionSM from "./details-section-sm";

const SiteSelectionSection = () => {
    return (
        <section className="relative bg-[#F5F5F5] py-10 md:py-16 lg:py-20">
            {/* Circles */}
            <div className="hidden lg:grid absolute top-12 right-0 grid-cols-6 gap-2 after:absolute after:inset-0 after:bg-linear-to-r after:from-transparent after:to-[#f5f5f5] after:z-10">
                {Array(18)
                    .fill(0)
                    .map((_, i) => (
                        <div
                            key={i}
                            className="size-12 bg-white rounded-full"
                        ></div>
                    ))}
            </div>

            <div className="container container-padding-x">
                <div className="space-y-2.5">
                    <Tag>Site selection</Tag>
                    <HighlightedTitle
                        title="Choose equipment <b>by application</b>"
                        highlights={extractHighlightText(
                            "Choose equipment <b>by application</b>"
                        )}
                    />
                    <p className="text-[#414651] text-sm max-w-lg">
                        From installation to long-term maintenance, our
                        engineering team provides the expertise and technical
                        guidance needed to maximize
                    </p>
                </div>

                <DetailsSection />
                <DetailsSectionSM />
            </div>
        </section>
    );
};

export default SiteSelectionSection;
