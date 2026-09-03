"use client";

import HighlightedTitle from "@/components/common/highlight-title";
import { extractHighlightText } from "@/lib/utils";
import { ResourceSelect } from "./resource-select";
import ResourceListSection from "./resource-list-section";
import Book from "@/components/icons/book";
import { Button } from "@/components/ui/button";
import type { ResourceCardProps } from "@/type";
import { useState } from "react";

type ResourcesSectionProps = {
  resources_list_title: string;
  banner_title: string;
  banner_description: string;
  resources: ResourceCardProps[];
  resourceTypes: {
    id: number;
    type: string;
    slug: string;
  }[];
  filter?: string;
};

const ResourcesSection = ({
  banner_description,
  banner_title,
  resources_list_title,
  resources,
  resourceTypes,
  filter,
}: ResourcesSectionProps) => {
  const [selectedType, setSelectedType] = useState(
    (resourceTypes.findIndex((r) => r.slug === filter) > 0
      ? filter
      : "all-resources") || "all-resources",
  );

  const filteredResources =
    selectedType === "all-resources"
      ? resources
      : resources.filter(
          (resource) => resource.resource_type.slug === selectedType,
        );

  return (
    <section className="bg-[#F5F5F5]">
      <div className="container container-padding-x py-10 md:py-20">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <HighlightedTitle
            title={resources_list_title}
            highlights={extractHighlightText(resources_list_title)}
          />

          <ResourceSelect
            resourceTypes={resourceTypes}
            onValueChange={setSelectedType}
            value={selectedType}
          />
        </div>

        <ResourceListSection resources={filteredResources} />

        <div className="bg-secondary mt-10 text-white p-8 md:p-6 rounded-md flex flex-col md:flex-row justify-between md:items-center">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <Book />
            <div className="space-y-2 max-w-2xl">
              <h3 className="text-3xl font-manrope">{banner_title}</h3>
              <p className="text-sm">{banner_description}</p>
            </div>
          </div>

          <Button className="w-fit mt-4 md:mt-0">Unlock Resources</Button>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
