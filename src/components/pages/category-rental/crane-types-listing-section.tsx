import HighlightedTitle from "@/components/common/highlight-title";
import { extractHighlightText } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type CraneTypesListingSectionProps = {
  crane_types_listing: {
    id: number;
    crane_type: string;
    crane_models: {
      id: number;
      model_name: string;
      model_slug: string;
      main_section: {
        id: number;
        model_short_name: string;
      };
    }[];
  }[];
};

const CraneTypesListingSection = ({
  crane_types_listing,
}: CraneTypesListingSectionProps) => {
  if (!crane_types_listing || crane_types_listing.length === 0) return null;
  return (
    <section className="bg-[#f5f5f5]">
      <div className="container container-padding-x py-10 md:py-20">
        <HighlightedTitle
          title="Crane Types"
          highlights={extractHighlightText("Crane Types")}
          className="max-w-md"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {crane_types_listing.map((crane) => (
            <div className="rounded-md overflow-hidden" key={crane.id}>
              <div className="bg-secondary text-white py-2 px-3">
                {crane.crane_type}
              </div>
              <div className="grid md:grid-cols-2 gap-4 bg-white">
                {crane.crane_models.map((model) => (
                  <Link
                    href={`/models/${model.model_slug}`}
                    key={model.id}
                    className="rounded-md p-2 text-sm flex items-center gap-2"
                  >
                    <Image
                      src="/red-crane.webp"
                      alt="red crane"
                      width={30}
                      height={30}
                    />
                    <span className="font-medium opacity-80">
                      {model.main_section.model_short_name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CraneTypesListingSection;
