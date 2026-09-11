"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";

import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

interface NavItem {
  id: string;
  label: string;
  href: string;
  children?: NavItem[];
}

// ---- Server response shape (same as the desktop nav) --------------------
// data = [
//   {
//     id: 2,
//     menu: { id: 1, category: string, slug: string },
//     sub_menus: { id: 2, category: string, slug: string }[]
//   }
// ]
interface MenuLeaf {
  id: number;
  category: string;
  slug: string;
}

interface MenuApiItem {
  id: number;
  menu: MenuLeaf;
  sub_menus: MenuLeaf[];
}

/**
 * Builds an href for a leaf. Adjust this if your routes are flat
 * (e.g. `/${leaf.slug}`) instead of nested under the parent's slug.
 */
function buildHref(leaf: MenuLeaf, parentSlug?: string): string {
  return parentSlug ? `/${parentSlug}/${leaf.slug}` : `/${leaf.slug}`;
}

function mapLeafToNavItem(leaf: MenuLeaf, parentSlug: string): NavItem {
  return {
    id: String(leaf.id),
    label: leaf.category,
    href: buildHref(leaf, parentSlug),
  };
}

/** Maps the server payload into NavItem[] — same mapping used on desktop. */
function mapApiMenuToNavItems(
  data: MenuApiItem[],
  parentSlug: string,
): NavItem[] {
  return data.map((entry) => ({
    id: String(entry.menu.id),
    label: entry.menu.category,
    href: buildHref(entry.menu, parentSlug),
    children: entry.sub_menus.map((sub) => mapLeafToNavItem(sub, parentSlug)),
  }));
}

// Static links keep their flat shape. "Rent cranes" keeps its own fixed
// label/href — the server payload only supplies its nested children.
function buildNavItems(
  rentCranesMenu: MenuApiItem[],
  buyCranesMenu: MenuApiItem[],
): NavItem[] {
  return [
    { id: "home", label: "Home", href: "/" },
    { id: "about-us", label: "About us", href: "/about-us" },
    { id: "eng-solutions", label: "Solutions", href: "/eng-solutions" },
    {
      id: "rental-hub",
      label: "Rent cranes",
      href: "/rental-hub",
      children: mapApiMenuToNavItems(rentCranesMenu, "rent-cranes"),
    },
    {
      id: "sales-hub",
      label: "Buy cranes",
      href: "/sales-hub",
      children: mapApiMenuToNavItems(buyCranesMenu, "buy-cranes"),
    },
    { id: "resource-hub", label: "Resource hub", href: "/resource-hub" },
    { id: "contact-us", label: "Contact us", href: "/contact-us" },
  ];
}

interface AccordionRowProps {
  item: NavItem;
  depth: number;
  onNavigate: () => void;
}

/**
 * One row in the mobile menu. If the item has children, the label still
 * navigates on tap, and a separate chevron button expands/collapses its
 * children in place — nested to any depth.
 */
function AccordionRow({ item, depth, onNavigate }: AccordionRowProps) {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = Array.isArray(item.children) && item.children.length > 0;

  return (
    <li>
      <div className="flex items-center justify-between">
        <Link
          href={item.href}
          onClick={onNavigate}
          className="flex-1 py-2 text-left"
        >
          {item.label}
        </Link>

        {hasChildren && (
          <button
            type="button"
            aria-expanded={isOpen}
            aria-label={
              isOpen ? `Collapse ${item.label}` : `Expand ${item.label}`
            }
            onClick={() => setIsOpen((prev) => !prev)}
            className="p-2 text-muted-foreground"
          >
            <ChevronDown
              size={16}
              className={`transition-transform duration-200 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
        )}
      </div>

      {hasChildren && (
        <div
          className="grid overflow-hidden transition-[grid-template-rows] duration-200 ease-out"
          style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
        >
          <ul
            className="min-h-0 space-y-3 border-l pl-4 pt-3"
            style={{ marginLeft: `${depth * 8}px` }}
          >
            {(item.children as NavItem[]).map((child) => (
              <AccordionRow
                key={child.id}
                item={child}
                depth={depth + 1}
                onNavigate={onNavigate}
              />
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}

interface MenuSheetProps {
  /** The same `menu` array your server returns for Rent cranes' sub_menus. */
  rentCranesMenu: MenuApiItem[];
  buyCranesMenu: MenuApiItem[];
}

const MenuSheet = ({ rentCranesMenu, buyCranesMenu }: MenuSheetProps) => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const navItems = buildNavItems(rentCranesMenu, buyCranesMenu);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button size="icon" variant="white" className="lg:hidden">
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent className="z-999">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>

        <ul className="space-y-5 px-6">
          {navItems.map((item) => (
            <AccordionRow
              key={item.id}
              item={item}
              depth={0}
              onNavigate={close}
            />
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default MenuSheet;
