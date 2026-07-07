import HighlightedTitle from "@/components/common/highlight-title";
import { StrapiImage } from "@/components/common/strapi-image";
import Tag from "@/components/common/tag";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { extractHighlightText } from "@/lib/utils";
import type { MediaProps, TagTitleProps } from "@/type";

type AccordionSectionProps = {
  tag_title: TagTitleProps;
  image: MediaProps;
  accordion: {
    id: number;
    question: string;
    answer: string;
  }[];
};

const AccordionSection = ({
  accordion,
  image,
  tag_title,
}: AccordionSectionProps) => {
  if (!tag_title || !accordion || !image) return null;

  return (
    <section className="relative bg-secondary py-10 md:py-16 lg:py-20 text-white">
      {/* Circles */}
      <div className="hidden lg:grid absolute top-12 right-0 grid-cols-6 gap-2 after:absolute after:inset-0 after:bg-linear-to-r after:from-transparent after:to-secondary after:z-10">
        {Array(18)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="size-12 bg-[#042A7B] rounded-full"></div>
          ))}
      </div>
      <div className="relative container container-padding-x z-10">
        <div className="space-y-2.5">
          <Tag>{tag_title.tag}</Tag>
          <HighlightedTitle
            title={tag_title.title}
            highlights={extractHighlightText(tag_title.title)}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-5 mt-14">
          <div className="relative">
            <StrapiImage
              src={image.url}
              alt={image.alternativeText || ""}
              width={400}
              height={400}
              className="relative size-96 mx-auto md:mx-0 rounded-full object-cover z-10"
            />
            <div className="hidden md:block absolute size-72 bg-linear-to-r from-[#042A7B] to-secondary rounded-full right-10 top-1/2 -translate-y-1/2"></div>
          </div>

          <Accordion type="single" className="border-none">
            {accordion.map((item) => (
              <AccordionItem value={item.id.toString()} key={item.id}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default AccordionSection;
