import HighlightedTitle from "@/components/common/highlight-title";
import { StrapiImage } from "@/components/common/strapi-image";
import Tag from "@/components/common/tag";
import { cn } from "@/lib/utils";
import { ArrowRight, Mail, Phone } from "lucide-react";
import Link from "next/link";

const ExpertsSection = ({theme = "dark"}: {theme?: "dark" | "light"}) => {
    return (
        <section className={cn("relative bg-secondary py-10 md:py-16 lg:py-20 text-white", theme === "light" && "bg-white text-black")}>
            {/* Circles */}
            <div className={cn("absolute right-5 top-10 grid-cols-4 gap-2 gap-y-3 after:bg-linear-to-r after:from-transparent after:to-secondary after:absolute after:inset-0", theme === "light" ? "hidden" : "hidden lg:grid")}>
                {Array(8)
                    .fill(0)
                    .map((_, i) => (
                        <div
                            key={i}
                            className="size-14 bg-[#03297a] rounded-full"
                        ></div>
                    ))}
            </div>

            <div className="container container-padding-x flex flex-col items-center justify-center">
                <div className="flex flex-col justify-center md:items-center md:text-center gap-3">
                    <Tag className={cn("bg-white", theme === "light" && "bg-primary")}>Meet our experts</Tag>
                    <HighlightedTitle
                        title="Need expert crane consultation?"
                        highlights={["Need expert crane consultation?"]}
                        className={cn("max-w-xl", theme === "dark" && "[&>span]:text-white!")}
                    />
                    <p className="max-w-xl text-sm">
                        Speak with our specialists to find the right crane
                        solution for your project requirements, site conditions,
                        and lifting challenges.
                    </p>
                </div>

                <div className="flex w-full lg:grid grid-cols-4 gap-4 mt-8 lg:mt-16 overflow-x-scroll scrollbar-none">
                    <Card theme={theme} />
                    <Card theme={theme} />
                    <Card theme={theme} />
                    <Card theme={theme} />
                </div>
            </div>
        </section>
    );
};

export default ExpertsSection;

function Card({theme = "dark"}: {theme?: "dark" | "light"}) {
    return (
        <div className={cn("bg-[#041D54] w-[90%] shrink-0 md:w-auto p-6 flex flex-col gap-4 rounded-xl border-b-2 border-transparent hover:border-primary transition-colors duration-300", theme === "light" && "bg-[#f5f5f5] hover:border-white")}>
            <StrapiImage
                src="http://localhost:3000/local/expert1.png"
                alt="expert"
                width={100}
                height={100}
                className="rounded-full object-cover size-12"
            />

            <div className="flex flex-col">
                <span>Ahmed Rahman</span>
                <span className="text-xs text-[#A4A7AE]">
                    Senior Crane Operations Manager
                </span>
            </div>

            <div className="text-xs space-y-1">
                <span className="flex gap-2 items-center">
                    <Phone size={16} className="shrink-0" /> +971 50 482 7612
                </span>
                <span className="flex gap-2 items-center">
                    <Mail size={16} className="shrink-0" />{" "}
                    ahmed.rahman@kanoocranes.com
                </span>
            </div>

            <Link
                href="#"
                className={cn("text-primary flex items-center gap-2 text-sm", theme === "light" && "text-secondary")}
            >
                Schedule call <ArrowRight />
            </Link>
        </div>
    );
}
