import HighlightedTitle from "@/components/common/highlight-title";
import { StrapiImage } from "@/components/common/strapi-image";
import Tag from "@/components/common/tag";
import { extractHighlightText } from "@/lib/utils";

const Section2 = () => {
  return (
    <section className="bg-[#f5f5f5]">
      <div className="container container-padding-x py-10 md:py-20 grid md:grid-cols-5 gap-5 items-center">
        <StrapiImage
          src="http://localhost:3000/local/unit3.webp"
          alt="worker"
          width={400}
          height={400}
          className="hidden md:block order-2 ms-auto aspect-[1/0.7] col-span-2 rounded-md object-cover"
        />

        <div className="space-y-2.5 md:col-span-3">
          <Tag>Crane Engineering Services</Tag>
          <HighlightedTitle
            title="Crane engineering & lift planning expertise"
            highlights={extractHighlightText(
              "Crane engineering & lift planning expertise",
            )}
            className="max-w-sm"
          />

          <StrapiImage
            src="http://localhost:3000/local/unit3.webp"
            alt="worker"
            width={400}
            height={400}
            className="md:hidden my-5 aspect-[1/0.7] rounded-md object-cover"
          />

          <p className="text-[#414651] max-w-2xl">
            Complex lifting operations require more than the right equipment
            they require the right engineering approach. Our specialists work
            closely with project teams to evaluate site conditions, lifting
            requirements, operational risks, and crane configurations before
            execution begins. Through detailed planning, technical analysis, and
            engineering support, we help reduce risks, improve efficiency, and
            ensure every lift is performed safely and effectively.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section2;
