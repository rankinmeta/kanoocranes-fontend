"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// data.ts

export const craneServices = [
    {
      id: 1,
      title: "High-Rise Construction",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200",
      description:
        "Tower cranes provide the height, reach, and lifting capacity required for multi-story residential, commercial, and mixed-use developments, ensuring efficient material movement throughout the construction process.",
    },
    {
      id: 2,
      title: "Urban Construction Sites",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200",
      description:
        "Specialized crane solutions for dense urban environments.",
    },
    {
      id: 3,
      title: "Infrastructure Projects",
      image:
        "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1200",
      description:
        "Supporting bridges, highways, and large-scale public works.",
    },
    {
      id: 4,
      title: "Industrial Operations",
      image:
        "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=1200",
      description:
        "Heavy lifting solutions for industrial facilities and plants.",
    },
  ];

export default function DetailsSectionSM() {
  const [active, setActive] = useState(1);

  return (
    <section className="lg:hidden mt-7">
      <div className="space-y-1">
        {craneServices.map((item) => {
          const isActive = active === item.id;

          return (
            <div
              key={item.id}
              className="border-b border-neutral-200 py-4"
            >
              <button
                onClick={() => setActive(item.id)}
                className={`flex w-full items-center gap-3 text-left transition-colors ${
                  isActive
                    ? "text-neutral-900"
                    : "text-neutral-400"
                }`}
              >
                <span
                  className={`h-2.5 w-2.5 ${
                    isActive
                      ? "bg-red-500"
                      : "bg-red-400"
                  }`}
                />

                <span className="text-[18px] font-medium">
                  {item.title}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                    className="overflow-hidden"
                  >
                    <div className="pt-5">
                      <div className="relative h-[240px] md:h-[360px] overflow-hidden rounded-xl">
                        <img
                          src={item.image}
                          alt={item.title}
                        //   fill
                          className="object-cover"
                        />
                      </div>

                      <p className="mt-4 text-[17px] leading-8 text-neutral-600">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}