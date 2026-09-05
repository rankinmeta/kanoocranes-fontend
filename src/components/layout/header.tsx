"use client";

import Link from "next/link";
import { StrapiImage } from "../common/strapi-image";
import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import MenuSheet from "../sheets/menu-sheet";
import type { MediaProps } from "@/type";
import { ContactDialog } from "../dialog/contact-dialog";
import NestedNavMenu from "./nested-nav-menu";

type SubItem = {
  id: number;
  documentId: string;
  category: string;
  slug: string;
};

type HeaderProps = {
  id: number;
  logo: MediaProps;
  button: string;
  menu_links: {
    rent_cranes_menu: {
      id: number;
      menu: SubItem;
      sub_menus: SubItem[];
    }[];
    buy_cranes_menu: {
      id: number;
      menu: SubItem;
      sub_menus: SubItem[];
    }[];
  };
};

const Header = ({ button, logo, menu_links }: HeaderProps) => {
  const pathname = usePathname();
  const hide = pathname.includes("/models") || pathname.includes("/gallery");

  return (
    <header
      className={cn("z-70 absolute top-0 left-0 right-0", hide && "hidden")}
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
            <GlassLink href="/about-us">About us</GlassLink>
          </li>
          <li className="flex-1">
            <GlassLink href="/eng-solutions">Solutions</GlassLink>
          </li>
          <NestedNavMenu
            label="Rent cranes"
            href="/rental-hub"
            parentSlug="rent-cranes"
            data={menu_links.rent_cranes_menu}
          />
          <NestedNavMenu
            label="Buy cranes"
            href="/sales-hub"
            parentSlug="buy-cranes"
            data={menu_links.buy_cranes_menu}
          />
          {/* <li
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
          </li> */}
          {/* <li className="flex-1">
            <GlassLink href="/rental">
              Rental
            </GlassLink>
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
            <ContactDialog>
              <Button className="px-4 py-2 text-xs h-fit">{button}</Button>
            </ContactDialog>
          </li>
        </ul>

        <MenuSheet
          rentCranesMenu={menu_links.rent_cranes_menu}
          buyCranesMenu={menu_links.buy_cranes_menu}
        />
      </div>
    </header>
  );
};

export default Header;

function GlassLink({
  children,
  href,
}: Readonly<{ children: ReactNode; href: string }>) {
  return (
    <Link
      href={href}
      className="rounded px-4 py-2 text-white bg-white/10 text-xs flex items-center justify-between gap-2 backdrop-blur-lg whitespace-nowrap hover:bg-white hover:backdrop-blur-none hover:text-black duration-300 transition-all"
    >
      {children}
      <ChevronRight size={16} />
    </Link>
  );
}
