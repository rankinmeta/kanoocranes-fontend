import HighlightedTitle from "@/components/common/highlight-title";
import { StrapiImage } from "@/components/common/strapi-image";
import Tag from "@/components/common/tag";
import { extractHighlightText } from "@/lib/utils";

const ProfessionalRentalSection = () => {
  return (
    <section className="container container-padding-x py-10 md:py-20 grid md:grid-cols-5 gap-5 items-center">
      <StrapiImage
        src="http://localhost:3000/local/unit3.webp"
        alt="worker"
        width={400}
        height={400}
        className="hidden md:block aspect-square col-span-2 rounded-md object-cover"
      />

      <div className="space-y-2.5 md:col-span-3">
        <Tag>Professional Rental Services</Tag>
        <HighlightedTitle
          title="Reliable tower crane support for <b>every project</b>"
          highlights={extractHighlightText(
            "Reliable tower crane support for <b>every project</b>",
          )}
          className="max-w-md"
        />

        <StrapiImage
          src="http://localhost:3000/local/unit3.webp"
          alt="worker"
          width={400}
          height={400}
          className="md:hidden my-5 aspect-square rounded-md object-cover"
        />

        <div className="mt-6">
          <div className="grid md:grid-cols-5 gap-3 md:gap-5 border-b py-3">
            <span className="md:col-span-2 text-primary text-lg">
              Flexible Rental Terms
            </span>
            <p className="md:col-span-3 text-[#414651]">
              Solutions tailored for both short-term and long-term project
              requirements.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-3 md:gap-5 border-b py-3">
            <span className="md:col-span-2 text-primary text-lg">
              Flexible Rental Terms
            </span>
            <p className="md:col-span-3 text-[#414651]">
              Solutions tailored for both short-term and long-term project
              requirements.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-3 md:gap-5 border-b py-3">
            <span className="md:col-span-2 text-primary text-lg">
              Modern Equipment
            </span>
            <p className="md:col-span-3 text-[#414651]">
              Solutions tailored for both short-term and long-term project
              requirements.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-3 md:gap-5 py-3">
            <span className="md:col-span-2 text-primary text-lg">
              Reliable Operations
            </span>
            <p className="md:col-span-3 text-[#414651]">
              Solutions tailored for both short-term and long-term project
              requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalRentalSection;
