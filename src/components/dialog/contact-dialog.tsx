import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ContactForm from "../pages/contact-us/contact-form";
import { type ReactNode } from "react";

export function ContactDialog({
  children,
  defaultCrane,
}: {
  children: ReactNode;
  defaultCrane?: string;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-fit max-h-120 overflow-y-scroll scrollbar-thin pb-10">
        <DialogHeader>
          <DialogTitle className="sr-only">Contact form</DialogTitle>
          <DialogDescription className="sr-only">
            contact form
          </DialogDescription>
        </DialogHeader>
        <ContactForm defaultCrane={defaultCrane} />
      </DialogContent>
    </Dialog>
  );
}
