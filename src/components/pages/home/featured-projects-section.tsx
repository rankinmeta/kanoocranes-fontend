"use client";

import HighlightedTitle from "@/components/common/highlight-title";
import { StrapiImage } from "@/components/common/strapi-image";
import Tag from "@/components/common/tag";
import { extractHighlightText } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import UAEMap from "@/components/pages/home/uae-map";
import { useMemo, useState } from "react";
import { LinkProps, MediaProps, TagTitleProps } from "@/type";

type FeaturedProjectsSectionProps = {
    id: number;
    tag_title: TagTitleProps;
    description: string;
    projects: {
        image: MediaProps;
        title: string;
        link: LinkProps | null;
        details: {
            label: string;
            description: string;
        }[] | null;
        country: string;
    }[]
}

const FeaturedProjectsSection = ({
    tag_title,
    description,
    projects
}: FeaturedProjectsSectionProps) => {
    const [selected, setSelected] = useState(projects[0].country);

    const countries = useMemo(() => {
        return projects.map((item) => item.country);
    }, [projects]);

    const activeIndex = projects.findIndex((item) => item.country === selected);

    if(!tag_title || !projects || projects.length === 0) return null;

    return (
        <section className="container container-padding-x py-10 md:py-16 lg:py-20 grid lg:grid-cols-2 gap-10">
            <div className="space-y-10">
                <div className="space-y-3">
                    <Tag>{tag_title.tag}</Tag>
                    <HighlightedTitle
                        title={tag_title.title}
                        highlights={extractHighlightText(
                            tag_title.title
                        )}
                        className="max-w-md"
                    />
                    <p className="mt-7">
                        {description}
                    </p>
                </div>

                <div className="flex lg:hidden justify-center">
                <UAEMap countries={countries} setSelected={setSelected} />
            </div>

                {/* Card */}
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${activeIndex * 100}%)`,
                        }}
                    >
                        {projects.map((d, i) => (
                            <div key={i} className="w-full shrink-0 md:pr-4">
                                <Card active={d} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="hidden lg:flex justify-end items-end">
                <UAEMap countries={countries} setSelected={setSelected} />
            </div>
        </section>
    );
};

export default FeaturedProjectsSection;

function Card({ active }: { active: FeaturedProjectsSectionProps["projects"][0] }) {
    return (
        <div className="bg-[#F5F5F5] rounded-md p-4 px-6 shrink-0 w-full">
            <div className="flex items-center gap-3">
                <StrapiImage
                    src={active.image.url}
                    alt={active.image.alternativeText || "crane"}
                    width={100}
                    height={100}
                    className="rounded-md aspect-[2/1.3] object-cover"
                />
                <div className="space-y-2">
                    <h3 className="max-w-48 font-medium">{active?.title}</h3>

                    {active.link && <Link
                        href={active?.link.href || "#"}
                        className="text-primary flex items-center gap-1 text-sm font-semibold"
                        target={active.link.isExternal ? "_blank" : "_self"}
                    >
                        {active?.link.label} <ArrowRight size={16} />
                    </Link>}
                </div>
            </div>

            {active.details && <ul className="pt-4">
                {active.details.map((data) => (
                    <li
                        key={data.label}
                        className="border-b border-[#D5D7DA] pb-4 pt-3 last:border-none"
                    >
                        <div className="flex items-center gap-2">
                            <div className="size-2 bg-primary" />
                            <span className="font-medium">{data.label}</span>
                        </div>
                        <span className="text-[#414651]">{data.description}</span>
                    </li>
                ))}
            </ul>}
        </div>
    );
}
