import HighlightedTitle from "@/components/common/highlight-title"
import { StrapiImage } from "@/components/common/strapi-image"
import Tag from "@/components/common/tag"
import { extractHighlightText } from "@/lib/utils"
import { MediaProps, TagTitleProps } from "@/type"

type BrandHighlightProps = {
    tag_title: TagTitleProps;
    logo: MediaProps;
    description: string;
}

const BrandHighlightSection = ({description,logo,tag_title}: BrandHighlightProps) => {
    if(!tag_title || !description || !logo) return null;

  return (
    <section className="relative bg-secondary text-white">
        {/* Circles */}
        <div className="absolute top-7 right-0 hidden md:grid grid-cols-4 gap-2 after:absolute after:inset-0 after:bg-linear-to-r after:from-transparent after:to-secondary after:z-10">
                {Array(12)
                    .fill(0)
                    .map((_, i) => (
                        <div
                            key={i}
                            className="size-14 bg-[#03297a] rounded-full"
                        ></div>
                    ))}
            </div>

            <div className="absolute top-7 left-0 hidden md:grid grid-cols-4 gap-2 after:absolute after:inset-0 after:bg-linear-to-l after:from-transparent after:to-secondary after:z-10">
                {Array(12)
                    .fill(0)
                    .map((_, i) => (
                        <div
                            key={i}
                            className="size-14 bg-[#03297a] rounded-full"
                        ></div>
                    ))}
            </div>

        <div className="container container-padding-x py-10 md:py-20 flex flex-col items-center justify-center">
            <StrapiImage 
                src={logo.url}
                alt={logo.alternativeText || ""}
                width={400}
                height={400}
                className="size-[80%] md:size-auto md:w-[400px]"
            />

            <div className="mt-8 md:mt-14 space-y-2.5 flex flex-col md:items-center justify-center md:text-center max-w-4xl">
                <Tag className="bg-white">{tag_title.tag}</Tag>
                <HighlightedTitle
                    title={tag_title.title}
                    highlights={extractHighlightText(
                        tag_title.title
                    )}
                />
                <p className="text-[#A4A7AE]">{description}</p>
            </div>
        </div>
    </section>
  )
}

export default BrandHighlightSection