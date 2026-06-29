"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const items = [
    {
        title: "High-Rise Construction",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
        description:
            "Advanced lifting systems designed for modern high-rise construction projects.",
    },
    {
        title: "Urban Construction Sites",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80",
        description:
            "Compact and maneuverable crane solutions designed for congested urban environments.",
    },
    {
        title: "Infrastructure Projects",
        image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&q=80",
        description:
            "Reliable equipment for bridges, highways, rail systems and large infrastructure developments.",
    },
    {
        title: "Industrial Operations",
        image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1200&q=80",
        description:
            "Heavy-duty solutions built for demanding industrial operations and manufacturing facilities.",
    },
];

export default function DetailsSection() {
    const [activeIndex, setActiveIndex] = useState(1);
    const [direction, setDirection] = useState(1);

    const handleSelect = (index: number) => {
        if (index === activeIndex) return;

        setDirection(index > activeIndex ? 1 : -1);
        setActiveIndex(index);
    };

    const activeItem = items[activeIndex];

    return (
        <section className="hidden lg:block mt-14">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[280px_1fr_320px]">
                {/* LEFT MENU */}
                <div>
                    <ul className="space-y-4">
                        {items.map((item, index) => (
                            <li key={item.title}>
                                <button
                                    onClick={() => handleSelect(index)}
                                    className={`group flex w-full items-center gap-3 border-b border-[#D5D7DA] cursor-pointer pb-4 text-left transition-colors font-manrope ${
                                        activeIndex === index
                                            ? "text-black font-medium"
                                            : "text-gray-400"
                                    }`}
                                >
                                    <span
                                        className={`h-2 w-2 ${
                                            activeIndex === index
                                                ? "bg-red-500"
                                                : "bg-red-300"
                                        }`}
                                    />
                                    <span>{item.title}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* IMAGE */}
                <div className="relative h-112.5 overflow-hidden rounded-md">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.img
                            key={activeItem.image}
                            src={activeItem.image}
                            alt={activeItem.title}
                            custom={direction}
                            initial={{
                                y: direction > 0 ? 100 : -100,
                                opacity: 0,
                            }}
                            animate={{
                                y: 0,
                                opacity: 1,
                            }}
                            exit={{
                                y: direction > 0 ? -100 : 100,
                                opacity: 0,
                            }}
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut",
                            }}
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </AnimatePresence>
                </div>

                {/* DESCRIPTION */}
                <div className="relative flex items-end overflow-hidden pb-10">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={activeItem.description}
                            custom={direction}
                            initial={{
                                y: direction > 0 ? 40 : -40,
                                opacity: 0,
                            }}
                            animate={{
                                y: 0,
                                opacity: 1,
                            }}
                            exit={{
                                y: direction > 0 ? -40 : 40,
                                opacity: 0,
                            }}
                            transition={{
                                duration: 0.4,
                                ease: "easeInOut",
                            }}
                            className="absolute"
                        >
                            <p className="text-[#414651]">
                                {activeItem.description}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
