import HighlightedTitle from "@/components/common/highlight-title";
import { StrapiImage } from "@/components/common/strapi-image";
import Tag from "@/components/common/tag";
import { Button } from "@/components/ui/button";
import { extractHighlightText } from "@/lib/utils";
import Link from "next/link";

const FeaturedModelsSection = () => {
    return (
        <section className="container container-padding-x py-10 md:py-16 lg:py-20">
            <div className="flex items-end justify-between">
                <div className="space-y-3">
                    <Tag>Featured models</Tag>
                    <HighlightedTitle
                        title="High-performance <b>crane models</b>"
                        highlights={extractHighlightText(
                            "High-performance <b>crane models</b>"
                        )}
                        className="max-w-xl"
                    />
                </div>

                <Link href="/models" className="hidden md:block">
                <Button className="bg-white text-secondary border-secondary hover:bg-secondary hover:text-white">
                    View more
                </Button>
                </Link>
            </div>

            <div className="flex lg:grid lg:grid-cols-4 gap-3 overflow-x-scroll scrollbar-none">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>

<Link href="/models" className="md:hidden">
            <Button className="w-full mt-7 bg-white text-secondary border-secondary hover:bg-secondary hover:text-white">
                    View more
                </Button>
</Link>
        </section>
    );
};

export default FeaturedModelsSection;

function Card() {
    return (
        <div className="w-[80%] md:w-auto shrink-0 mt-10 pb-1">
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
                    <Button>Buy crane</Button>
                    <Button className="bg-white text-secondary border-secondary hover:bg-secondary hover:text-white">
                        Rent crane
                    </Button>
                </div>
            </div>
        </div>
    );
}
