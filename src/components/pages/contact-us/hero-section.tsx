import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LinkProps } from "@/type";
import Link from "next/link";

type HeroSectionProps = {
    title: string;
    description: string;
    TEMP_hide?: boolean;
    button1?: LinkProps;
    button2?: LinkProps;
    className?: string;
};

const HeroSection = ({
    title,
    description,
    button1,
    button2,
    className,
}: HeroSectionProps) => {
    return (
        <section className="bg-secondary relative z-60 -mt-26">
            <div className="container container-padding-x pt-32 pb-10 md:pb-40 md:pt-40 flex flex-col-reverse md:flex-row justify-between md:justify-center lg:justify-between gap-10 md:gap-0 md:items-center">
                <div className={cn("text-white max-w-lg space-y-4", className)}>
                    <h1 className="text-3xl md:text-5xl font-manrope">{title}</h1>
                    <p className="md:text-sm">{description}</p>

                    {(button1 || button2) && (<div className="flex flex-col md:flex-row gap-3 mt-10 md:mt-6">
                        {button1 && (
                            <Link
                                href={button1.href}
                                target={button1.isExternal ? "_blank" : "_self"}
                            >
                                <Button className="w-full md:w-auto">{button1.label}</Button>
                            </Link>
                        )}
                        {button2 && (
                            <Link
                                href={button2.href}
                                target={button2.isExternal ? "_blank" : "_self"}
                            >
                                <Button className="bg-white text-primary hover:text-white w-full md:w-auto">
                                    {button2.label}
                                </Button>
                            </Link>
                        )}
                    </div>)}
                </div>

                {/* Circles */}
                <div className="hidden relative lg:grid grid-cols-6 gap-2 gap-y-3 after:bg-linear-to-r after:from-transparent after:to-secondary after:absolute after:inset-0">
                    {Array(18)
                        .fill(0)
                        .map((_, i) => (
                            <div
                                key={i}
                                className="size-14 bg-[#03297a] rounded-full"
                            ></div>
                        ))}
                </div>
                
                {/* Circles */}
                <div className="relative md:hidden grid grid-cols-6 gap-2 gap-y-3 after:bg-linear-to-r after:from-transparent after:to-secondary after:absolute after:inset-0">
                    {Array(12)
                        .fill(0)
                        .map((_, i) => (
                            <div
                                key={i}
                                className="w-full aspect-square bg-[#03297a] rounded-full"
                            ></div>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
