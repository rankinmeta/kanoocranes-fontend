"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

const MenuSheet = () => {
  const [open, setOpen] = useState(false);

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
          <li>
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>
          </li>

          <li>
            <Link href="/about-us" onClick={() => setOpen(false)}>
              About us
            </Link>
          </li>

          <li>
            <Link href="/eng-solutions" onClick={() => setOpen(false)}>
              Solutions
            </Link>
          </li>

          <li>
            <Link href="/rental-hub" onClick={() => setOpen(false)}>
              Rent cranes
            </Link>
          </li>

          <li>
            <Link href="/sales-hub" onClick={() => setOpen(false)}>
              Buy cranes
            </Link>
          </li>

          <li>
            <Link href="/rental" onClick={() => setOpen(false)}>
              Rental
            </Link>
          </li>

          <li>
            <Link href="/resource-hub" onClick={() => setOpen(false)}>
              Resource hub
            </Link>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default MenuSheet;