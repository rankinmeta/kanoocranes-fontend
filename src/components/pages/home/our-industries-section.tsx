import HighlightedTitle from "@/components/common/highlight-title";
import { StrapiImage } from "@/components/common/strapi-image";
import Tag from "@/components/common/tag";
import { extractHighlightText } from "@/lib/utils";

const OurIndustriesSection = () => {
    return (
        <section className="container container-padding-x py-10 md:py-16 lg:py-20">
            <div className="space-y-3">
                <Tag>Our industries</Tag>
                <HighlightedTitle
                    title="Industries <b>we serve</b>"
                    highlights={extractHighlightText(
                        "Industries <b>we serve</b>"
                    )}
                    className="max-w-md"
                />
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-7 lg:mt-14">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </section>
    );
};

export default OurIndustriesSection;

function Card() {
    return (
        <div className="bg-[#F5F5F5] rounded-xl p-6">
            <StrapiImage
                src="http://localhost:3000/local/valve.png"
                alt="valve"
                width={45}
                height={45}
            />

            <h4 className="text-lg font-medium mt-4 mb-1">Oil & Gas</h4>

            <p className="text-[#717680] text-sm">
                Precision lifting for high-risk operations
            </p>
        </div>
    );
}
