"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import RecommendedCraneSection from "./recommended-crane-section";

const THUMB_WIDTH = 35;

const CraneSelector = () => {
    const [heightValue, setHeightValue] = useState(125);
    const [loadValue, setLoadValue] = useState(50);
    const min = 0;
    const max = 500;

    return (
        <>
            <div className="bg-[#F5F5F5] rounded-md p-6 grid grid-cols-2 gap-4 gap-y-6">
                <Slider
                    max={max}
                    min={min}
                    value={heightValue}
                    setValue={setHeightValue}
                    label="Lift Height"
                    unit="M"
                />
                <Slider
                    max={100}
                    min={min}
                    value={loadValue}
                    setValue={setLoadValue}
                    label="Max Load"
                    unit="T"
                />
                <Slider
                    max={100}
                    min={min}
                    value={loadValue}
                    setValue={setLoadValue}
                    label="Max Load"
                    unit="T"
                />
                <Slider
                    max={100}
                    min={min}
                    value={loadValue}
                    setValue={setLoadValue}
                    label="Max Load"
                    unit="T"
                />

                <div className="space-x-3 mt-5">
                    <Button>Recommended crane</Button>
                    <Button className="bg-white text-primary hover:text-white hover:bg-primary">
                        Need expert consultation?
                    </Button>
                </div>
            </div>

            <RecommendedCraneSection />
        </>
    );
};

export default CraneSelector;

function Slider({
    min,
    max,
    value,
    setValue,
    unit,
    label,
}: {
    min: number;
    max: number;
    value: number;
    setValue: React.Dispatch<React.SetStateAction<number>>;
    unit: string;
    label: string;
}) {
    const trackRef = useRef<HTMLDivElement | null>(null);
    const [trackWidth, setTrackWidth] = useState(0);
    const tickCount = 20;
    const percent = ((value - min) / (max - min)) * 100;

    useEffect(() => {
        if (!trackRef.current) return;
        const ro = new ResizeObserver(() => {
            if (trackRef.current) setTrackWidth(trackRef.current.offsetWidth);
        });
        ro.observe(trackRef.current);
        setTrackWidth(trackRef.current.offsetWidth);
        return () => ro.disconnect();
    }, []);

    const leftPx = (percent / 100) * (trackWidth - THUMB_WIDTH);

    return (
        <div>
            {/* Label + Value */}
            <div className="flex items-center justify-between mb-1 px-1">
                <span className="text-xs tracking-widest uppercase font-medium">
                    {label}
                </span>
                <div className="flex items-baseline gap-1">
                    <span className="text-lg font-semibold text-primary">
                        {value}
                    </span>
                    <span className="text-xs font-medium text-black uppercase tracking-wider">
                        {unit}
                    </span>
                </div>
            </div>

            {/* Track */}
            <div
                ref={trackRef}
                className="relative w-full h-10 rounded-md bg-white"
            >
                {/* Tick marks */}
                <div
                    className="absolute inset-0 flex items-center pointer-events-none"
                    style={{ paddingLeft: "10px", paddingRight: "14px" }}
                >
                    {Array.from({ length: tickCount }).map((_, i) => (
                        <div
                            key={i}
                            className="flex-1 flex justify-center text-gray-200/50"
                        >
                            |
                        </div>
                    ))}
                </div>

                {/* Range input (invisible but functional) */}
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={value}
                    onChange={(e) => setValue(Number(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />

                {/* Custom thumb */}
                <div
                    className="absolute top-0 h-full flex items-center pointer-events-none z-20"
                    style={{ left: `${leftPx}px` }}
                >
                    <div
                        className="flex h-full items-center justify-center rounded-md bg-secondary"
                        style={{
                            width: `${THUMB_WIDTH}px`,
                        }}
                    >
                        <span className="text-white font-light tracking-widest text-sm select-none">
                            ||
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
