import HighlightedTitle from "@/components/common/highlight-title";
import Mail from "@/components/icons/mail";
import Phone from "@/components/icons/phone";
import PinDrop from "@/components/icons/pin-drop";
import Whatsapp from "@/components/icons/whatsapp";
import { extractHighlightText } from "@/lib/utils";
import { type ReactNode } from "react";

const Section2 = () => {
    return (
        <section className="container container-padding-x py-10 md:py-20 grid md:grid-cols-5 gap-8 md:gap-5">
            <div className="md:max-w-sm space-y-3 md:col-span-2">
                <HighlightedTitle
                    title="Reach us <b>your way</b>"
                    highlights={extractHighlightText(
                        "Reach us <b>your way</b>"
                    )}
                    className="font-manrope"
                />
                <p className="text-[#414651]">
                    Choose the most convenient way to connect with our team for
                    immediate assistance.
                </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-3 md:col-span-3">
                <Card
                    label="Phone Number"
                    value="+971 543 789 3245"
                    icon={<Phone />}
                />
                <Card
                    label="Email Address"
                    value="support@kanoocranes.com"
                    icon={<Mail />}
                />
                <Card
                    label="WhatsApp"
                    value="+971 432 786 1234"
                    icon={<Whatsapp />}
                />
                <Card
                    label="Address"
                    value="Hamriya Free Zone, UAE"
                    icon={<PinDrop />}
                />
            </div>
        </section>
    );
};

export default Section2;

function Card({
    icon,
    label,
    value,
}: {
    label: string;
    value: string;
    icon: ReactNode;
}) {
    return (
        <div className="bg-[#F5F5F5] p-4 rounded-md flex items-center gap-2">
            {icon}
            <div>
                <span className="text-[#717680] text-sm">{label}</span>
                <p className="font-medium">{value}</p>
            </div>
        </div>
    );
}
