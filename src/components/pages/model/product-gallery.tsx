"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { StrapiImage } from "@/components/common/strapi-image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Props {
    images: string[];
}

export function ProductGallery({ images }: Props) {
    const [active, setActive] = useState(0);

    const next = () => {
        setActive((prev) => (prev + 1) % images.length);
    };

    const prev = () => {
        setActive((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    return (
        <div className="lg:sticky top-24 w-full flex flex-col aspect-square">
            <div className="relative bg-[#f5f5f5] flex-1 rounded-sm overflow-hidden">
                <StrapiImage
                    src={`http://localhost:3000${images[active]}`}
                    alt=""
                    width={700}
                    height={500}
                    className="size-full object-contain"
                />

                <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between items-center px-3">
                    <Button
                        size="icon-lg"
                        onClick={prev}
                        className="bg-white text-primary hover:text-white rounded"
                    >
                        <ChevronLeft size={18} />
                    </Button>
                    <Button
                        size="icon-lg"
                        onClick={next}
                        className="bg-white text-primary hover:text-white rounded"
                    >
                        <ChevronRight size={18} />
                    </Button>
                </div>
            </div>
            <div className="flex items-center gap-2 py-2 h-25 overflow-x-scroll scrollbar-none">
                {images.map((image, index) => (
                    <button
                        className={cn(
                            "h-full w-1/5 shrink-0 rounded-sm overflow-hidden border-2",
                            active === index
                                ? "border-primary"
                                : "border-transparent"
                        )}
                        key={image}
                        onClick={() => setActive(index)}
                    >
                        <StrapiImage
                            src={`http://localhost:3000${image}`}
                            alt=""
                            width={100}
                            height={80}
                            className="size-full object-cover"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}
