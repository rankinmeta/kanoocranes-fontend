"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const Circles = () => {
    const [circles, setCircles] = useState({
        count: 0,
        size: 60,
        gap: 10,
    });

    useEffect(() => {
        const { size, gap } = circles;
        const calculate = () => {
            const count = Math.floor(window.innerWidth / (size + gap));
            setCircles((prev) => ({ ...prev, count }));
        };
        calculate();
        window.addEventListener("resize", calculate);
        return () => window.removeEventListener("resize", calculate);
    }, [circles.size, circles.gap]);

    const row = Array.from({ length: circles.count });

    return (
        <div className="hidden md:block absolute -z-10 left-0 right-0 top-0 h-40 overflow-hidden pointer-events-none">
            {[0, 1].map((rowIndex) => (
                <div
                    key={rowIndex}
                    className="flex w-full justify-around absolute"
                    style={{
                        top:
                            rowIndex === 0
                                ? "0.5rem"
                                : `calc(0.5rem + ${circles.size}px + ${circles.gap}px)`,
                    }}
                >
                    {row.map((_, i) => (
                        <div
                            key={i}
                            className={cn(
                                "rounded-full opacity-80 shrink-0",
                                rowIndex === 0
                                    ? "bg-[#F5F5F5]"
                                    : "bg-linear-to-b from-[#F5F5F5] via-[#F5F5F5]/30 to-[#F5F5F5]/10"
                            )}
                            style={{
                                width: circles.size,
                                height: circles.size,
                            }}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Circles;
