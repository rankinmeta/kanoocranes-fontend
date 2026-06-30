import HighlightedTitle from "@/components/common/highlight-title";
import { StrapiImage } from "@/components/common/strapi-image";
import Tag from "@/components/common/tag";
import { ImageZoom } from "@/components/kibo-ui/image-zoom";
import { extractHighlightText } from "@/lib/utils";
import type { MediaProps, TagTitleProps } from "@/type";

type GallerySectionProps = {
  id: number;
  tag_title: TagTitleProps;
  images: MediaProps[];
};

const GallerySection = ({ images, tag_title }: GallerySectionProps) => {
  if (!images || !tag_title) return null;

  return (
    <section className="bg-secondary relative">
      {/* Circles */}
      <div className="hidden md:grid absolute right-5 top-10 grid-cols-4 gap-2 gap-y-3 after:bg-linear-to-r after:from-transparent after:to-secondary after:absolute after:inset-0">
        {Array(8)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="size-14 bg-[#03297a] rounded-full"></div>
          ))}
      </div>

      <div className="container container-padding-x py-10 md:py-16 lg:py-20 text-white">
        <div className="space-y-3">
          <Tag className="bg-white">{tag_title.tag}</Tag>
          <HighlightedTitle
            title={tag_title.title}
            highlights={extractHighlightText(tag_title.title)}
          />
        </div>

        <div className="w-full overflow-x-scroll scrollbar-none">
          <div className="grid grid-cols-6 w-[1000px] md:w-full gap-3 mt-8 md:mt-16">
            {images[0] && (
              <div className="rounded-md col-span-2 aspect-video overflow-hidden">
                <ImageZoom className="relative size-full">
                  <StrapiImage
                    src={images[0].url}
                    alt={images[0].alternativeText || ""}
                    fill
                    className="object-cover"
                  />
                </ImageZoom>
              </div>
            )}
            {images[1] && (
              <div className="h-full rounded-md col-span-2 row-span-2 overflow-hidden">
                <ImageZoom className="relative size-full">
                  <StrapiImage
                    src={images[1].url}
                    alt={images[1].alternativeText || ""}
                    fill
                    className="object-cover"
                  />
                </ImageZoom>
              </div>
            )}
            {images[2] && (
              <div className="rounded-md overflow-hidden">
                <ImageZoom className="relative size-full">
                  <StrapiImage
                    src={images[2].url}
                    alt={images[2].alternativeText || ""}
                    fill
                    className="object-cover"
                  />
                </ImageZoom>
              </div>
            )}
            {images[3] && (
              <div className="rounded-md overflow-hidden">
                <ImageZoom className="relative size-full">
                  <StrapiImage
                    src={images[3].url}
                    alt={images[3].alternativeText || ""}
                    fill
                    className="object-cover"
                  />
                </ImageZoom>
              </div>
            )}
            {images[4] && (
              <div className="rounded-md overflow-hidden col-span-2 aspect-video">
                <ImageZoom className="relative size-full">
                  <StrapiImage
                    src={images[4].url}
                    alt={images[4].alternativeText || ""}
                    fill
                    className="object-cover"
                  />
                </ImageZoom>
              </div>
            )}
            {images[5] && (
              <div className="rounded-md overflow-hidden">
                <ImageZoom className="relative size-full">
                  <StrapiImage
                    src={images[5].url}
                    alt={images[5].alternativeText || ""}
                    fill
                    className="object-cover"
                  />
                </ImageZoom>
              </div>
            )}
            {images[6] && (
              <div className="rounded-md overflow-hidden col-span-2 aspect-video">
                <ImageZoom className="relative size-full">
                  <StrapiImage
                    src={images[6].url}
                    alt={images[6].alternativeText || ""}
                    fill
                    className="object-cover"
                  />
                </ImageZoom>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
