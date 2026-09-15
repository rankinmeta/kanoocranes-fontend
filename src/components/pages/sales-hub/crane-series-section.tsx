import HighlightedTitle from "@/components/common/highlight-title";
import { StrapiImage } from "@/components/common/strapi-image";
import { extractHighlightText } from "@/lib/utils";
import type { CraneSeriesSectionProps } from "@/type";
import ModelTable from "../rental-hub/table";

const CraneSeriesSection = ({
  crane_series,
  table,
}: CraneSeriesSectionProps) => {
  return (
    <section className="bg-[#f5f5f5 bg-[#f0efef]">
      <div className="relative z-10 container container-padding-x py-10 md:py-16 lg:py-20 grid md:grid-cols-5 gap-5 items-center">
        <StrapiImage
          src={crane_series.image.url}
          alt={crane_series.image.alternativeText || ""}
          width={400}
          height={400}
          className="hidden md:block aspect-[1/0.7] col-span-2 rounded-md object-cover"
        />

        <div className="md:col-span-3">
          <div className="space-y-2.5">
            <HighlightedTitle
              title={crane_series.title}
              highlights={extractHighlightText(crane_series.title)}
              className="max-w-md"
            />
            <StrapiImage
              src={crane_series.image.url}
              alt={crane_series.image.alternativeText || ""}
              width={400}
              height={400}
              className="md:hidden my-5 aspect-[1/0.7] rounded-md object-cover"
            />
            <p className="max-w-xl mt-5">{crane_series.description}</p>
          </div>
        </div>

        <ModelTable
          table_section={table}
          className="mt-5 md:col-span-5 md:mt-10"
        />
      </div>
    </section>
  );
};

export default CraneSeriesSection;
