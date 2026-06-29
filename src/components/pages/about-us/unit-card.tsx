"use client";

import { StrapiImage } from "@/components/common/strapi-image";
import { cn } from "@/lib/utils";
import { BusinessUnitSectionProps } from "@/type";
import { useState } from "react";

const UnitCard = ({units}: {units: BusinessUnitSectionProps["details"][0][]}) => {
    const [current, setCurrent] = useState(units[0].image);

    if(!units || !units.length) return null;
    return (
        <div className="relative w-full aspect-1/1.5 md:aspect-16/7 bg-[#00000033] rounded-md overflow-hidden">
            <StrapiImage
                src={current.url}
                alt={current.alternativeText || "crane"}
                fill
                className="object-cover"
            />

            <div className="absolute m-6 grid md:grid-cols-3 gap-2 bottom-0 left-0 right-0 text-white">
                <div
                    onClick={() => setCurrent(units[0].image)}
                    className={cn(
                        "rounded-md bg-white/10 md:bg-white/20 backdrop-blur-3xl p-3.5 space-y-2 border-b-2 border-transparent cursor-pointer",
                        current.id === units[0].image.id && "border-white"
                    )}
                >
                    <h4 className="font-medium font-manrope text-lg">
                        {units[0].title}
                    </h4>
                    <p className={cn("text-sm", current.id === units[0].image.id ? "block" : "hidden md:block")}>{units[0].description}</p>
                </div>
                <div
                    onClick={() => setCurrent(units[1].image)}
                    className={cn(
                        "rounded-md bg-white/10 md:bg-white/20 backdrop-blur-3xl p-3.5 space-y-2 border-b-2 border-transparent cursor-pointer",
                        current.id === units[1].image.id && "border-white"
                    )}
                >
                    <h4 className="font-medium font-manrope text-lg">
                        {units[1].title}
                    </h4>
                    <p className={cn("text-sm", current.id === units[1].image.id ? "block" : "hidden md:block")}>{units[1].description}</p>
                </div>
                <div
                    onClick={() => setCurrent(units[2].image)}
                    className={cn(
                        "rounded-md bg-white/10 md:bg-white/20 backdrop-blur-3xl p-3.5 space-y-2 border-b-2 border-transparent cursor-pointer",
                        current.id === units[2].image.id && "border-white"
                    )}
                >
                    <h4 className="font-medium font-manrope text-lg">
                        {units[2].title}
                    </h4>
                    <p className={cn("text-sm", current.id === units[2].image.id ? "block" : "hidden md:block")}>{units[2].description}</p>
                </div>
            </div>
        </div>
    );
};

export default UnitCard;
