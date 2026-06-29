import HighlightedTitle from "@/components/common/highlight-title";
import { StrapiImage } from "@/components/common/strapi-image";
import { extractHighlightText } from "@/lib/utils";

const RecommendedCraneSection = () => {
    return (
        <div>
            <HighlightedTitle
                title="Recommended <b>cranes</b>"
                highlights={extractHighlightText("Recommended <b>cranes</b>")}
                className="md:text-3xl"
            />

            <div className="grid grid-cols-4 gap-3">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
};

export default RecommendedCraneSection;

function Card() {
    return (
        <div className="mt-10">
            <div className="bg-[#F5F5F5] rounded-md flex items-center justify-center p-5 overflow-hidden">
                <StrapiImage
                    src="http://localhost:3000/local/crane2.png"
                    alt="crane"
                    width={200}
                    height={200}
                    className="hover:scale-110 transition-transform duration-300"
                />
            </div>

            <h3 className="text-lg font-medium mt-5 mb-2">Maeda MC815C</h3>
            <div>
                <div className="flex items-center gap-2 py-3">
                    <div className="size-2 bg-primary rounded-xs shrink-0" />
                    <span className="text-sm font-semibold">Type</span>
                    <span className="text-sm text-gray-600">Spider Crane</span>
                </div>
                <hr />
                <div className="flex items-center gap-2 py-3">
                    <div className="size-2 bg-primary rounded-xs shrink-0" />
                    <span className="text-sm font-semibold">Best for</span>
                    <span className="text-sm text-gray-600">
                        Indoor lifting, restricted spaces
                    </span>
                </div>
            </div>
        </div>
    );
}
