import HighlightedTitle from "@/components/common/highlight-title";
import { StrapiImage } from "@/components/common/strapi-image";
import Tag from "@/components/common/tag";
import { cn, extractHighlightText } from "@/lib/utils";

const StickyCardsOneSideSection = ({className, cardStyles}: {className?: string, cardStyles?: string}) => {
  return (
    <section className={cn("bg-[#F5F5F5]", className)}>
            <div className="relative container container-padding-x py-10 md:py-16 lg:py-20 grid md:grid-cols-2 gap-5">
                <div className="md:sticky top-28 self-start space-y-2.5">
                    <Tag>Brands we work with</Tag>
                    <HighlightedTitle
                        title="Trusted global <b>partnerships</b>"
                        highlights={extractHighlightText(
                            "Trusted global <b>partnerships</b>"
                        )}
                    />
                    <p>
                        Our operations adhere to internationally recognized
                        standards, ensuring safety, quality, and compliance
                        across every lifting project.
                    </p>
                </div>

                <div className="space-y-3">
                    <BrandCard cardStyles={cardStyles} />
                    <BrandCard cardStyles={cardStyles} />
                    <BrandCard cardStyles={cardStyles} />
                </div>
            </div>
        </section>
  )
}

export default StickyCardsOneSideSection

function BrandCard({cardStyles}: {cardStyles?: string}) {
    return (
        <div className={cn("md:sticky top-28 bg-white rounded-md px-8 py-7 flex flex-col lg:flex-row lg:items-center gap-5", cardStyles)}>
            <StrapiImage
                src="http://localhost:3000/local/unit2.webp"
                alt="brands1"
                width={150}
                height={150}
                className="shrink-0 aspect-square rounded-full object-cover"
            />

            <div className="space-y-2">
                <h4 className="text-lg font-semibold font-manrope">JASO</h4>
                <p className="text-sm">
                    Leading provider of tower cranes designed for high-rise
                    construction and large-scale infrastructure projects.
                </p>
            </div>
        </div>
    );
}
