import HighlightedTitle from "@/components/common/highlight-title";
import Tag from "@/components/common/tag";
import { Button } from "@/components/ui/button";
import { extractHighlightText } from "@/lib/utils";

const DownloadsSection = () => {
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

            <div className="container container-padding-x py-10 md:py-16 lg:py-20">
                <div className="space-y-2">
                    <Tag>Downloads</Tag>
                    <HighlightedTitle
                        title="Technical Resources Available"
                        highlights={extractHighlightText(
                            "Technical Resources Available"
                        )}
                    />
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-5 lg:mt-10">
                    <div className="p-5 bg-[#041D54] flex flex-col rounded-md">
                        <h6 className="text-xl font-manrope">CAD drawings</h6>
                        <p className="text-sm text-[#A4A7AE] mt-2">
                            Detailed engineering drawings for planning and
                            coordination.
                        </p>

                        <Button className="bg-white text-primary w-fit mt-16 hover:text-white">
                            Download
                        </Button>
                    </div>
                    <div className="p-5 bg-[#041D54] flex flex-col rounded-md">
                        <h6 className="text-xl font-manrope">CAD drawings</h6>
                        <p className="text-sm text-[#A4A7AE] mt-2">
                            Detailed engineering drawings for planning and
                            coordination.
                        </p>

                        <Button className="bg-white text-primary w-fit mt-16 hover:text-white">
                            Download
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DownloadsSection;
