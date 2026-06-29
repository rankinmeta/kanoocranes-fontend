import HighlightedTitle from "@/components/common/highlight-title";
import { StrapiImage } from "@/components/common/strapi-image";
import Tag from "@/components/common/tag";
import { extractHighlightText } from "@/lib/utils";

const SalesCategorySection = () => {
    return (
        <section className="relative bg-secondary text-white">
            {/* Circles */}
            <div className="hidden lg:grid absolute top-12 right-0 grid-cols-5 gap-2 after:absolute after:inset-0 after:bg-linear-to-r after:from-transparent after:to-secondary after:z-10">
                {Array(10)
                    .fill(0)
                    .map((_, i) => (
                        <div
                            key={i}
                            className="size-14 bg-[#03297a] rounded-full"
                        ></div>
                    ))}
            </div>

            <div className="relative z-10 container container-padding-x py-10 md:py-16 lg:py-20">
                <div className="space-y-2">
                    <Tag className="bg-white">Sales categories</Tag>
                    <HighlightedTitle
                        title="Explore our crane categories"
                        highlights={extractHighlightText(
                            "Explore our crane categories"
                        )}
                    />
                </div>
                <div className="grid lg:grid-cols-2 gap-3 mt-10">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </section>
    );
};

export default SalesCategorySection;

function Card() {
    return (
        <div className="bg-[#041D54] p-6 rounded-md flex flex-col md:flex-row md:items-center gap-5 text-white">
            <StrapiImage
                src="http://localhost:3000/local/unit2.webp"
                alt="Crane"
                width={200}
                height={200}
                className="size-40 shrink-0 rounded-full object-cover"
            />
            <div className="space-y-2">
                <h4 className="text-lg font-manrope">Tower Cranes</h4>
                <p className="text-sm">
                    Engineered for high-rise developments, commercial
                    construction, and infrastructure projects requiring maximum
                    height and reach.
                </p>
            </div>
        </div>
    );
}
