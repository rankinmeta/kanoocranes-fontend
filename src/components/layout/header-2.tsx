"use client"

import Link from "next/link";
import { StrapiImage } from "../common/strapi-image";
import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { type ReactNode, useState } from "react";
import { cn } from "@/lib/utils";
import MenuSheet from "../sheets/menu-sheet";
import type { MediaProps } from "@/type";

type SubItem = {
  id: number;
  documentId: string;
  category: string;
  slug: string;
};

type HeaderProps = {
  id: number;
  logo_color: MediaProps;
  button: string;
  rentCranes: SubItem[];
  buyCranes: SubItem[];
};

const Header2 = ({ button, logo_color, buyCranes, rentCranes }: HeaderProps) => {
  const [buyOpen, setBuyOpen] = useState(false);
  const [rentOpen, setRentOpen] = useState(false);

  return (
    <header
      className="sticky bg-white top-0 left-0 right-0 z-50"
    >
      <div className="container container-padding-x flex justify-between items-center gap-10 w-full py-7">
        <Link href="/">
          {logo_color && (
            <StrapiImage
              src={logo_color.url}
              alt={logo_color.alternativeText || "Logo"}
              width={160}
              height={48}
            />
          )}
        </Link>

        <ul className="hidden lg:flex flex-1 items-center justify-evenly gap-1">
          <li className="flex-1">
            <GlassLink href="/about-us">About us</GlassLink>
          </li>
          <li className="flex-1">
            <GlassLink href="/eng-solutions">Solutions</GlassLink>
          </li>
          <li
            onMouseEnter={() => setRentOpen(true)}
            onMouseLeave={() => setRentOpen(false)}
            className="relative group"
          >
            <div className="flex items-center gap-1 cursor-pointer">
              <GlassLink href="/rental-hub">Rent cranes</GlassLink>
            </div>

            {rentOpen && (
              <div className="absolute left-0 top-full z-50 w-48 bg-white shadow-lg rounded-md p-1">
                {rentCranes?.map((rentCrane) => (
                  <Link
                    href={"/rent-cranes/" + rentCrane.slug}
                    key={rentCrane.documentId}
                    className="block px-2 py-1.5 hover:bg-gray-100 rounded text-black text-xs"
                  >
                    {rentCrane.category}
                  </Link>
                ))}
              </div>
            )}
          </li>
          <li
            onMouseEnter={() => setBuyOpen(true)}
            onMouseLeave={() => setBuyOpen(false)}
            className="relative group"
          >
            <div className="flex items-center gap-1 cursor-pointer">
              <GlassLink href="/sales-hub">Buy cranes</GlassLink>
            </div>

            {buyOpen && (
              <div className="absolute left-0 top-full z-50 w-48 bg-white shadow-lg rounded-md p-1">
                {buyCranes?.map((buyCrane) => (
                  <Link
                    href={"/buy-cranes/" + buyCrane.slug}
                    key={buyCrane.documentId}
                    className="block px-2 py-1.5 hover:bg-gray-100 rounded text-black text-xs"
                  >
                    {buyCrane.category}
                  </Link>
                ))}
              </div>
            )}
          </li>
          {/* <li className="flex-1">
            <GlassLink href="/rental">Rental</GlassLink>
          </li> */}
          <li className="flex-1">
            <GlassLink href="/resource-hub">Resource hub</GlassLink>
          </li>
          <li className="flex-[1.55] space-x-0.5">
            <Link href="/contact-us">
              <Button className="px-4 py-2 text-xs h-fit" variant={"white"}>
                Contact Us
              </Button>
            </Link>
            <Link href="/contact-us">
              <Button className="px-4 py-2 text-xs h-fit">{button}</Button>
            </Link>
          </li>
        </ul>

        <MenuSheet />
      </div>
    </header>
  );
};

export default Header2;

function GlassLink({
  children,
  href,
}: Readonly<{ children: ReactNode; href: string }>) {
  return (
    <Link
      href={href}
      className={cn(
        "rounded px-4 py-2 text-xs flex items-center justify-between gap-2 backdrop-blur-lg whitespace-nowrap hover:bg-white hover:backdrop-blur-none hover:text-black duration-300 transition-all text-black bg-[#F5F5F5]",
      )}
    >
      {children}
      <ChevronRight size={16} />
    </Link>
  );
}
