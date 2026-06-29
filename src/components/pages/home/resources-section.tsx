import HighlightedTitle from "@/components/common/highlight-title";
import Tag from "@/components/common/tag";
import { Button } from "@/components/ui/button";
import { extractHighlightText } from "@/lib/utils";
import ResourceCard from "../resource-hub/resource-card";
import Link from "next/link";

const ResourcesSection = () => {
  return (
    <section className="bg-[#F5F5F5]">
      <div className="container container-padding-x py-10 md:py-16 lg:py-20">
        <div className="flex justify-between items-end">
          <div className="space-y-3">
            <Tag>Resources</Tag>
            <HighlightedTitle
              title="Crane operations & <b>resources</b>"
              highlights={extractHighlightText(
                "Crane operations & <b>resources</b>",
              )}
              className="max-w-lg"
            />
          </div>
          <Link href={"/resource-hub"} className="hidden md:block">
            <Button className="bg-transparent border-secondary text-secondary hover:bg-secondary hover:text-white">
              View all resources
            </Button>
          </Link>
        </div>

        <div className="flex lg:grid grid-cols-3 gap-5 mt-7 mb-5 md:mb-0 lg:mb-5 lg:mt-14 overflow-x-scroll scrollbar-none">
          <ResourceCard />
          <ResourceCard />
          <ResourceCard />
        </div>

        <Link href={"/resource-hub"} className="md:hidden">
          <Button className="w-full bg-transparent border-secondary text-secondary hover:bg-secondary hover:text-white">
            View all resources
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ResourcesSection;
