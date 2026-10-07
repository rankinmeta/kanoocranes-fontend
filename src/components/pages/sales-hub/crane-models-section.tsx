import HighlightedTitle from "@/components/common/highlight-title";
import { StrapiImage } from "@/components/common/strapi-image";
import Tag from "@/components/common/tag";
import { Button } from "@/components/ui/button";
import { extractHighlightText } from "@/lib/utils";
import type { FeaturedModelsSectionProps } from "@/type";
import Link from "next/link";

const CraneModelsSection = ({
  tag_title,
  models,
}: FeaturedModelsSectionProps) => {
  if (!tag_title || !models || models.length === 0) return null;
  return (
    <div className="container container-padding-x py-10 md:py-20">
      <Tag>{tag_title.tag}</Tag>
      <HighlightedTitle
        title={tag_title.title}
        highlights={extractHighlightText(tag_title.title)}
        className="md:text-3xl"
      />

      <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-5">
        {models.map((model) => (
          <Card {...model} key={model.id} />
        ))}
      </div>
    </div>
  );
};

export default CraneModelsSection;

// function Card({
//   model_slug,
//   main_section,
//   crane_type,
// }: CraneModelsSectionProps["models"][number]) {
//   return (
//     <div className="mt-7 md:mt-10 shrink-0 w-[80%] md:w-auto">
//       <Link href={`/models/${model_slug}`} target="_blank">
//         <div className="bg-[#F5F5F5] aspect-[1/0.7] rounded-md flex items-center justify-center p-5 overflow-hidden">
//           {main_section.images[0] && (
//             <StrapiImage
//               src={main_section.images[0].url}
//               alt={main_section.images[0].alternativeText || "crane image"}
//               width={200}
//               height={200}
//               className="hover:scale-110 transition-transform duration-300"
//             />
//           )}
//         </div>

//         <h3 className="text-lg font-medium mt-5 mb-2">
//           {main_section.model_short_name}
//         </h3>
//         <div>
//           {crane_type && (
//             <>
//               <div className="flex items-center gap-2 py-3">
//                 <div className="size-2 bg-primary rounded-xs shrink-0" />
//                 <span className="text-sm font-semibold">Type</span>
//                 <span className="text-sm text-gray-600">{crane_type.type}</span>
//               </div>
//               <hr />
//             </>
//           )}
//           <div className="flex flex-col items-start gap-1 py-3">
//             <div className="flex items-center gap-2">
//               <div className="size-2 bg-primary rounded-xs shrink-0" />
//               <span className="text-sm font-semibold whitespace-nowrap">
//                 Best for
//               </span>
//             </div>
//             <span className="text-sm text-gray-600 ms-3.5">
//               {main_section.best_for}
//             </span>
//           </div>
//         </div>
//       </Link>
//     </div>
//   );
// }

function Card({
  main_section,
  model_name,
  model_slug,
}: FeaturedModelsSectionProps["models"][0]) {
  if (!main_section || !model_name || !model_slug) return null;

  return (
    <Link
      href={`/models/${model_slug}`}
      className="w-[80%] md:w-auto shrink-0 mt-10 pb-1"
    >
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

      <h3 className="text-lg font-medium mt-5 mb-2">
        {main_section.model_short_name}
      </h3>
      <div>
        <div className="flex items-center gap-2 py-3">
          <div className="size-2 bg-primary rounded-xs shrink-0" />
          <span className="text-sm font-semibold">Crane capacity</span>
          <span className="text-sm text-gray-600">
            {main_section.crane_capacity} Ton
          </span>
        </div>
        <hr />
        <div className="flex items-center gap-2 py-3">
          <div className="size-2 bg-primary rounded-xs shrink-0" />
          <span className="text-sm font-semibold">Max. working radius</span>
          <span className="text-sm text-gray-600">
            {main_section.max_working_radius}m
          </span>
        </div>
        <hr />
        <div className="flex items-center gap-2 py-3">
          <div className="size-2 bg-primary rounded-xs shrink-0" />
          <span className="text-sm font-semibold">Max. lifting height</span>
          <span className="text-sm text-gray-600">
            {main_section.max_lifting_height}m
          </span>
        </div>

        <div className="space-x-3 mt-2">
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
    </Link>
  );
}
