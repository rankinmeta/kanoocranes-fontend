"use client";

import HighlightedTitle from "@/components/common/highlight-title";
import { StrapiImage } from "@/components/common/strapi-image";
import Tag from "@/components/common/tag";
import FilterContent from "@/components/sheets/filter-content";
import FilterSheet from "@/components/sheets/filter-sheet";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useCraneModels } from "@/hooks/useCraneModels";
import { cn, extractHighlightText } from "@/lib/utils";
import {
  CraneTypeProps,
  ManufacturerProps,
  MediaProps,
  ProjectTypeProps,
  TagTitleProps,
} from "@/type";
import { Info, Loader2 } from "lucide-react";
import { useState } from "react";

type FilterListProps = {
  tag_title: TagTitleProps;
  crane_types: CraneTypeProps[];
  project_types: ProjectTypeProps[];
  manufacturers: ManufacturerProps[];
};

type ModelProps = {
  main_section: {
    crane_capacity: number;
    images: MediaProps[];
    max_lifting_height: number;
    listingType: "sale" | "rent" | "both";
    max_working_radius: number;
    model_short_name: string;
  };
  id: number;
};

const ITEMS_PER_PAGE = 6;

const FilterListSection = ({
  tag_title,
  crane_types,
  project_types,
  manufacturers,
}: FilterListProps) => {
  if (!tag_title) return null;

  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, error } = useCraneModels();

  const totalPages = Math.ceil((data?.data?.length || 0) / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentModels = data?.data?.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  return (
    <section className="container container-padding-x py-10 md:py-20">
      <div className="space-y-2">
        <Tag>{tag_title.tag}</Tag>
        <HighlightedTitle
          title={tag_title.title}
          highlights={extractHighlightText(tag_title.title)}
        />
      </div>

      <div className="grid md:grid-cols-4 gap-5 mt-7 md:mt-10">
        {/* Mobile */}
        <FilterSheet
          crane_types={crane_types}
          project_types={project_types}
          manufacturers={manufacturers}
        />

        {/* Desktop */}
        <div className="hidden md:block">
          <FilterContent
            crane_types={crane_types}
            project_types={project_types}
            manufacturers={manufacturers}
          />
        </div>

        {isLoading ? (
          <div className="w-full flex flex-col md:col-span-3 justify-center items-center gap-2 text-gray-500">
            <Loader2 className="animate-spin" />
            <span>Fetching crane models...</span>
          </div>
        ) : data?.data?.length > 0 ? (
          <>
            <div className="md:col-span-3 flex md:grid grid-cols-3 gap-3 overflow-x-scroll scrollbar-none h-fit">
              {currentModels?.map((model: ModelProps) => (
                <Card
                  crane_capacity={model.main_section.crane_capacity}
                  image={model.main_section.images[0]}
                  listingType={model.main_section.listingType}
                  max_lifting_height={model.main_section.max_lifting_height}
                  max_working_radius={model.main_section.max_working_radius}
                  title={model.main_section.model_short_name}
                  key={model.id}
                />
              ))}
            </div>
            {currentModels?.length > 6 && (
              <Pagination className="mt-10 md:col-span-4 flex justify-center w-full">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage > 1) {
                          setCurrentPage(currentPage - 1);
                        }
                      }}
                      className={cn(
                        "bg-white text-primary pr-3.5 pl-3 mr-3 rounded-none hover:bg-primary hover:text-white",
                        currentPage === 1
                          ? "pointer-events-none opacity-50"
                          : "",
                      )}
                    />
                  </PaginationItem>

                  {Array.from({ length: totalPages }, (_, index) => {
                    const page = index + 1;

                    return (
                      <PaginationItem>
                        <PaginationLink
                          href="#"
                          isActive={page === currentPage}
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(page);
                          }}
                          className="bg-white text-primary p-3 px-5 h-10 rounded-none hover:bg-primary hover:text-white"
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  })}

                  <PaginationItem>
                    <PaginationNext
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage < totalPages) {
                          setCurrentPage(currentPage + 1);
                        }
                      }}
                      className={cn(
                        "bg-white text-primary pl-3.5 pr-3 ml-2 rounded-none hover:bg-primary hover:text-white",
                        currentPage === totalPages
                          ? "pointer-events-none opacity-50"
                          : "",
                      )}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )}
          </>
        ) : (
          <div className="md:col-span-3 w-full flex flex-col justify-center items-center gap-2 text-gray-500">
            <Info /> No crane models found
          </div>
        )}

        {error && (
          <div className="md:col-span-3 w-full flex flex-col justify-center items-center gap-2 text-gray-500">
            <Info /> Error: {error.message}
          </div>
        )}
      </div>
    </section>
  );
};

export default FilterListSection;

type CardProps = {
  title: string;
  image: MediaProps;
  crane_capacity: number;
  max_working_radius: number;
  max_lifting_height: number;
  listingType: "sale" | "rent" | "both";
};

function Card({
  title,
  image,
  crane_capacity,
  max_working_radius,
  max_lifting_height,
  listingType,
}: CardProps) {
  if (!title || !image) return null;

  return (
    <div className="shrink-0 w-[90%] md:w-auto h-fit">
      <div className="bg-[#F5F5F5] rounded-md flex items-center justify-center p-5 overflow-hidden">
        <StrapiImage
          src={image.url}
          alt={image.alternativeText || title}
          width={200}
          height={200}
          className="hover:scale-110 transition-transform duration-300"
        />
      </div>

      <h3 className="text-lg font-medium mt-5 mb-2">{title}</h3>
      <div>
        <div className="flex items-center gap-2 py-3">
          <div className="size-2 bg-primary rounded-xs shrink-0" />
          <span className="text-sm font-semibold">Crane capacity</span>
          <span className="text-sm text-gray-600">{crane_capacity} Ton</span>
        </div>
        <hr />
        <div className="flex items-center gap-2 py-3">
          <div className="size-2 bg-primary rounded-xs shrink-0" />
          <span className="text-sm font-semibold">Max. working radius</span>
          <span className="text-sm text-gray-600">{max_working_radius}m</span>
        </div>
        <hr />
        <div className="flex items-center gap-2 py-3">
          <div className="size-2 bg-primary rounded-xs shrink-0" />
          <span className="text-sm font-semibold">Max. lifting height</span>
          <span className="text-sm text-gray-600">{max_lifting_height}m</span>
        </div>

        <Button className="w-full mt-2">
          {listingType === "rent" ? "Rent crane" : "Buy crane"}
        </Button>
      </div>
    </div>
  );
}
