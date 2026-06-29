import HighlightedTitle from "@/components/common/highlight-title";
import { StrapiImage } from "@/components/common/strapi-image";
import Tag from "@/components/common/tag";
import { Button } from "@/components/ui/button";
import { extractHighlightText } from "@/lib/utils";

const OurSolutionsSection = () => {
    return (
        <section className="bg-secondary relative">
            {/* Circles */}
            <div className="absolute right-5 top-10 hidden md:grid grid-cols-4 gap-2 gap-y-3 after:bg-linear-to-r after:from-transparent after:to-secondary after:absolute after:inset-0">
                {Array(12)
                    .fill(0)
                    .map((_, i) => (
                        <div
                            key={i}
                            className="size-14 bg-[#03297a] rounded-full"
                        ></div>
                    ))}
            </div>

            <div className="container container-padding-x py-10 md:py-16 lg:py-20 text-white">
                <div className="space-y-2 mb-10 md:mb-20">
                    <Tag className="bg-white">Our solutions</Tag>
                    <HighlightedTitle
                        title="Engineered lifting solutions for every projects"
                        highlights={extractHighlightText(
                            "Engineered lifting solutions for every projects"
                        )}
                        className="max-w-lg"
                    />
                </div>

                <div className="relative">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </section>
    );
};

export default OurSolutionsSection;

function Card() {
    return (
        <div className="sticky top-[15%] border-t border-[#F5F5F5]/30 py-12 grid md:grid-cols-3 gap-2 bg-secondary">
            <div className="md:col-span-2 flex flex-col md:flex-row justify-between">
                <h4 className="text-2xl font-manrope">Tower crane rental</h4>
                <div className="space-y-5 md:mx-auto mt-3 md:mt-0">
                    <p className="tracking-wide max-w-sm">
                        We provide advanced tower crane solutions for
                        large-scale construction projects. With high load
                        capacity, stability, and efficient coverage, our cranes
                        ensure smooth and safe vertical lifting operations
                    </p>
                    <Button className="bg-white text-primary hover:text-white hover:bg-primary">
                        Know more
                    </Button>
                </div>
            </div>
            <div className="overflow-hidden rounded-md mt-5 md:mt-0">
                <StrapiImage
                    src="http://localhost:3000/local/crane1.png"
                    alt="crane"
                    width={500}
                    height={300}
                    className="rounded-md aspect-[2/1.3] object-cover hover:scale-110 transition-transform duration-300"
                />
            </div>
        </div>
    );
}
