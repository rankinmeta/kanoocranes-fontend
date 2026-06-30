import { TestimonialCarousel } from "@/components/carousel/testimonail";
import HighlightedTitle from "@/components/common/highlight-title";
import Tag from "@/components/common/tag";
import { extractHighlightText } from "@/lib/utils";
import { MediaProps, TagTitleProps } from "@/type";

type TestimonialSectionProps = {
  id: number;
  tag_title: TagTitleProps;
  testimonials: {
    id: number;
    image: MediaProps;
    testimonial: string;
    name: string;
    role: string | null;
  }[];
};

const TestimonialSection = ({
  tag_title,
  testimonials,
}: TestimonialSectionProps) => {
  if (!tag_title || !testimonials) return null;

  return (
    <section className="bg-[#F5F5F5]">
      <div className="container container-padding-x py-10 md:py-16 lg:py-20">
        <div className="space-y-3">
          <Tag>{tag_title.tag}</Tag>
          <HighlightedTitle
            title={tag_title.title}
            highlights={extractHighlightText(tag_title.title)}
            className="max-w-lg"
          />
        </div>

        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </section>
  );
};

export default TestimonialSection;
