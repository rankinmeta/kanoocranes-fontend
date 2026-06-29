import { StrapiImage } from "@/components/common/strapi-image";
import { Marquee } from "@/components/ui/marquee";
import { LogoMarqueeProps } from "@/type";

const BrandCard = ({ img }: { img: string }) => {
    return (
        <figure className="relative h-fit overflow-hidden p-2">
            <StrapiImage src={img} alt="Logo" width={150} height={150} />
        </figure>
    );
};

export function LogoMarquee({
    partners_section,
}: Readonly<{ partners_section: LogoMarqueeProps }>) {
    if (!partners_section || partners_section.logo.length === 0) return null;

    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-secondary h-32">
            <Marquee pauseOnHover className="[--duration:20s] w-full">
                {partners_section.logo.map((partner) => (
                    <BrandCard key={partner.id} img={partner.url} />
                ))}
            </Marquee>

            <div className="from-secondary pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
            <div className="from-secondary pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
        </div>
    );
}
