import HighlightedTitle from "@/components/common/highlight-title";
import { StrapiImage } from "@/components/common/strapi-image";
import Tag from "@/components/common/tag";
import FilterContent from "@/components/sheets/filter-content";
import FilterSheet from "@/components/sheets/filter-sheet";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { extractHighlightText } from "@/lib/utils";
import { ChevronRight, RotateCcw } from "lucide-react";

const FilterListSection = () => {
  return (
    <section className="container container-padding-x py-10 md:py-20">
      <div className="space-y-2">
        <Tag>Tower crane models</Tag>
        <HighlightedTitle
          title="Explore our <b>tower crane range</b>"
          highlights={extractHighlightText(
            "Explore our <b>tower crane range</b>",
          )}
        />
      </div>

      <div className="grid md:grid-cols-4 gap-5 mt-7 md:mt-10">
        {/* Mobile */}
        <FilterSheet />

        {/* Desktop */}
        <div className="hidden md:block">
          <FilterContent />
        </div>

        <div className="md:col-span-3 flex md:grid grid-cols-3 gap-3 overflow-x-scroll scrollbar-none">
            <Card />
            <Card />
            <Card />
        </div>
      </div>
    </section>
  );
};

export default FilterListSection;

function Card() {
    return (
        <div className="shrink-0 w-[90%] md:w-auto">
            <div className="bg-[#F5F5F5] rounded-md flex items-center justify-center p-5 overflow-hidden">
                <StrapiImage
                    src="http://localhost:3000/local/crane2.png"
                    alt="crane"
                    width={200}
                    height={200}
                    className="hover:scale-110 transition-transform duration-300"
                />
            </div>

            <h3 className="text-lg font-medium mt-5 mb-2">
                JASO Flat-Top Tower Crane
            </h3>
            <div>
                <div className="flex items-center gap-2 py-3">
                    <div className="size-2 bg-primary rounded-xs shrink-0" />
                    <span className="text-sm font-semibold">
                        Crane capacity
                    </span>
                    <span className="text-sm text-gray-600">3.83 Ton</span>
                </div>
                <hr />
                <div className="flex items-center gap-2 py-3">
                    <div className="size-2 bg-primary rounded-xs shrink-0" />
                    <span className="text-sm font-semibold">
                        Max. working radius
                    </span>
                    <span className="text-sm text-gray-600">16m</span>
                </div>
                <hr />
                <div className="flex items-center gap-2 py-3">
                    <div className="size-2 bg-primary rounded-xs shrink-0" />
                    <span className="text-sm font-semibold">
                        Max. lifting height
                    </span>
                    <span className="text-sm text-gray-600">16.8m</span>
                </div>

                    <Button className="w-full mt-2">Buy crane</Button>
                
            </div>
        </div>
    );
}
