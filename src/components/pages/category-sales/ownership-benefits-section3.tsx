import HighlightedTitle from "@/components/common/highlight-title";
import { StrapiImage } from "@/components/common/strapi-image";
import Tag from "@/components/common/tag";
import { extractHighlightText } from "@/lib/utils";

const OwnershipBenefitsSection3 = () => {
  return (
    <section className="relative bg-secondary text-white">
      {/* Circles */}
      <div className="absolute top-7 right-0 hidden md:grid grid-cols-4 gap-2 after:absolute after:inset-0 after:bg-linear-to-r after:from-transparent after:to-secondary after:z-10">
        {Array(12)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="size-14 bg-[#03297a] rounded-full"></div>
          ))}
      </div>

      <div className="relative z-10 container container-padding-x py-10 md:py-20 grid md:grid-cols-5 gap-5 items-center">
        <StrapiImage
          src="http://localhost:3000/local/unit3.webp"
          alt="worker"
          width={400}
          height={400}
          className="hidden md:block aspect-[1/0.7] col-span-2 rounded-md object-cover"
        />

        <div className="md:col-span-3">
          <div className="space-y-2.5">
            <Tag className="bg-white">Ownership benefits</Tag>
            <HighlightedTitle
              title="The Long-term value of tower crane ownership"
              highlights={extractHighlightText(
                "The Long-term value of tower crane ownership",
              )}
              className="max-w-lg"
            />

            <StrapiImage
              src="http://localhost:3000/local/unit3.webp"
              alt="worker"
              width={400}
              height={400}
              className="aspect-[1/0.7] md:hidden my-5 rounded-md object-cover"
            />

            <p className="max-w-xl">
              Owning a tower crane offers significant operational and financial
              benefits. Businesses gain greater control over project schedules,
              reduce long-term rental costs, and build valuable equipment
              assets. Combined with proper maintenance and engineering support,
              tower crane ownership can improve productivity while delivering
              strong long-term return on investment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnershipBenefitsSection3;
