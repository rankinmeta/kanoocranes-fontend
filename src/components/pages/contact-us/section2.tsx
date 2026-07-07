import HighlightedTitle from "@/components/common/highlight-title";
import Mail from "@/components/icons/mail";
import Phone from "@/components/icons/phone";
import PinDrop from "@/components/icons/pin-drop";
import Whatsapp from "@/components/icons/whatsapp";
import { extractHighlightText } from "@/lib/utils";
import { type ReactNode } from "react";

type Section2Props = {
    id: number;
    title: string;
    description: string;
    phone: string;
    email: string;
    whatsapp: string;
    address: string;
}

const Section2 = ({address,description,email,phone,whatsapp,title}: Section2Props) => {

    return (
        <section className="container container-padding-x py-10 md:py-20 grid md:grid-cols-5 gap-8 md:gap-5">
            <div className="md:max-w-sm space-y-3 md:col-span-2">
                <HighlightedTitle
                    title={title}
                    highlights={extractHighlightText(
                        title
                    )}
                    className="font-manrope"
                />
                <p className="text-[#414651]">
                    {description}
                </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-3 md:col-span-3">
                {phone && <Card
                    label="Phone Number"
                    value={phone}
                    icon={<Phone />}
                />}
                {email && <Card
                    label="Email Address"
                    value={email}
                    icon={<Mail />}
                />}
                {whatsapp && <Card
                    label="WhatsApp"
                    value={whatsapp}
                    icon={<Whatsapp />}
                />}
                {address && <Card
                    label="Address"
                    value={address}
                    icon={<PinDrop />}
                />}
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
