import HighlightedTitle from "@/components/common/highlight-title";
import Tag from "@/components/common/tag";
import Automation from "@/components/icons/automation";
import Payments from "@/components/icons/payments";
import Verified from "@/components/icons/verified";
import { extractHighlightText } from "@/lib/utils";
import { ReactNode } from "react";

const Section2 = ({
    title = "Built for long-term <b>performance</b>",
    description = `Investing in crane ownership provides greater operational
                    control, improved equipment availability, and long-term
                    value for your business. Kanoo Cranes offers premium lifting
                    equipment from globally trusted manufacturers, supported by
                    expert consultation and after-sales service.`,
}: {
    title?: string;
    description?: string;
}) => {
    return (
        <section className="bg-[#F5F5F5]">
            <div className="container container-padding-x py-10 md:py-16 lg:py-20 grid md:grid-cols-4 gap-3">
                <div className="space-y-2 md:col-span-2">
                    <Tag>Why buy from kanoo cranes</Tag>
                    <HighlightedTitle
                        title={title}
                        highlights={extractHighlightText(title)}
                        className="max-w-md"
                    />
                </div>
                <p className="col-span-2">{description}</p>

                {/* Cards */}
                <div className="flex md:grid grid-cols-2 lg:grid-cols-4 md:col-span-4 gap-3 mt-5 md:mt-10 overflow-x-scroll scrollbar-none">
                    <Card
                        title="Premium crane portfolio"
                        description="Choose from tower cranes, mobile cranes, spider cranes, and
                specialized lifting equipment designed for diverse project
                requirements."
                        icon={<Automation />}
                    />
                    <Card
                        title="Long-term return on Investment"
                        description="Reduce recurring rental costs while building valuable business assets that support future growth and operational flexibility."
                        icon={<Payments />}
                    />
                    <Card
                        title="Trusted global brands"
                        description="Access industry-leading equipment from renowned manufacturers including JASO, Maeda, Grove, and other trusted partners."
                        icon={<Verified />}
                    />
                    <Card
                        title="Engineering & technical support"
                        description="Benefit from expert guidance, installation assistance, maintenance planning, and ongoing technical support throughout the equipment lifecycle."
                        icon={<Automation />}
                    />
                </div>
            </div>
        </section>
    );
};

export default Section2;

function Card({
    icon,
    title,
    description,
}: {
    icon: ReactNode;
    title: string;
    description: string;
}) {
    return (
        <div className="shrink-0 w-[90%] md:w-auto bg-white rounded-md p-6 space-y-2">
            {icon}
            <h4 className="text-lg font-manrope font-medium mt-5 leading-6">
                {title}
            </h4>
            <p className="text-sm text-[#414651]">{description}</p>
        </div>
    );
}
