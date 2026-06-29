import HighlightedTitle from "@/components/common/highlight-title";
import { StrapiImage } from "@/components/common/strapi-image";
import Tag from "@/components/common/tag";
import { ImageZoom } from "@/components/kibo-ui/image-zoom";
import { extractHighlightText } from "@/lib/utils";

const GallerySection = () => {
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
          <Tag className="bg-white">Gallery</Tag>
          <HighlightedTitle
            title="See our cranes at work"
            highlights={extractHighlightText("See our cranes at work")}
          />
        </div>

        <div className="w-full overflow-x-scroll scrollbar-none">
          <div className="grid grid-cols-6 w-[1000px] md:w-full gap-3 mt-8 md:mt-16">
            <div className="rounded-md col-span-2 aspect-video overflow-hidden">
              <ImageZoom className="relative size-full">
                <StrapiImage
                  src="http://localhost:3000/local/crane3.png"
                  alt="crane"
                  fill
                  className="object-cover"
                />
              </ImageZoom>
            </div>
            <div className="h-full rounded-md col-span-2 row-span-2 overflow-hidden">
              <ImageZoom className="relative size-full">
                <StrapiImage
                  src="http://localhost:3000/local/crane3.png"
                  alt="crane"
                  fill
                  className="object-cover"
                />
              </ImageZoom>
            </div>
            <div className="rounded-md overflow-hidden">
              <ImageZoom className="relative size-full">
                <StrapiImage
                  src="http://localhost:3000/local/crane3.png"
                  alt="crane"
                  fill
                  className="object-cover"
                />
              </ImageZoom>
            </div>
            <div className="rounded-md overflow-hidden">
              <ImageZoom className="relative size-full">
                <StrapiImage
                  src="http://localhost:3000/local/crane3.png"
                  alt="crane"
                  fill
                  className="object-cover"
                />
              </ImageZoom>
            </div>
            <div className="rounded-md overflow-hidden">
              <ImageZoom className="relative size-full">
                <StrapiImage
                  src="http://localhost:3000/local/crane3.png"
                  alt="crane"
                  fill
                  className="object-cover"
                />
              </ImageZoom>
            </div>
            <div className="rounded-md overflow-hidden">
              <ImageZoom className="relative size-full">
                <StrapiImage
                  src="http://localhost:3000/local/crane3.png"
                  alt="crane"
                  fill
                  className="object-cover"
                />
              </ImageZoom>
            </div>
            <div className="rounded-md overflow-hidden col-span-2 aspect-video">
              <ImageZoom className="relative size-full">
                <StrapiImage
                  src="http://localhost:3000/local/crane3.png"
                  alt="crane"
                  fill
                  className="object-cover"
                />
              </ImageZoom>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
