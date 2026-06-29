"use client";

import Link from "next/link";
import { StrapiImage } from "../common/strapi-image";
import { ChevronRight, Menu } from "lucide-react";
import { Button } from "../ui/button";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import MenuSheet from "../sheets/menu-sheet";

const Header = () => {
  const pathname = usePathname();
  const isWhite = pathname.includes("/models");

  return (
    <header
      className={cn(
        "z-70",
        isWhite ? "bg-white sticky top-0" : "absolute top-0 left-0 right-0",
      )}
    >
      <div className="container container-padding-x flex justify-between items-center gap-10 w-full py-7">
        <Link href="/">
          <StrapiImage
            src={
              isWhite
                ? "http://localhost:3000/local/logo-clr.png"
                : "http://localhost:3000/local/logo.png"
            }
            alt="Logo"
            width={160}
            height={48}
          />
        </Link>

        <ul className="hidden lg:flex flex-1 items-center justify-evenly gap-1">
          <li className="flex-1">
            <GlassLink isWhite={isWhite} href="/about-us">
              About us
            </GlassLink>
          </li>
          <li className="flex-1">
            <GlassLink isWhite={isWhite} href="/eng-solutions">
              Solutions
            </GlassLink>
          </li>
          <li className="flex-1">
            <GlassLink isWhite={isWhite} href="/rental-hub">
              Rent cranes
            </GlassLink>
          </li>
          <li className="flex-1">
            <GlassLink isWhite={isWhite} href="/sales-hub">
              Buy cranes
            </GlassLink>
          </li>
          <li className="flex-1">
            <GlassLink isWhite={isWhite} href="/rental">
              Rental
            </GlassLink>
          </li>
          <li className="flex-1">
            <GlassLink isWhite={isWhite} href="/resource-hub">
              Resource hub
            </GlassLink>
          </li>
          <li className="flex-[1.55] space-x-0.5">
            <Link href="/contact-us">
              <Button className="px-4 py-2 text-xs h-fit" variant={"white"}>
                Contact Us
              </Button>
            </Link>
            <Button className="px-4 py-2 text-xs h-fit">Get quote</Button>
          </li>
        </ul>

        <MenuSheet />
      </div>
    </header>
  );
};

export default Header;

function GlassLink({
  children,
  href,
  isWhite,
}: Readonly<{ children: ReactNode; href: string; isWhite: boolean }>) {
  return (
    <Link
      href={href}
      className={cn(
        "rounded px-4 py-2 text-xs flex items-center justify-between gap-2 backdrop-blur-lg whitespace-nowrap hover:bg-white hover:backdrop-blur-none hover:text-black duration-300 transition-all",
        isWhite ? "text-black bg-[#F5F5F5]" : "text-white bg-white/10",
      )}
    >
      {children}
      <ChevronRight size={16} />
    </Link>
  );
}
