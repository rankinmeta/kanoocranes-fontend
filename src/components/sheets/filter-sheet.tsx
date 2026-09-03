"use client";

import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import FilterContent from "./filter-content";
import { CraneTypeProps, ManufacturerProps, ProjectTypeProps } from "@/type";
import { useFilters } from "@/context/filter-context";

type FilterSheetProps = {
  crane_types: CraneTypeProps[];
  project_types: ProjectTypeProps[];
  manufacturers: ManufacturerProps[];
};

const FilterSheet = ({
  crane_types,
  project_types,
  manufacturers,
}: FilterSheetProps) => {
  const { applyFilters } = useFilters();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="md:hidden bg-transparent border-secondary text-secondary justify-between">
          Filter <ChevronRight />
        </Button>
      </SheetTrigger>
      <SheetContent className="z-999">
        <div className="px-6 py-10">
          <FilterContent
            crane_types={crane_types}
            project_types={project_types}
            manufacturers={manufacturers}
          />
          <Button className="mt-4" onClick={applyFilters}>
            Apply Filters
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default FilterSheet;
