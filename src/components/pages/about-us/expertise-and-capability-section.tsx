import HighlightedTitle from "@/components/common/highlight-title";
import Tag from "@/components/common/tag";
import { extractHighlightText } from "@/lib/utils";

const ExpertiseAndCapabilitySection = () => {
    return (
        <section className="bg-[#F5F5F5]">
            <div className="container container-padding-x py-10 md:py-16 lg:py-20 grid md:grid-cols-5 gap-5">
                <div className="md:col-span-3 space-y-2">
                    <Tag>Our expertise & capabilities</Tag>
                    <HighlightedTitle
                        title="Supporting complex <b>lifting operations</b>"
                        highlights={extractHighlightText(
                            "Supporting complex <b>lifting operations</b>"
                        )}
                        className="max-w-sm"
                    />
                    <p className="text-[#414651] max-w-152 mt-4">
                        With decades of industry experience and a highly skilled
                        team, Kanoo Cranes delivers reliable lifting solutions
                        across construction, infrastructure, industrial, and
                        energy sectors. Our expertise extends from routine crane
                        operations to complex engineered lifting projects,
                        helping clients achieve safe, efficient, and successful
                        project outcomes.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-4 md:col-span-2">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </section>
    );
};

export default ExpertiseAndCapabilitySection;

function Card() {
    return (
        <div className="bg-white rounded-md p-7 flex flex-col">
            <span className="text-primary text-2xl font-manrope font-bold">
                500+
            </span>
            <span className="text-sm font-medium">Projects Delivered</span>
        </div>
    );
}
