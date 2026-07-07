"use client";

import Link from "next/link";
import { StrapiImage } from "../common/strapi-image";
import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import MenuSheet from "../sheets/menu-sheet";
import type { MediaProps } from "@/type";

type HeaderProps = {
  id: number;
  logo: MediaProps;
  button: string;
};

const Header = ({ button, logo }: HeaderProps) => {
  const pathname = usePathname();
  const hide = pathname.includes("/models");

  return (
    <header
      className={cn(
        "z-70 absolute top-0 left-0 right-0",
        hide && "hidden"
      )}
    >
      <div className="container container-padding-x flex justify-between items-center gap-10 w-full py-7">
        <Link href="/">
          {logo && (
            <StrapiImage
              src={logo.url}
              alt={logo.alternativeText || "Logo"}
              width={160}
              height={48}
            />
          )}
        </Link>

        <ul className="hidden lg:flex flex-1 items-center justify-evenly gap-1">
          <li className="flex-1">
            <GlassLink href="/about-us">
              About us
            </GlassLink>
          </li>
          <li className="flex-1">
            <GlassLink href="/eng-solutions">
              Solutions
            </GlassLink>
          </li>
          <li className="flex-1">
            <GlassLink href="/rental-hub">
              Rent cranes
            </GlassLink>
          </li>
          <li className="flex-1">
            <GlassLink href="/sales-hub">
              Buy cranes
            </GlassLink>
          </li>
          {/* <li className="flex-1">
            <GlassLink href="/rental">
              Rental
            </GlassLink>
          </li> */}
          <li className="flex-1">
            <GlassLink href="/resource-hub">
              Resource hub
            </GlassLink>
          </li>
          <li className="flex-[1.55] space-x-0.5">
            <Link href="/contact-us">
              <Button className="px-4 py-2 text-xs h-fit" variant={"white"}>
                Contact Us
              </Button>
            </Link>
            <Button className="px-4 py-2 text-xs h-fit">{button}</Button>
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
  href
}: Readonly<{ children: ReactNode; href: string; }>) {
  return (
    <Link
      href={href}
      className=
        "rounded px-4 py-2 text-white bg-white/10 text-xs flex items-center justify-between gap-2 backdrop-blur-lg whitespace-nowrap hover:bg-white hover:backdrop-blur-none hover:text-black duration-300 transition-all"
      
    >
      {children}
      <ChevronRight size={16} />
    </Link>
  );
}
