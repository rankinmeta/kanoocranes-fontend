import HighlightedTitle from "@/components/common/highlight-title";
import { StrapiImage } from "@/components/common/strapi-image";
import Tag from "@/components/common/tag";
import { extractHighlightText } from "@/lib/utils";

const OwnershipBenefitsSection = () => {
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

            <div className="relative z-10 container container-padding-x py-10 md:py-16 lg:py-20 grid md:grid-cols-5 gap-5">
                <StrapiImage
                    src="http://localhost:3000/local/unit3.webp"
                    alt="worker"
                    width={400}
                    height={400}
                    className="hidden md:block aspect-[1/0.7] md:col-span-2 rounded-md object-cover"
                />

                <div className="md:col-span-3">
                    <div className="space-y-2.5">
                        <Tag className="bg-white">Ownership benefits</Tag>
                        <HighlightedTitle
                            title="Why invest in your own crane fleet?"
                            highlights={extractHighlightText(
                                "Why invest in your own crane fleet?"
                            )}
                        />
                        <p className="max-w-xl">
                            Owning lifting equipment provides greater
                            operational flexibility, improved project planning,
                            and long-term financial advantages.
                        </p>
                    </div>

                    <StrapiImage
                    src="http://localhost:3000/local/unit3.webp"
                    alt="worker"
                    width={400}
                    height={400}
                    className="md:hidden mt-7 aspect-[1/0.7] rounded-md object-cover"
                />

                    <ul className="mt-5 space-y-1.5">
                        <li className="flex items-center gap-2">
                            <div className="size-2 bg-primary" />
                            <span className="text-sm">
                                Reduce long-term equipment rental costs
                            </span>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="size-2 bg-primary" />
                            <span className="text-sm">
                                Build valuable business assets
                            </span>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="size-2 bg-primary" />
                            <span className="text-sm">
                                Improve equipment availability
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default OwnershipBenefitsSection;
