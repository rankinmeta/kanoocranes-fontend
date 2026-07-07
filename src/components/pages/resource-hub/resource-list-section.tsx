"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import ResourceCard from "./resource-card";
import { ResourceCardProps } from "@/type";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { CircleAlert } from "lucide-react";

const ITEMS_PER_PAGE = 9;

const ResourceListSection = ({
  resources,
}: {
  resources: ResourceCardProps[];
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  if (!resources?.length)
    return (
      <div className="flex items-center justify-center py-20 gap-2 text-gray-500">
        <CircleAlert /> No resources found
      </div>
    );

  const totalPages = Math.ceil(resources.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentResources = resources.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  return (
    <div>
      <div className="grid md:grid-cols-3 gap-5 mt-7 md:mt-14">
        {currentResources.map((resource) => (
          <ResourceCard
            key={resource.id}
            resource={resource}
            className="w-full md:w-auto"
          />
        ))}
      </div>

      <Pagination className="mt-10">
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
                currentPage === 1 ? "pointer-events-none opacity-50" : "",
              )}
            />
          </PaginationItem>

          {Array.from({ length: totalPages }, (_, index) => {
            const page = index + 1;

            return (
              <PaginationItem key={page}>
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
    </div>
  );
};

export default ResourceListSection;
