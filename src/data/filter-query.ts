import { FilterState } from "@/context/filter-context";
import qs from "qs";
import { capacityConditions, radiusConditions } from "./filter-converter";

const listingTypeMap: Record<string, string> = {
  "avl-sale": "sale",
  "avl-rent": "rent",
  both: "both",
};

export function buildCraneQuery(filters: FilterState) {
  return qs.stringify(
    {
      pagination: {
        pageSize: 100,
      },
      fields: ["model_name", "model_slug"],
      populate: {
        main_section: {
          fields: [
            "model_short_name",
            "crane_capacity",
            "max_working_radius",
            "max_lifting_height",
            "listingType",
          ],
          populate: {
            images: {
              fields: ["url", "alternativeText"],
            },
          },
        },
      },

      filters: {
        ...(filters.liftingCapacity.length > 0 && {
          $or: capacityConditions(filters.liftingCapacity),
        }),

        ...(filters.workingRadius.length > 0 && {
          ...(filters.liftingCapacity.length > 0
            ? {
                $and: [
                  {
                    $or: capacityConditions(filters.liftingCapacity),
                  },
                  {
                    $or: radiusConditions(filters.workingRadius),
                  },
                ],
              }
            : {
                $or: radiusConditions(filters.workingRadius),
              }),
        }),

        ...(filters.craneTypes.length > 0 && {
          crane_type: {
            slug: {
              $in: filters.craneTypes,
            },
          },
        }),

        ...(filters.projectTypes.length > 0 && {
          project_type: {
            slug: {
              $in: filters.projectTypes,
            },
          },
        }),

        ...(filters.manufacturers.length > 0 && {
          manufacturer: {
            slug: {
              $in: filters.manufacturers,
            },
          },
        }),

        main_section: {
          ...(filters.availability && {
            listingType: {
              $eq: listingTypeMap[filters.availability],
            },
          }),
        },
      },

      sort:
        filters.sortBy === "capacity-l2h"
          ? ["main_section.capacity:asc"]
          : filters.sortBy === "capacity-h2l"
            ? ["main_section.capacity:desc"]
            : filters.sortBy === "working-radius"
              ? ["main_section.max_working_radius:desc"]
              : filters.sortBy === "lifting-height"
                ? ["main_section.max_lifting_height:desc"]
                : undefined,
    },
    {
      encodeValuesOnly: true,
    },
  );
}
