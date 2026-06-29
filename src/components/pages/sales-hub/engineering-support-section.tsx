import HighlightedTitle from "@/components/common/highlight-title";
import { StrapiImage } from "@/components/common/strapi-image";
import Tag from "@/components/common/tag";
import Handshake from "@/components/icons/handshake";
import Support from "@/components/icons/support";
import Towing from "@/components/icons/towing";
import Wire from "@/components/icons/wire";
import { extractHighlightText } from "@/lib/utils";
import { type ReactNode } from "react";

const EngineeringSupportSection = () => {
    return (
        <section className="bg-[#F5F5F5]">
            <div className="container container-padding-x py-10 md:py-16 lg:py-20 grid md:grid-cols-2 gap-5">
                <div className="flex flex-col space-y-3">
                    <Tag>Engineering support</Tag>
                    <HighlightedTitle
                        title="Support beyond <b>equipment delivery</b>"
                        highlights={extractHighlightText(
                            "Support beyond <b>equipment delivery</b>"
                        )}
                        className="max-w-md"
                    />
                    <p className="text-[#414651]">
                        From installation to long-term maintenance, our
                        engineering team provides the expertise and technical
                        guidance needed to maximize equipment performance and
                        operational efficiency.
                    </p>

                    <StrapiImage
                    src="http://localhost:3000/local/unit1.webp"
                    alt="Unit"
                    width={500}
                    height={500}
                    className="md:hidden mt-5 h-full rounded-md object-cover"
                />

                    <div className="grid md:grid-cols-2 gap-3 mt-5 md:mt-10">
                        <Card
                            icon={<Handshake />}
                            title="Technical Consultation"
                        />
                        <Card icon={<Towing />} title="Lifecycle Support" />
                        <Card
                            icon={<Wire />}
                            title="Installation & commissioning"
                        />
                        <Card
                            icon={<Support />}
                            title="Technical Consultation"
                        />
                    </div>
                </div>

                <StrapiImage
                    src="http://localhost:3000/local/unit1.webp"
                    alt="Unit"
                    width={500}
                    height={500}
                    className="hidden md:block h-full rounded-md object-cover justify-self-end"
                />
            </div>
        </section>
    );
};

export default EngineeringSupportSection;

function Card({ icon, title }: { icon: ReactNode; title: string }) {
    return (
        <div className="flex md:flex-col gap-3 md:gap-2 bg-white rounded-md p-5">
            {icon}
            <h5 className="font-manrope font-medium">{title}</h5>
        </div>
    );
}
