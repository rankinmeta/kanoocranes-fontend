"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { StrapiImage } from "@/components/common/strapi-image";
import { HighlightCardProps } from "@/type";
import { getImage } from "@/lib/utils";

const MAX_VISIBLE = 2;

export default function HighlightCard({
    highlights,
}: Readonly<{ highlights: HighlightCardProps[] }>) {
    const [cards, setCards] = useState(highlights);
    const [leavingId, setLeavingId] = useState<number | null>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            const first = cards[0];

            if (!first) return;

            // animate top card out
            setLeavingId(first.id);

            // after animation move it to bottom
            setTimeout(() => {
                setCards((prev) => {
                    const cloned = [...prev];
                    const shifted = cloned.shift();

                    if (!shifted) return prev;

                    return [...cloned, shifted];
                });

                setLeavingId(null);
            }, 500);
        }, 2500);

        return () => clearInterval(interval);
    }, [cards]);

    return (
        <div className="relative w-full h-24">
            {cards.map((highlight, index) => {
                const isLeaving = leavingId === highlight.id;

                const hidden = index >= MAX_VISIBLE;

                return (
                    <div
                        key={highlight.id}
                        className="absolute left-0 top-0 w-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] rounded-md backdrop-blur-xl"
                        style={{
                            zIndex: 100 - index,

                            transform: isLeaving
                                ? `
                    translateY(-50px)
                    scale(1)
                  `
                                : `
                    translateY(${index * 18}px)
                    scale(${1 - index * 0.05})
                  `,

                            opacity: hidden
                                ? 0
                                : isLeaving
                                ? 0
                                : 1 - index * 0.15,

                            pointerEvents: hidden ? "none" : "auto",
                        }}
                    >
                        <div className="rounded-md border border-white/20 bg-white/10 p-3 shadow-2xl">
                            <div className="flex items-center gap-3">
                                <StrapiImage
                                    src={getImage({
                                        local: "http://localhost:3000/local/crane1.png",
                                        prod: highlight.image.url,
                                    })}
                                    alt={
                                        highlight.image.alternativeText ||
                                        "crane"
                                    }
                                    width={100}
                                    height={100}
                                    className="rounded-md aspect-[2/1.3] object-cover"
                                />
                                <div className="space-y-1">
                                    <h3 className="text-sm text-white">
                                        {highlight.title}
                                    </h3>

                                    <Link
                                        href={highlight.link.href}
                                        target={
                                            highlight.link.isExternal
                                                ? "_blank"
                                                : "_self"
                                        }
                                        className="text-primary flex items-center gap-1 text-sm font-semibold"
                                    >
                                        Read more <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
