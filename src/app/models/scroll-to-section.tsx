"use client";

import { useSearchParams } from "next/navigation";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useEffect } from "react";

gsap.registerPlugin(ScrollToPlugin);

const ScrollToSection = () => {
  const search = useSearchParams();
  const section = search.get("manufacturer") || "";
  useEffect(() => {
    if (section) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: {
          y: `#${section.toLowerCase()}`,
          offsetY: 90,
        },
      });
    }
  }, []);
  return <></>;
};

export default ScrollToSection;
