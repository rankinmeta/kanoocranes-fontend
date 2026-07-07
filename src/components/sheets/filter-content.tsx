"use client";

import { Check, RotateCcw } from "lucide-react";
import { Button } from "../ui/button";
import { Field, FieldGroup } from "../ui/field";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import type { CraneTypeProps, ManufacturerProps, ProjectTypeProps } from "@/type";
import { useState } from "react";
import { useFilters } from "@/context/filter-context";

type FilterContentProps = {
  crane_types: CraneTypeProps[];
  project_types: ProjectTypeProps[];
  manufacturers: ManufacturerProps[];
};

const FilterContent = ({
  crane_types,
  project_types,
  manufacturers,
}: FilterContentProps) => {
  const { draftFilters, toggleFilter, selectAvailability, setSortBy, resetFilters, applyFilters } = useFilters();

  return (
    <div>
      <div className="flex items-center justify-between pb-3">
        <span className="text-xl font-medium">Filter</span>
        <div>
          <Button
            variant="ghost"
            className="text-primary hover:text-primary px-3 h-fit py-2 text-xs"
            onClick={resetFilters}
          >
            Reset <RotateCcw size={16} />
          </Button>
          <Button
            variant="secondary"
            className="px-3 h-fit py-2 text-xs"
            onClick={applyFilters}
          >
            Apply <Check size={16} />
          </Button>
        </div>
      </div>

      <hr />

      <div className="h-screen overflow-y-scroll scrollbar-thin">
        <div className="mt-4 space-y-2">
          <span className="font-medium text-lg font-manrope block">
            Crane type
          </span>

          <FieldGroup className="max-w-sm">
            {crane_types.map((crane_type) => (
              <Field orientation="horizontal" key={crane_type.id}>
                <Checkbox
                  id={crane_type.slug}
                  checked={draftFilters.craneTypes.includes(crane_type.slug)}
                  onCheckedChange={() =>
                    toggleFilter("craneTypes", crane_type.slug)
                  }
                />
                <Label
                  htmlFor={crane_type.slug}
                  className="text-base font-normal text-[#414651]"
                >
                  {crane_type.type}
                </Label>
              </Field>
            ))}
          </FieldGroup>
        </div>

        <div className="mt-4 space-y-2">
          <span className="font-medium text-lg font-manrope block">
            Lifting capacity
          </span>

          <FieldGroup className="max-w-sm">
            <Field orientation="horizontal">
              <Checkbox
                id="up-to-10"
                checked={draftFilters.liftingCapacity.includes("up-to-10")}
                onCheckedChange={() =>
                  toggleFilter("liftingCapacity", "up-to-10")
                }
              />
              <Label
                htmlFor="up-to-10"
                className="text-base font-normal text-[#414651]"
              >
                Up to 10 ton
              </Label>
            </Field>
            <Field orientation="horizontal">
              <Checkbox
                id="10-20"
                checked={draftFilters.liftingCapacity.includes("10-20")}
                onCheckedChange={() =>
                  toggleFilter("liftingCapacity", "10-20")
                }
              />
              <Label
                htmlFor="10-20"
                className="text-base font-normal text-[#414651]"
              >
                10-20 ton
              </Label>
            </Field>
            <Field orientation="horizontal">
              <Checkbox
                id="20-30"
                checked={draftFilters.liftingCapacity.includes("20-30")}
                onCheckedChange={() =>
                  toggleFilter("liftingCapacity", "20-30")
                }
              />
              <Label
                htmlFor="20-30"
                className="text-base font-normal text-[#414651]"
              >
                20-30 ton
              </Label>
            </Field>
            <Field orientation="horizontal">
              <Checkbox
                id="30-40"
                checked={draftFilters.liftingCapacity.includes("30-40")}
                onCheckedChange={() =>
                  toggleFilter("liftingCapacity", "30-40")
                }
              />
              <Label
                htmlFor="30-40"
                className="text-base font-normal text-[#414651]"
              >
                30-40 ton
              </Label>
            </Field>
            <Field orientation="horizontal">
              <Checkbox
                id="40-plus"
                checked={draftFilters.liftingCapacity.includes("40-plus")}
                onCheckedChange={() =>
                  toggleFilter("liftingCapacity", "40-plus")
                }
              />
              <Label
                htmlFor="40-plus"
                className="text-base font-normal text-[#414651]"
              >
                40+ ton
              </Label>
            </Field>
          </FieldGroup>
        </div>

        <div className="mt-4 space-y-2">
          <span className="font-medium text-lg font-manrope block">
            Maximum working radius
          </span>
          <FieldGroup className="max-w-sm">
            <Field orientation="horizontal">
              <Checkbox
                id="up-to-50"
                checked={draftFilters.workingRadius.includes("up-to-50")}
                onCheckedChange={() =>
                  toggleFilter("workingRadius", "up-to-50")
                }
              />
              <Label
                htmlFor="up-to-50"
                className="text-base font-normal text-[#414651]"
              >
                Up to 50m
              </Label>
            </Field>
            <Field orientation="horizontal">
              <Checkbox
                id="50-70"
                checked={draftFilters.workingRadius.includes("50-70")}
                onCheckedChange={() => toggleFilter("workingRadius", "50-70")}
              />
              <Label
                htmlFor="50-70"
                className="text-base font-normal text-[#414651]"
              >
                50-70 ton
              </Label>
            </Field>
            <Field orientation="horizontal">
              <Checkbox
                id="70-90"
                checked={draftFilters.workingRadius.includes("70-90")}
                onCheckedChange={() => toggleFilter("workingRadius", "70-90")}
              />
              <Label
                htmlFor="70-90"
                className="text-base font-normal text-[#414651]"
              >
                70-90 ton
              </Label>
            </Field>
            <Field orientation="horizontal">
              <Checkbox
                id="90-plus"
                checked={draftFilters.workingRadius.includes("90-plus")}
                onCheckedChange={() =>
                  toggleFilter("workingRadius", "90-plus")
                }
              />
              <Label
                htmlFor="90-plus"
                className="text-base font-normal text-[#414651]"
              >
                90m+ ton
              </Label>
            </Field>
          </FieldGroup>
        </div>

        <div className="mt-4 space-y-2">
          <span className="font-medium text-lg font-manrope block">
            Project type
          </span>
          <FieldGroup className="max-w-sm">
            {project_types.map((project_type) => (
              <Field orientation="horizontal" key={project_type.id}>
                <Checkbox
                  id={project_type.slug}
                  checked={draftFilters.projectTypes.includes(project_type.slug)}
                  onCheckedChange={() =>
                    toggleFilter("projectTypes", project_type.slug)
                  }
                />
                <Label
                  htmlFor={project_type.slug}
                  className="text-base font-normal text-[#414651]"
                >
                  {project_type.type}
                </Label>
              </Field>
            ))}
          </FieldGroup>
        </div>

        <div className="mt-4 space-y-2">
          <span className="font-medium text-lg font-manrope block">
            Manufacturer
          </span>
          <FieldGroup className="max-w-sm">
            {manufacturers.map((manufacturer) => (
              <Field orientation="horizontal" key={manufacturer.id}>
                <Checkbox
                  id={manufacturer.slug}
                  checked={draftFilters.manufacturers.includes(manufacturer.slug)}
                  onCheckedChange={() =>
                    toggleFilter("manufacturers", manufacturer.slug)
                  }
                />
                <Label
                  htmlFor={manufacturer.slug}
                  className="text-base font-normal text-[#414651]"
                >
                  {manufacturer.name}
                </Label>
              </Field>
            ))}
          </FieldGroup>
        </div>

        <div className="mt-4 space-y-2">
          <span className="font-medium text-lg font-manrope block">
            Availability
          </span>
          <FieldGroup className="max-w-sm">
            <Field orientation="horizontal">
              <Checkbox
                id="avl-sale"
                name="availability"
                checked={draftFilters.availability === "avl-sale"}
                onCheckedChange={() => selectAvailability("avl-sale")}
              />
              <Label
                htmlFor="avl-sale"
                className="text-base font-normal text-[#414651]"
              >
                Available for Sale
              </Label>
            </Field>
            <Field orientation="horizontal">
              <Checkbox
                id="avl-rent"
                name="availability"
                checked={draftFilters.availability === "avl-rent"}
                onCheckedChange={() => selectAvailability("avl-rent")}
              />
              <Label
                htmlFor="avl-rent"
                className="text-base font-normal text-[#414651]"
              >
                Available for Rental
              </Label>
            </Field>
            <Field orientation="horizontal">
              <Checkbox
                id="both"
                name="availability"
                checked={draftFilters.availability === "both"}
                onCheckedChange={() => selectAvailability("both")}
              />
              <Label
                htmlFor="both"
                className="text-base font-normal text-[#414651]"
              >
                Both
              </Label>
            </Field>
          </FieldGroup>
        </div>

        <div className="mt-4 space-y-2">
          <span className="font-medium text-lg font-manrope block">
            Sort by
          </span>
          <FieldGroup className="max-w-sm">
            <Field orientation="horizontal">
              <Checkbox
                id="capacity-l2h"
                checked={draftFilters.sortBy === "capacity-l2h"}
                onCheckedChange={() => setSortBy("capacity-l2h")}
              />
              <Label
                htmlFor="capacity-l2h"
                className="text-base font-normal text-[#414651]"
              >
                Capacity &#040;Low to High&#041;
              </Label>
            </Field>
            <Field orientation="horizontal">
              <Checkbox
                id="capacity-h2l"
                checked={draftFilters.sortBy === "capacity-h2l"}
                onCheckedChange={() => setSortBy("capacity-h2l")}
              />
              <Label
                htmlFor="capacity-h2l"
                className="text-base font-normal text-[#414651]"
              >
                Capacity &#040;High to Low&#041;
              </Label>
            </Field>
            <Field orientation="horizontal">
              <Checkbox
                id="working-radius"
                checked={draftFilters.sortBy === "working-radius"}
                onCheckedChange={() => setSortBy("working-radius")}
              />
              <Label
                htmlFor="working-radius"
                className="text-base font-normal text-[#414651]"
              >
                Working Radius
              </Label>
            </Field>
            <Field orientation="horizontal">
              <Checkbox
                id="lifting-height"
                checked={draftFilters.sortBy === "lifting-height"}
                onCheckedChange={() => setSortBy("lifting-height")}
              />
              <Label
                htmlFor="lifting-height"
                className="text-base font-normal text-[#414651]"
              >
                Lifting Height
              </Label>
            </Field>
          </FieldGroup>
        </div>
      </div>
    </div>
  );
};

export default FilterContent;
