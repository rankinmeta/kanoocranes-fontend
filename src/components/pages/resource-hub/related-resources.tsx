import { ResourcesCarousel } from "@/components/carousel/resources";
import HighlightedTitle from "@/components/common/highlight-title";
import { Button } from "@/components/ui/button";
import { extractHighlightText } from "@/lib/utils";
import Link from "next/link";

const RelatedResources = () => {
  return (
    <section className="bg-[#F5F5F5]">
      <div className="container container-padding-x py-10 md:py-20">
        <HighlightedTitle
          title="Related <b>resources</b>"
          highlights={extractHighlightText("Related <b>resources</b>")}
        />

        <ResourcesCarousel />

        <Link href="/resource-hub" className="mt-5 md:hidden">
          <Button className="bg-transparent text-secondary border-secondary w-full hover:text-white hover:bg-secondary">
            View all resources
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default RelatedResources;
