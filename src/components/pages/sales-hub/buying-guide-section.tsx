import HighlightedTitle from "@/components/common/highlight-title";
import Tag from "@/components/common/tag";
import { extractHighlightText } from "@/lib/utils";

const BuyingGuideSection = () => {
    return (
        <section className="relative bg-secondary text-white">
            {/* Circles */}
            <div className="hidden lg:grid absolute top-7 right-0 grid-cols-4 gap-2 after:absolute after:inset-0 after:bg-linear-to-r after:from-transparent after:to-secondary after:z-10">
                {Array(12)
                    .fill(0)
                    .map((_, i) => (
                        <div
                            key={i}
                            className="size-14 bg-[#03297a] rounded-full"
                        ></div>
                    ))}
            </div>
            <div className="relative container container-padding-x py-10 md:py-16 lg:py-20">
                <div className="space-y-2 sticky top-28">
                    <Tag>Buying guide</Tag>
                    <HighlightedTitle
                        title="Choose the right crane with confidence"
                        highlights={extractHighlightText(
                            "Choose the right crane with confidence"
                        )}
                        className="max-w-md"
                    />
                </div>

                <div className="mt-10">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </section>
    );
};

export default BuyingGuideSection;

function Card() {
    return (
        <div className="sticky top-64 flex flex-col md:flex-row gap-3 md:gap-0 border-t border-[#F5F5F5]/30 py-10 bg-secondary">
            <span className="flex-[20%] text-5xl font-manrope font-medium">
                01
            </span>
            <div className="flex-[30%]">
                <h4 className="text-lg font-manrope max-w-60 leading-5">
                    Define your lifting requirements
                </h4>
            </div>
            <p className="flex-1/2 text-sm">
                Identify the load capacity, lift height, and working radius
                needed for your typical operations. This forms the foundation of
                your crane selection.
            </p>
        </div>
    );
}
