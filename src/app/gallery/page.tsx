import HighlightedTitle from "@/components/common/highlight-title";
import { StrapiImage } from "@/components/common/strapi-image";
import Tag from "@/components/common/tag";
import { ImageZoom } from "@/components/kibo-ui/image-zoom";
import { getGalleryPage } from "@/data/loader";
import { chunk, extractHighlightText, returnMetadata } from "@/lib/utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";

async function loader() {
  const pageData = await getGalleryPage();
  if (!pageData || !pageData.data) notFound();
  return {
    pageData: pageData.data,
  };
}

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await getGalleryPage();

  return returnMetadata(data);
}

const GalleryPage = async () => {
  const { pageData } = await loader();
  if (!pageData.tag_title) notFound();
  const subImages = chunk(pageData.images || [], 7);

  return (
    <main className="bg-secondary relative">
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
          <Tag className="bg-white">{pageData.tag_title.tag}</Tag>
          <HighlightedTitle
            title={pageData.tag_title.title}
            highlights={extractHighlightText(pageData.tag_title.title)}
          />
        </div>

        <div className="w-full overflow-x-scroll scrollbar-none mt-8 md:mt-16">
          {subImages.map((subImage, i) => (
            <div
              className="grid grid-cols-6 w-[1000px] md:w-full gap-3 mt-3"
              key={i}
            >
              {subImage[0] && (
                <div className="rounded-md col-span-2 aspect-video overflow-hidden">
                  <ImageZoom className="relative size-full">
                    <StrapiImage
                      src={subImage[0].url}
                      alt={subImage[0].alternativeText || ""}
                      fill
                      className="object-cover"
                    />
                  </ImageZoom>
                </div>
              )}
              {subImage[1] && (
                <div className="h-full rounded-md col-span-2 row-span-2 overflow-hidden">
                  <ImageZoom className="relative size-full">
                    <StrapiImage
                      src={subImage[1].url}
                      alt={subImage[1].alternativeText || ""}
                      fill
                      className="object-cover"
                    />
                  </ImageZoom>
                </div>
              )}
              {subImage[2] && (
                <div className="rounded-md overflow-hidden size-full aspect-[1/1.1]">
                  <ImageZoom className="relative size-full">
                    <StrapiImage
                      src={subImage[2].url}
                      alt={subImage[2].alternativeText || ""}
                      fill
                      className="object-cover"
                    />
                  </ImageZoom>
                </div>
              )}
              {subImage[3] && (
                <div className="rounded-md overflow-hidden size-full aspect-[1/1.1]">
                  <ImageZoom className="relative size-full">
                    <StrapiImage
                      src={subImage[3].url}
                      alt={subImage[3].alternativeText || ""}
                      fill
                      className="object-cover"
                    />
                  </ImageZoom>
                </div>
              )}
              {subImage[4] && (
                <div className="rounded-md overflow-hidden size-full aspect-[1/1.1]">
                  <ImageZoom className="relative size-full">
                    <StrapiImage
                      src={subImage[4].url}
                      alt={subImage[4].alternativeText || ""}
                      fill
                      className="object-cover"
                    />
                  </ImageZoom>
                </div>
              )}
              {subImage[5] && (
                <div className="rounded-md overflow-hidden">
                  <ImageZoom className="relative size-full aspect-[1/1.1]">
                    <StrapiImage
                      src={subImage[5].url}
                      alt={subImage[5].alternativeText || ""}
                      fill
                      className="object-cover"
                    />
                  </ImageZoom>
                </div>
              )}
              {subImage[6] && (
                <div className="rounded-md overflow-hidden col-span-2 aspect-video">
                  <ImageZoom className="relative size-full">
                    <StrapiImage
                      src={subImage[6].url}
                      alt={subImage[6].alternativeText || ""}
                      fill
                      className="object-cover"
                    />
                  </ImageZoom>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default GalleryPage;
