import { StrapiImage } from "@/components/common/strapi-image";
import { Button } from "@/components/ui/button";
import { getAllModels } from "@/data/loader";
import { regroupModels } from "@/lib/utils";
import { GroupedManufacturer, ModelListingTypeProps } from "@/type";
import Link from "next/link";
import { notFound } from "next/navigation";
import ScrollToSection from "./scroll-to-section";
import { Suspense } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

async function loader() {
  const pageData = await getAllModels();
  if (!pageData || !pageData.data) notFound();
  return {
    pageData: pageData.data,
  };
}

const ModelPage = async () => {
  const { pageData } = await loader();

  const grouped = regroupModels(pageData);

  return (
    <section className="container container-padding-x pb-10 md:pb-20">
      <Suspense fallback={<></>}>
        <ScrollToSection />
      </Suspense>
      {grouped.map((manufacturer: GroupedManufacturer) => (
        <div
          key={manufacturer.manufacturerSlug}
          className="mb-10 last:mb-0"
          id={manufacturer.manufacturerSlug}
        >
          <h3 className="text-4xl font-manrope font-medium mt-3">
            {manufacturer.manufacturer}
          </h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
            {manufacturer.items.map((model: ModelListingTypeProps) => (
              <Link
                href={`/models/${model.model_slug}`}
                key={model.id}
                className="flex"
              >
                <Card {...model} />
              </Link>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ModelPage;

function Card({ main_section, model_name, model_slug }: ModelListingTypeProps) {
  if (!main_section || !model_name || !model_slug) return null;

  return (
    <div className="mt-5 pb-1 flex flex-col flex-1">
      <div className="bg-[#F5F5F5] aspect-[1/0.7] rounded-md flex items-center justify-center p-5 overflow-hidden">
        {main_section.images[0] && (
          <StrapiImage
            src={main_section.images[0].url}
            alt={main_section.images[0].alternativeText || model_name}
            width={200}
            height={200}
            className="hover:scale-110 transition-transform duration-300"
          />
        )}
      </div>

      <Tooltip>
        <TooltipTrigger className="text-lg font-medium mt-5 mb-2 [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] overflow-hidden text-left">
          {main_section.model_short_name}
        </TooltipTrigger>
        <TooltipContent>{main_section.model_short_name}</TooltipContent>
      </Tooltip>
      <div className="flex-1 flex flex-col">
        {main_section.max_load ? (
          <>
            <div className="flex items-center gap-2 py-3">
              <div className="size-2 bg-primary rounded-xs shrink-0" />
              <span className="text-sm font-semibold">Max Load</span>
              <span className="text-sm text-gray-600">
                {main_section.max_load} Ton
              </span>
            </div>
            <hr />
          </>
        ) : (
          <></>
        )}
        {main_section.max_working_radius ? (
          <>
            <div className="flex items-center gap-2 py-3">
              <div className="size-2 bg-primary rounded-xs shrink-0" />
              <span className="text-sm font-semibold">Max. working radius</span>
              <span className="text-sm text-gray-600">
                {main_section.max_working_radius}m
              </span>
            </div>
            <hr />
          </>
        ) : (
          <></>
        )}
        {main_section.max_lifting_height ? (
          <>
            <div className="flex items-center gap-2 py-3">
              <div className="size-2 bg-primary rounded-xs shrink-0" />
              <span className="text-sm font-semibold">Max. lifting height</span>
              <span className="text-sm text-gray-600">
                {main_section.max_lifting_height}m
              </span>
            </div>
            <hr />
          </>
        ) : (
          <></>
        )}
        {main_section.reach && (
          <>
            <div className="flex items-center gap-2 py-3">
              <div className="size-2 bg-primary rounded-xs shrink-0" />
              <span className="text-sm font-semibold">Reach</span>
              <span className="text-sm text-gray-600">
                {main_section.reach}
              </span>
            </div>
            <hr />
          </>
        )}
        {main_section.jib_length && (
          <>
            <div className="flex items-center gap-2 py-3">
              <div className="size-2 bg-primary rounded-xs shrink-0" />
              <span className="text-sm font-semibold">Jib Length</span>
              <span className="text-sm text-gray-600">
                {main_section.jib_length}
              </span>
            </div>
            <hr />
          </>
        )}
        {main_section.max_jib_radius && (
          <>
            <div className="flex items-center gap-2 py-3">
              <div className="size-2 bg-primary rounded-xs shrink-0" />
              <span className="text-sm font-semibold">Max. Jib Radius</span>
              <span className="text-sm text-gray-600">
                {main_section.max_jib_radius}
              </span>
            </div>
            <hr />
          </>
        )}
        {main_section.tip_load && (
          <>
            <div className="flex items-center gap-2 py-3">
              <div className="size-2 bg-primary rounded-xs shrink-0" />
              <span className="text-sm font-semibold">Tip Load</span>
              <span className="text-sm text-gray-600">
                {main_section.tip_load}
              </span>
            </div>
            <hr />
          </>
        )}

        <div className="space-x-3 mt-2 flex-1 flex items-end">
          {(main_section.listingType === "sale" ||
            main_section.listingType === "both") && <Button>Buy crane</Button>}
          {(main_section.listingType === "rent" ||
            main_section.listingType === "both") && (
            <Button className="bg-white text-secondary border-secondary hover:bg-secondary hover:text-white">
              Rent crane
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
