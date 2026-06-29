import HighlightedTitle from "@/components/common/highlight-title";
import { StrapiImage } from "@/components/common/strapi-image";
import Tag from "@/components/common/tag";
import { extractHighlightText } from "@/lib/utils";

const SelectionGuideSection = () => {
  return (
    <section className="container container-padding-x py-10 md:py-20 grid md:grid-cols-5 gap-5">
      <StrapiImage
        src="http://localhost:3000/local/unit3.webp"
        alt="worker"
        width={400}
        height={400}
        className="hidden md:block aspect-square min-h-full col-span-2 rounded-md object-cover"
      />

      <div className="space-y-2.5 md:col-span-3 w-full md:w-auto overflow-x-hidden">
        <Tag>Selection guide</Tag>
        <HighlightedTitle
          title="How to choose the right <b>tower crane</b>"
          highlights={extractHighlightText(
            "How to choose the right <b>tower crane</b>",
          )}
          className="max-w-md"
        />
        <p>
          Find the most suitable tower crane by evaluating your project's
          lifting requirements, site conditions, and operational goals.
        </p>

        <StrapiImage
          src="http://localhost:3000/local/unit3.webp"
          alt="worker"
          width={400}
          height={400}
          className="md:hidden my-5 aspect-square rounded-md object-cover"
        />

        <div className="flex w-full gap-3 overflow-x-scroll scrollbar-none mt-10">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
};

export default SelectionGuideSection;

function Card() {
  return (
    <div className="bg-[#f5f5f5] w-60 aspect-[1/0.9] min-h-fit p-5 flex flex-col rounded-md shrink-0">
      <span className="text-secondary text-3xl font-manrope font-medium">
        01
      </span>
      <h5 className="mt-auto font-manrope font-medium text-lg leading-tight">
        Define your load requirements
      </h5>
      <p className="text-[#414651] leading-tight mt-2 text-sm">
        Determine the maximum weight your crane needs to lift safely and
        efficiently throughout the project.
      </p>
    </div>
  );
}
