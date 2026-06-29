import HighlightedTitle from "@/components/common/highlight-title";
import { StrapiImage } from "@/components/common/strapi-image";
import Tag from "@/components/common/tag";
import { extractHighlightText } from "@/lib/utils";
import { BrandSectionProps } from "@/type";

const BrandsSection = ({
    brands,
    description,
    tag_title
}: BrandSectionProps) => {
    if(!tag_title || !brands) return null;

    return (
        <section className="bg-[#F5F5F5]">
            <div className="relative container container-padding-x py-10 md:py-16 lg:py-20 grid lg:grid-cols-2 gap-5">
                <div className="lg:sticky top-28 self-start space-y-2.5">
                    <Tag>{tag_title.tag}</Tag>
                    <HighlightedTitle
                        title={tag_title.title}
                        highlights={extractHighlightText(
                            tag_title.title
                        )}
                    />
                    <p>
                        {description}
                    </p>
                </div>

                <div className="space-y-3">
                    {brands?.length > 0 &&
                        brands.map((brand) => (
                            <BrandCard {...brand} key={brand.id} />
                        ))}
                </div>
            </div>
        </section>
    );
};

export default BrandsSection;

function BrandCard({
    title,
    description,
    logo
}: BrandSectionProps["brands"][0]) {
    if(!title || !logo) return null;

    return (
        <div className="lg:sticky top-28 bg-white rounded-md px-8 py-10 flex flex-col md:flex-row md:items-center gap-5">
            <StrapiImage
                src={logo.url}
                alt={logo.alternativeText || "logo"}
                width={200}
                height={200}
                className="shrink-0"
            />

            <div className="space-y-2">
                <h4 className="text-lg font-semibold font-manrope">{title}</h4>
                <p className="text-sm">
                    {description}
                </p>
            </div>
        </div>
    );
}
