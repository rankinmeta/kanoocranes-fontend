"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { type SiteSelectionSectionProps } from "@/type";

export default function DetailsSection({
  details,
}: {
  details: SiteSelectionSectionProps["site_selection_details"];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleSelect = (index: number) => {
    if (index === activeIndex) return;

    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const activeItem = details[activeIndex];

  if (!details) return null;

  return (
    <section className="hidden lg:block mt-14">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[280px_1fr_320px]">
        {/* LEFT MENU */}
        <div>
          <ul className="space-y-4">
            {details.map((item, index) => (
              <li key={item.id}>
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
                      activeIndex === index ? "bg-red-500" : "bg-red-300"
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
              key={activeItem.image.id}
              src={process.env.NEXT_PUBLIC_STRAPI_API_URL + activeItem.image.url}
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
              <p className="text-[#414651]">{activeItem.description}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
