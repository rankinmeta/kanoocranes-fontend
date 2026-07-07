import HighlightedTitle from "@/components/common/highlight-title";
import { SpecificationTable } from "./specification-table";
import { extractHighlightText } from "@/lib/utils";

type ProductProps = {
  title: string;
  short_description: string;
  crane_capacity: string;
  max_working_radius: string;
  max_lifting_height: string;
  hook_height: string;
  crane_configuration: string;
  overview: string;
  manufacturer: string;
  model_specifications: {
    id: number;
    col1: string;
    col2: string;
  }[];
};

export function ProductInfo({
  title,
  short_description,
  crane_capacity,
  max_working_radius,
  max_lifting_height,
  hook_height,
  manufacturer,
  crane_configuration,
  model_specifications,
  overview,
}: ProductProps) {
  return (
    <div>
      <HighlightedTitle
        title={title || ""}
        highlights={extractHighlightText(title || "")}
        className="md:font-light text-4xl md:text-5xl! max-w-md"
      />

      <p className="mt-4">{short_description}</p>

      <div className="mt-5 grid md:grid-cols-3">
        <div className="py-3 md:py-5">
          <div className="flex items-center gap-2">
            <div className="size-2 bg-primary" />
            <span className="text-sm">Crane Capacity</span>
          </div>

          <h3 className="mt-2 text-2xl md:text-3xl font-medium font-manrope">
            {crane_capacity} Ton
          </h3>
        </div>

        <div className="border-y md:border-y-0 md:border-x py-3 md:py-5 md:pl-6">
          <div className="flex items-center gap-2">
            <div className="size-2 bg-primary" />
            <span className="text-sm">Max Radius</span>
          </div>

          <h3 className="mt-2 text-2xl md:text-3xl font-medium font-manrope">
            {max_working_radius}m
          </h3>
        </div>

        <div className="py-3 md:py-5 md:pl-6">
          <div className="flex items-center gap-2">
            <div className="size-2 bg-primary" />
            <span className="text-sm">Lift Height</span>
          </div>

          <h3 className="mt-2 text-2xl md:text-3xl font-medium font-manrope">
            {max_lifting_height}m+
          </h3>
        </div>
      </div>

      <h3 className="mt-5 mb-4 text-2xl font-manrope font-medium">Specs Bar</h3>

      <div className="grid md:grid-cols-2 gap-4 bg-[#F5F5F5] p-3 md:p-5 rounded-sm">
        {[
          { label: "Maximum Capacity", value: crane_capacity },
          { label: "Hook Height", value: hook_height },
          { label: "Maximum Radius", value: max_working_radius },
          { label: "Crane Configuration", value: crane_configuration },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <span className="h-2 w-2 bg-red-500" />
            <span className="text-sm font-medium">{item.label}</span>

            <span className="text-sm text-[#414651]">{item.value}</span>
          </div>
        ))}
      </div>

      <div>
        <h3 className="mt-8 mb-4 text-2xl font-manrope font-medium">
          Overview
        </h3>

        <p className="text-[#414651]">{overview}</p>
      </div>

      <SpecificationTable
        specifications={model_specifications}
        manufacturer={manufacturer}
      />
    </div>
  );
}
