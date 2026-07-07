"use client";

import type { SiteSelectionSectionProps } from "@/type";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function DetailsSectionSM({
  details,
}: {
  details: SiteSelectionSectionProps["site_selection_details"];
}) {
  const [active, setActive] = useState(1);

  if (!details) return null;

  return (
    <section className="lg:hidden mt-7">
      <div className="space-y-1">
        {details.map((item) => {
          const isActive = active === item.id;

          return (
            <div key={item.id} className="border-b border-neutral-200 py-4">
              <button
                onClick={() => setActive(item.id)}
                className={`flex w-full items-center gap-3 text-left transition-colors ${
                  isActive ? "text-neutral-900" : "text-neutral-400"
                }`}
              >
                <span
                  className={`h-2.5 w-2.5 ${
                    isActive ? "bg-red-500" : "bg-red-400"
                  }`}
                />

                <span className="text-[18px] font-medium">{item.title}</span>
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
                          src={process.env.NEXT_PUBLIC_STRAPI_API_URL + item.image.url}
                          alt={item.image.alternativeText || item.title}
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
