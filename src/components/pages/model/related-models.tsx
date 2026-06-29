import HighlightedTitle from "@/components/common/highlight-title";
import { StrapiImage } from "@/components/common/strapi-image";
import Tag from "@/components/common/tag";
import { Button } from "@/components/ui/button";
import { extractHighlightText } from "@/lib/utils";

const RelatedModels = () => {
    return (
        <section className="container container-padding-x py-10 md:py-16 lg:py-20">
            <div className="space-y-2">
                <Tag>Related models</Tag>
                <HighlightedTitle
                    title="Similar <b>crane models</b>"
                    highlights={extractHighlightText(
                        "Similar <b>crane models</b>"
                    )}
                />
            </div>
            <div className="flex w-full md:grid grid-cols-2 lg:grid-cols-4 gap-5 overflow-x-scroll scrollbar-none">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </section>
    );
};

export default RelatedModels;

function Card() {
    return (
        <div className="shrink-0 w-[80%] md:w-auto mt-7 md:mt-10">
            <div className="bg-[#F5F5F5] rounded-md flex items-center justify-center p-5 overflow-hidden">
                <StrapiImage
                    src="http://localhost:3000/local/crane2.png"
                    alt="crane"
                    width={200}
                    height={200}
                    className="hover:scale-110 transition-transform duration-300"
                />
            </div>

            <h3 className="text-lg font-medium mt-5 mb-2">
                JASO Flat-Top Tower Crane
            </h3>
            <div>
                <div className="flex items-center gap-2 py-3">
                    <div className="size-2 bg-primary rounded-xs shrink-0" />
                    <span className="text-sm font-semibold">
                        Crane capacity
                    </span>
                    <span className="text-sm text-gray-600">3.83 Ton</span>
                </div>
                <hr />
                <div className="flex items-center gap-2 py-3">
                    <div className="size-2 bg-primary rounded-xs shrink-0" />
                    <span className="text-sm font-semibold">
                        Max. working radius
                    </span>
                    <span className="text-sm text-gray-600">16m</span>
                </div>
                <hr />
                <div className="flex items-center gap-2 py-3">
                    <div className="size-2 bg-primary rounded-xs shrink-0" />
                    <span className="text-sm font-semibold">
                        Max. lifting height
                    </span>
                    <span className="text-sm text-gray-600">16.8m</span>
                </div>

                <div className="space-x-3 mt-2">
                    <Button className="w-full">View Details</Button>
                </div>
            </div>
        </div>
    );
}
