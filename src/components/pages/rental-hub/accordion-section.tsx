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

const AccordionSection = () => {
    return (
        <section className="relative bg-secondary py-10 md:py-16 lg:py-20 text-white">
            {/* Circles */}
            <div className="hidden lg:grid absolute top-12 right-0 grid-cols-6 gap-2 after:absolute after:inset-0 after:bg-linear-to-r after:from-transparent after:to-secondary after:z-10">
                {Array(18)
                    .fill(0)
                    .map((_, i) => (
                        <div
                            key={i}
                            className="size-12 bg-[#042A7B] rounded-full"
                        ></div>
                    ))}
            </div>
            <div className="relative container container-padding-x z-10">
                <div className="space-y-2.5">
                    <Tag>Rental Benefits</Tag>
                    <HighlightedTitle
                        title="Why rent with kanoo cranes"
                        highlights={extractHighlightText(
                            "Why rent with kanoo cranes"
                        )}
                    />
                </div>

                <div className="grid md:grid-cols-2 gap-5 mt-14">
                    <div className="relative">
                        <StrapiImage
                            src="http://localhost:3000/local/crane1.png"
                            alt="Rental Benefits 1"
                            width={400}
                            height={400}
                            className="relative size-96 mx-auto md:mx-0 rounded-full object-cover z-10"
                        />
                        <div className="hidden md:block absolute size-72 bg-linear-to-r from-[#042A7B] to-secondary rounded-full right-10 top-1/2 -translate-y-1/2"></div>
                    </div>

                    <Accordion type="single" className="border-none">
                        <AccordionItem value="shipping">
                            <AccordionTrigger>
                                Well-maintained fleet
                            </AccordionTrigger>
                            <AccordionContent>
                                Regular inspections and maintenance ensure
                                equipment reliability and performance.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="returns">
                            <AccordionTrigger>
                                What is your return policy?
                            </AccordionTrigger>
                            <AccordionContent>
                                Returns accepted within 30 days. Items must be
                                unused and in original packaging. Refunds
                                processed within 5-7 business days.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="support">
                            <AccordionTrigger>
                                How can I contact customer support?
                            </AccordionTrigger>
                            <AccordionContent>
                                Reach us via email, live chat, or phone. We
                                respond within 24 hours during business days.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default AccordionSection;
