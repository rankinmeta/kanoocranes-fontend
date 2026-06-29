import { TestimonialCarousel } from "@/components/carousel/testimonail";
import HighlightedTitle from "@/components/common/highlight-title";
import Tag from "@/components/common/tag";
import { extractHighlightText } from "@/lib/utils";

const TestimonialSection = () => {
    return (
        <section className="bg-[#F5F5F5]">
            <div className="container container-padding-x py-10 md:py-16 lg:py-20">
                <div className="space-y-3">
                    <Tag>Testimonials</Tag>
                    <HighlightedTitle
                        title="Trusted by <b>industry leaders</b>"
                        highlights={extractHighlightText(
                            "Trusted by <b>industry leaders</b>"
                        )}
                        className="max-w-lg"
                    />
                </div>

                <TestimonialCarousel />
            </div>
        </section>
    );
};

export default TestimonialSection;
