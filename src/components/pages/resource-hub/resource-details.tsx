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

// Sample content — replace with your Strapi API response
const content: BlocksContent = [
  {
    type: "heading",
    level: 1,
    children: [
      {
        type: "text",
        text: "Understanding crane selection for modern projects",
      },
    ],
  },
  {
    type: "paragraph",
    children: [
      {
        type: "text",
        text: "Selecting the right crane is a critical step in ensuring the success of any lifting operation. From high-rise construction and infrastructure development to industrial maintenance and heavy equipment installation, every project has unique requirements that demand careful consideration.",
      },
    ],
  },
  {
    type: "paragraph",
    children: [
      {
        type: "text",
        text: "Site conditions also play a significant role in crane selection. Factors such as ground stability, available working space, access routes, surrounding structures, and environmental conditions must be carefully evaluated before any lifting operation begins.",
      },
    ],
  },
  {
    type: "heading",
    level: 1,
    children: [{ type: "text", text: "Key factors to consider" }],
  },
  {
    type: "paragraph",
    children: [
      {
        type: "text",
        text: "The crane must be capable of lifting the required load safely while maintaining stability throughout the operation. Consider maximum load weight, load dimensions, center of gravity, and dynamic loading conditions.",
      },
    ],
  },
  {
    type: "list",
    format: "unordered",
    children: [
      {
        type: "list-item",
        children: [{ type: "text", text: "Maximum load weight" }],
      },
      {
        type: "list-item",
        children: [{ type: "text", text: "Load dimensions" }],
      },
      {
        type: "list-item",
        children: [{ type: "text", text: "Center of gravity" }],
      },
      {
        type: "list-item",
        children: [{ type: "text", text: "Dynamic loading conditions" }],
      },
    ],
  },
  {
    type: "heading",
    level: 1,
    children: [
      {
        type: "text",
        text: "Test Heading",
      },
    ],
  },
  {
    type: "paragraph",
    children: [
      {
        type: "text",
        text: "Comprehensive lift planning is not merely a regulatory formality — it is a cornerstone of operational excellence. By mapping out every phase of a lift in advance, project managers can anticipate conflicts and allocate resources precisely.",
      },
    ],
  },
  {
    type: "heading",
    level: 1,
    children: [{ type: "text", text: "Why proper planning matters" }],
  },
  {
    type: "paragraph",
    children: [
      {
        type: "text",
        text: "Comprehensive lift planning is not merely a regulatory formality — it is a cornerstone of operational excellence. By mapping out every phase of a lift in advance, project managers can anticipate conflicts and allocate resources precisely.",
      },
    ],
  },
  {
    type: "heading",
    level: 1,
    children: [{ type: "text", text: "Working radius" }],
  },
  {
    type: "paragraph",
    children: [
      {
        type: "text",
        text: "The working radius — the horizontal distance from the crane's center of rotation to the load's center of gravity — directly impacts the crane's permissible lift capacity. As the radius increases, the allowable load decreases.",
      },
    ],
  },
  {
    type: "heading",
    level: 1,
    children: [{ type: "text", text: "Site conditions" }],
  },
  {
    type: "paragraph",
    children: [
      {
        type: "text",
        text: "Ground bearing capacity is perhaps the most overlooked variable in crane deployment. Soft or unstable ground can compromise the structural integrity of outrigger pads, leading to uncontrolled settlement.",
      },
    ],
  },
  {
    type: "heading",
    level: 1,
    children: [{ type: "text", text: "Conclusion" }],
  },
  {
    type: "paragraph",
    children: [
      {
        type: "text",
        text: "Crane selection is a multi-disciplinary process that combines engineering judgment, site intelligence, and regulatory compliance. By engaging qualified lift planners early, project teams can execute even the most complex lifting operations with confidence.",
      },
    ],
  },
];

const ResourceDetails = () => {
  const headings = extractHeadings(content);
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
          element.getBoundingClientRect().top +
          window.pageYOffset -
          offset;
    
        window.scrollTo({
          top,
          behavior: "smooth",
        });
    }
  };

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
            <ResourceContent content={content} sectionRefs={sectionRefs} />
            <div className="bg-secondary mt-10 text-white p-6 rounded-md flex flex-col md:flex-row justify-between md:items-center">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <Book />
                <div className="space-y-2 max-w-2xl">
                  <h3 className="text-2xl font-manrope">
                    Access our complete resource library
                  </h3>
                  <p className="text-sm">
                    Unlock exclusive resources including CAD drawings, detailed
                    load charts..
                  </p>
                </div>
              </div>

              <Button className="w-fit mt-4 md:mt-0">Unlock Resources</Button>
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
                  <h3 className="font-manrope text-xl">Let's talk business</h3>
                  <p className="text-xs leading-relaxed">
                    Talk to our experts for tailored crane solutions, quick
                    quotes, and reliable support for your project requirements.
                  </p>
                  <Button className="bg-white text-primary mt-3 hover:bg-primary hover:text-white">
                    Contact us
                  </Button>
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
