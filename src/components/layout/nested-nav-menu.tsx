"use client";

import { useRef, useState } from "react";
import type { ReactNode, RefObject } from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavItem {
  id: string;
  label: string;
  href: string;
  children?: NavItem[];
}

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

/**
 * Maps one server `sub_menus` leaf to a NavItem. `sub_menus` in the API
 * is flat (no further nesting), so this never sets `children`.
 */
function mapLeafToNavItem(leaf: MenuLeaf, parentSlug: string): NavItem {
  return {
    id: String(leaf.id),
    label: leaf.category,
    href: buildHref(leaf, parentSlug),
  };
}

/**
 * Maps the full server payload into the NavItem[] this component renders.
 * Each top-level entry's `menu` becomes the parent, and its `sub_menus`
 * become that parent's `children`.
 */
export function mapApiMenuToNavItems(
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

const OPEN_DELAY = 80; // ms before opening, avoids flicker on quick mouse passes
const CLOSE_DELAY = 150; // ms grace period before closing, lets user move diagonally

/** Shared open/close-with-delay hover logic, keyed so a submenu can track which child is open. */
function useHoverTimers() {
  const timers = useRef<{
    open?: ReturnType<typeof setTimeout>;
    close?: ReturnType<typeof setTimeout>;
  }>({});
  return timers;
}

interface SubmenuProps {
  items: NavItem[];
  depth: number;
}

/** A single flyout submenu, positioned to the right of its parent item. */
function Submenu({ items, depth }: SubmenuProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  const timers: RefObject<{
    open?: ReturnType<typeof setTimeout>;
    close?: ReturnType<typeof setTimeout>;
  }> = useHoverTimers();

  const scheduleOpen = (id: string) => {
    clearTimeout(timers.current.close);
    timers.current.open = setTimeout(() => setOpenId(id), OPEN_DELAY);
  };
  const scheduleClose = () => {
    clearTimeout(timers.current.open);
    timers.current.close = setTimeout(() => setOpenId(null), CLOSE_DELAY);
  };

  return (
    <ul
      className="absolute left-full top-0 min-w-45 rounded-sm border p-1 shadow bg-white"
      style={{ marginLeft: "2px" }}
    >
      {items.map((item) => {
        const hasChildren =
          Array.isArray(item.children) && item.children.length > 0;
        const isOpen = openId === item.id;
        return (
          <li
            key={item.id}
            className="relative"
            onMouseEnter={() => hasChildren && scheduleOpen(item.id)}
            onMouseLeave={scheduleClose}
          >
            <Link
              href={item.href}
              className="flex w-full items-center justify-between gap-4 px-2 py-2 text-left text-xs hover:bg-[#f5f5f5] rounded-sm"
            >
              <span className="truncate">{item.label}</span>
              {hasChildren && (
                <ChevronRight
                  size={13}
                  strokeWidth={2.5}
                  className="shrink-0"
                />
              )}
            </Link>
            {hasChildren && isOpen && (
              <Submenu items={item.children as NavItem[]} depth={depth + 1} />
            )}
          </li>
        );
      })}
    </ul>
  );
}

interface TopItemProps {
  item: NavItem;
  buttonColor?: "white" | "gray";
}

function GlassLink({
  children,
  href,
  className,
}: Readonly<{ children: ReactNode; href: string; className?: string }>) {
  return (
    <Link
      href={href}
      className={cn(
        "rounded px-4 py-2 text-xs flex items-center justify-between gap-2 backdrop-blur-lg whitespace-nowrap hover:backdrop-blur-none duration-300 transition-all",
        className,
      )}
    >
      {children}
      <ChevronRight size={16} />
    </Link>
  );
}

/** Top-level header bar item; opens its first-level submenu directly below it. */
export function TopItem({ item, buttonColor }: TopItemProps) {
  const [open, setOpen] = useState(false);
  const timers = useHoverTimers();
  const hasChildren = Array.isArray(item.children) && item.children.length > 0;

  const scheduleOpen = () => {
    clearTimeout(timers.current.close);
    timers.current.open = setTimeout(() => setOpen(true), OPEN_DELAY);
  };
  const scheduleClose = () => {
    clearTimeout(timers.current.open);
    timers.current.close = setTimeout(() => setOpen(false), CLOSE_DELAY);
  };

  return (
    <div
      className="relative"
      onMouseEnter={scheduleOpen}
      onMouseLeave={scheduleClose}
    >
      <GlassLink
        href={item.href}
        className={
          buttonColor === "white"
            ? "text-black bg-[#f5f5f5]"
            : "text-white bg-white/10 hover:bg-[#f5f5f5] hover:text-black"
        }
      >
        {item.label}
      </GlassLink>

      {hasChildren && open && (
        <ul
          className="absolute left-0 top-full min-w-45 max-w-fit rounded-sm bg-white p-1 border shadow"
          style={{ marginTop: "6px" }}
        >
          {(item.children as NavItem[]).map((child) => {
            const childHasChildren =
              Array.isArray(child.children) && child.children.length > 0;
            return (
              <SubmenuRow
                key={child.id}
                item={child}
                hasChildren={childHasChildren}
                depth={1}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
}

interface SubmenuRowProps {
  item: NavItem;
  hasChildren: boolean;
  depth: number;
}

/** One row inside a dropdown that can itself open a flyout to the right. */
function SubmenuRow({ item, hasChildren, depth }: SubmenuRowProps) {
  const [isOpen, setIsOpen] = useState(false);
  const timers = useHoverTimers();

  const scheduleOpen = () => {
    clearTimeout(timers.current.close);
    timers.current.open = setTimeout(() => setIsOpen(true), OPEN_DELAY);
  };
  const scheduleClose = () => {
    clearTimeout(timers.current.open);
    timers.current.close = setTimeout(() => setIsOpen(false), CLOSE_DELAY);
  };

  return (
    <li
      className="relative"
      onMouseEnter={() => hasChildren && scheduleOpen()}
      onMouseLeave={scheduleClose}
    >
      <Link
        href={item.href}
        className="flex w-full items-center justify-between gap-4 px-3 py-1.5 text-left text-xs bg-white hover:bg-[#f5f5f5] rounded-sm"
      >
        <span className="truncate">{item.label}</span>
        {hasChildren && (
          <ChevronRight size={13} strokeWidth={2.5} className="shrink-0" />
        )}
      </Link>
      {hasChildren && isOpen && (
        <Submenu items={item.children as NavItem[]} depth={depth + 1} />
      )}
    </li>
  );
}

interface HoverNavMenuProps {
  /** The top-level bar item's own label — not part of the server payload. */
  label: string;
  /** The top-level bar item's own link — not part of the server payload. */
  href: string;
  /** Raw menu payload straight from the server; becomes the dropdown contents. */
  data: MenuApiItem[];
  /** The top-level bar item's own slug — not part of the server payload. */
  parentSlug: string;
  buttonColor?: "white" | "gray";
}

export default function NestedNavMenu({
  label,
  href,
  data,
  parentSlug,
  buttonColor = "gray",
}: HoverNavMenuProps) {
  const topItem: NavItem = {
    id: "top",
    label,
    href,
    children: mapApiMenuToNavItems(data, parentSlug),
  };

  return (
    <nav className="flex items-center gap-1">
      <TopItem item={topItem} buttonColor={buttonColor} />
    </nav>
  );
}
