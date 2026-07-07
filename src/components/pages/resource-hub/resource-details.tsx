"use client";

import { type BlocksContent } from "@strapi/blocks-react-renderer";
import { useEffect, useMemo, useRef, useState } from "react";
import ResourceContent from "./resource-content";
import { Button } from "@/components/ui/button";
import Book from "@/components/icons/book";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { LinkProps } from "@/type";

// Slugify heading text to use as an id
function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

// Extract plain text from a heading block's children
function getHeadingText(children: { type: string; text?: string }[]): string {
  return children
    .map((child) => ("text" in child ? (child.text ?? "") : ""))
    .join("");
}

// Derive ToC entries from BlocksContent — only h1 and h2
function extractHeadings(
  content: BlocksContent,
): { id: string; label: string; level: number }[] {
  return content
    .filter((block) => block.type === "heading" && block.level === 1)
    .map((block) => {
      if (block.type !== "heading") return null;
      const label = getHeadingText(
        block.children as { type: string; text?: string }[],
      );
      return { id: slugify(label), label, level: block.level };
    })
    .filter(Boolean) as { id: string; label: string; level: number }[];
}

type ResourceDetailsProps = {
  resource_content: BlocksContent;
  banner_title: string;
  banner_description: string;
  banner_button: LinkProps;
  card_banner_title: string;
  card_banner_description: string;
  card_banner_button: LinkProps;
};

const ResourceDetails = ({
  resource_content,
  banner_button,
  banner_description,
  banner_title,
  card_banner_button,
  card_banner_description,
  card_banner_title,
}: ResourceDetailsProps) => {
  const headings = extractHeadings(resource_content);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const [activeSection, setActiveSection] = useState(headings[0]?.id || "");
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!headings.length) return;

    // Check if all refs are available
    const allReady = headings.every(({ id }) => sectionRefs.current[id]);

    if (!allReady) return;

    // 1. Initialize the observer with a callback and configuration options
    observer.current = new IntersectionObserver(
      (entries) => {
        // Update state based on element visibility
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: "0px 0px -50% 0px" },
    );

    // 2. Start observing the DOM element
    headings.forEach(({ id }) => {
      const element = sectionRefs.current[id];
      if (element) {
        observer.current?.observe(element);
      }
    });

    // 3. Clean up the observer when the component unmounts
    return () => {
      observer.current?.disconnect();
    };
  }, [headings]); // Empty dependency array ensures this runs once on mount

  // Scroll to section when clicked in the jumper
  const scrollToSection = (id: string) => {
    const element = sectionRefs.current[id];
    if (element) {
      const offset = 100; // height of your fixed header

      const top =
        element.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  if(!resource_content || !banner_button || !card_banner_button) return null;

  return (
    <>
      {/* Mobile TOC */}
      <Accordion
        type="multiple"
        className="lg:hidden border-none bg-[#f5f5f5] rounded-none container container-padding-x py-3"
      >
        <AccordionItem value="toc">
          <AccordionTrigger hideBullet iconColor="text-black!" className="px-0">
            Table of Contents
          </AccordionTrigger>
          <AccordionContent className="h-fit! pt-3 -ms-3">
            <nav className="flex flex-col gap-1">
              {headings.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`text-sm text-left cursor-pointer leading-snug transition-colors border-b py-2 border-[#D5D7DA] ${
                    activeSection === id
                      ? "text-primary"
                      : "text-[#717680] hover:text-gray-900"
                  }`}
                >
                  {label}
                </button>
              ))}
            </nav>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <section className="container container-padding-x min-h-screen bg-white py-10 md:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-[200px_1fr_240px] gap-8">
          {/* LEFT — sticky Table of Contents */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <p className="mb-4 flex items-center gap-2 text-xs font-medium uppercase">
                <span className="inline-block h-2 w-2 bg-red-600" />
                Table of Contents
              </p>
              <nav className="flex flex-col gap-1">
                {headings.map(({ id, label, level }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`text-sm text-left cursor-pointer leading-snug transition-colors border-b py-2 border-[#D5D7DA] ${
                      activeSection === id
                        ? "text-primary"
                        : "text-[#717680] hover:text-gray-900"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* CENTER — BlocksRenderer renders the content */}
          <div>
            <ResourceContent
              content={resource_content}
              sectionRefs={sectionRefs}
            />
            <div className="bg-secondary mt-10 text-white p-6 rounded-md flex flex-col md:flex-row justify-between md:items-center">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <Book />
                <div className="space-y-2 max-w-2xl">
                  <h3 className="text-2xl font-manrope">{banner_title}</h3>
                  <p className="text-sm">{banner_description}</p>
                </div>
              </div>

              <Link
                href={banner_button.href}
                target={banner_button.isExternal ? "_blank" : "_self"}
              >
                <Button className="w-fit mt-4 md:mt-0">{banner_button.label}</Button>
              </Link>
            </div>
          </div>

          {/* RIGHT — sticky CTA card */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <div className="px-5 py-6 rounded-md overflow-hidden bg-secondary text-white space-y-2 relative">
                {/* Circles */}
                <div className="absolute -bottom-5 right-0 grid grid-cols-3 gap-1 after:absolute after:inset-0 after:bg-linear-to-r after:from-transparent after:to-secondary after:z-10">
                  {Array(9)
                    .fill(0)
                    .map((_, i) => (
                      <div
                        key={i}
                        className="size-7 bg-[#03297a] rounded-full"
                      ></div>
                    ))}
                </div>

                <div className="relative z-10 space-y-2">
                  <h3 className="font-manrope text-xl">{card_banner_title}</h3>
                  <p className="text-xs leading-relaxed">
                    {card_banner_description}
                  </p>
                  <Link
                    href={card_banner_button.href}
                    target={card_banner_button.isExternal ? "_blank" : "_self"}
                  >
                    <Button className="bg-white text-primary mt-3 hover:bg-primary hover:text-white">
                      {card_banner_button.label}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default ResourceDetails;
