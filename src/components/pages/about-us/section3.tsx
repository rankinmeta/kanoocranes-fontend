import { StrapiImage } from "@/components/common/strapi-image";
import FiftyYears from "@/components/icons/50-years";
import { AboutKanooGroupProps } from "@/type";

const Section3 = ({
    tag_title,
    image,
    description
}: AboutKanooGroupProps) => {
    if(!tag_title || !image) return null;

    return (
        <section className="relative bg-secondary pb-10 md:pb-0">
            {/* Circles */}
            <div className="hidden absolute top-7 right-0 lg:grid grid-cols-4 gap-2 after:absolute after:inset-0 after:bg-linear-to-r after:from-transparent after:to-secondary after:z-10">
                {Array(12)
                    .fill(0)
                    .map((_, i) => (
                        <div
                            key={i}
                            className="size-12 bg-[#03297a] rounded-full"
                        ></div>
                    ))}
            </div>

            <div className="grid lg:grid-cols-2 relative z-10">
                <StrapiImage
                    src={image.url}
                    alt={image.alternativeText || "kanoo group"}
                    width={400}
                    height={400}
                    className="object-cover w-full"
                />
                <div className="p-4 md:p-12 text-white space-y-3">
                    <FiftyYears />
                    <div className="flex items-center gap-1.5">
                        <div className="size-1.5 bg-white shrink-0" />
                        <span className="uppercase text-xs">
                            {tag_title.tag}
                        </span>
                    </div>
                    <h3 className="text-2xl">
                        {tag_title.title}
                    </h3>
                    <p className="text-sm leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Section3;
