import HighlightedTitle from "@/components/common/highlight-title";
import { StrapiImage } from "@/components/common/strapi-image";
import Tag from "@/components/common/tag";
import { extractHighlightText } from "@/lib/utils";
import React from "react";

const ProcurementSection = () => {
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

            <div className="relative z-10 container container-padding-x py-10 md:py-16 lg:py-20 grid md:grid-cols-5 gap-5 items-center">
                <StrapiImage
                    src="http://localhost:3000/local/unit3.webp"
                    alt="worker"
                    width={400}
                    height={400}
                    className="hidden md:block aspect-[1/0.7] col-span-2 rounded-md object-cover"
                />

                <div className="md:col-span-3">
                    <div className="space-y-2.5">
                        <Tag className="bg-white">Procurement Perspective</Tag>
                        <HighlightedTitle
                            title="A smart investment for long-term projects"
                            highlights={extractHighlightText(
                                "A smart investment for long-term projects"
                            )}
                            className="max-w-md"
                        />
                        <StrapiImage
                    src="http://localhost:3000/local/unit3.webp"
                    alt="worker"
                    width={400}
                    height={400}
                    className="md:hidden my-5 aspect-[1/0.7] rounded-md object-cover"
                />
                        <p className="max-w-xl mt-5">
                            The JASO J560 delivers strong operational value
                            through reliability, reduced downtime, and efficient
                            site coverage. Its versatility allows contractors to
                            support multiple project types while maximizing
                            equipment utilization and long-term return on
                            investment.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcurementSection;
