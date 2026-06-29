import HighlightedTitle from "@/components/common/highlight-title";
import { StrapiImage } from "@/components/common/strapi-image";
import Tag from "@/components/common/tag";
import { cn, extractHighlightText } from "@/lib/utils";

const CardsSection = () => {
  return (
    <section className="relative container container-padding-x py-10 md:py-20 space-y-10">
      <Card />
      <Card reversed />
      <Card />
    </section>
  );
};

export default CardsSection;

function Card({ reversed = false }: { reversed?: boolean }) {
  return (
    <div className="sticky top-28 bg-[#f5f5f5] rounded-md grid md:grid-cols-5 gap-5 items-center p-6">
      <StrapiImage
        src="http://localhost:3000/local/unit1.webp"
        alt="crane"
        width={400}
        height={400}
        className={cn(
          "hidden md:block aspect-[1/0.7] object-cover col-span-2 rounded-md",
          reversed && "order-2 ms-auto",
        )}
      />

      <div className="col-span-3 space-y-2.5">
        <Tag>Technical Planning</Tag>
        <HighlightedTitle
          title="Every successful lift Starts <b>with a plan</b>"
          highlights={extractHighlightText(
            "Every successful lift Starts <b>with a plan</b>",
          )}
          className="text-3xl! max-w-xs"
        />

        <StrapiImage
          src="http://localhost:3000/local/unit1.webp"
          alt="crane"
          width={400}
          height={400}
          className={cn(
            "md:hidden aspect-[1/0.7] my-5 object-cover rounded-md",
            reversed && "order-2 ms-auto",
          )}
        />

        <p className="text-[#414651]">
          Lift planning is critical for managing complex operations safely and
          efficiently. Our engineers analyze load weights, lifting paths, crane
          capacities, environmental conditions, and project constraints to
          develop comprehensive lifting strategies. By identifying risks early
          and optimizing operational workflows, we help clients improve safety,
          reduce downtime, and enhance project performance.
        </p>
      </div>
    </div>
  );
}
