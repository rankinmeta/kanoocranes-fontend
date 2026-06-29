"use client";

import Circles from "@/components/common/circles";
import HighlightedTitle from "@/components/common/highlight-title";
import Tag from "@/components/common/tag";
import { Button } from "@/components/ui/button";
import { extractHighlightText } from "@/lib/utils";
import gsap from "gsap";
import Link from "next/link";
import { forwardRef, useEffect, useRef, type ReactNode } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EngineeringSolutionsSectionProps } from "@/type";
import { getStrapiURL } from "@/lib/get-strapi-url";

const EngineeringSolutionsSection = ({
    background,
    details,
    engineering_solution_info,
    tag_title,
}: EngineeringSolutionsSectionProps) => {
    const triggerRef = useRef<HTMLDivElement>(null);
    const card1Ref = useRef(null);
    const card2Ref = useRef(null);
    const card3Ref = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!triggerRef.current) return;

        const tl = gsap.timeline({
            defaults: {
                duration: 1,
                ease: "power2.out",
            },
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top bottom-=100",
            },
        });

        tl.to(card1Ref.current, { y: -180 })
            .to(card2Ref.current, { y: -150 }, "<")
            .to(card3Ref.current, { y: -120 }, "<");

        return () => {
            tl.kill();
        };
    }, []);

    if (!tag_title || !engineering_solution_info || !details) return null;

    return (
        <section className="relative">
            <Circles />
            <div className="container container-padding-x py-10 md:py-16 lg:py-20">
                <div className="flex flex-col lg:flex-row justify-between">
                    <div className="space-y-2">
                        <Tag>{tag_title.tag}</Tag>
                        <HighlightedTitle
                            title={tag_title.title}
                            highlights={extractHighlightText(tag_title.title)}
                            className="max-w-md"
                        />
                    </div>

                    <div className="space-y-4 max-w-lg mt-4 lg:mt-0">
                        <ul className="space-y-2">
                            {engineering_solution_info?.infos.map((item) => (
                                <List key={item.id}>{item.label}</List>
                            ))}
                        </ul>

                        {engineering_solution_info?.button && (
                            <Link
                                href={engineering_solution_info.button.href}
                                target={
                                    engineering_solution_info.button.isExternal
                                        ? "_blank"
                                        : "_self"
                                }
                            >
                                <Button
                                    variant="outline"
                                    className="border-secondary text-secondary"
                                >
                                    {engineering_solution_info.button.label}
                                </Button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile */}
            <div className="flex gap-5 container container-padding-x pb-10 lg:hidden w-full overflow-x-scroll scrollbar-none">
                {details.map((item) => (
                    <div
                    key={item.id}
                    className="shrink-0 bg-[#F5F5F5] w-[80%] md:w-1/2 p-6 flex flex-col gap-16 justify-between rounded-sm"
                >
                    <div>
                        <h3 className="text-primary font-medium font-manrope text-4xl">
                            {item.value}
                        </h3>
                        <span className="font-inter text-sm">{item.label}</span>
                    </div>
                    <p>{item.description}</p>
                </div>
                ))}
            </div>

            {/* Desktop */}
            <div
                className="hidden lg:block relative w-full h-80 mt-40"
                style={{
                    backgroundImage: `url(${getStrapiURL() + background?.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "50% 60%",
                }}
            >
                <div ref={triggerRef} className="flex justify-evenly w-full">
                    {details.map((item, i) => (
                        <Card
                            value={item.value}
                            label={item.label}
                            description={item.description}
                            ref={
                                i === 0
                                    ? card1Ref
                                    : i === 1
                                    ? card2Ref
                                    : card3Ref
                            }
                            key={item.id}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EngineeringSolutionsSection;

function List({ children }: { children: ReactNode }) {
    return (
        <li className="flex items-center gap-2">
            <div className="size-2 bg-primary rounded-xs shrink-0" />
            {children}
        </li>
    );
}

const Card = forwardRef<
    HTMLDivElement,
    {
        label: string;
        value: string;
        description: string;
    }
>(({ label, value, description }, ref) => {
    return (
        <div
            ref={ref}
            className="bg-[#F5F5F5] w-100 aspect-2/1.5 p-6 flex flex-col justify-between -translate-y-20 rounded-sm"
        >
            <div>
                <h3 className="text-primary font-medium font-manrope text-4xl">
                    {value}
                </h3>
                <span className="font-inter text-sm">{label}</span>
            </div>
            <p>{description}</p>
        </div>
    );
});
