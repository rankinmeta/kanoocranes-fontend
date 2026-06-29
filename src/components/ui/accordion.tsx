"use client";

import * as React from "react";
import { Accordion as AccordionPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";
import { HugeiconsIcon } from "@hugeicons/react";
import {
    PlusSignIcon,
    MinusSignIcon,
} from "@hugeicons/core-free-icons";

function Accordion({
    className,
    ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
    return (
        <AccordionPrimitive.Root
            data-slot="accordion"
            className={cn(
                "flex w-full flex-col overflow-hidden rounded-md border",
                className
            )}
            {...props}
        />
    );
}

function AccordionItem({
    className,
    ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
    return (
        <AccordionPrimitive.Item
            data-slot="accordion-item"
            className={cn(
                "not-last:border-b py-3 border-b-[#A4A7AE]",
                className
            )}
            {...props}
        />
    );
}

function AccordionTrigger({
    className,
    children,
    hideBullet,
    iconColor = "text-white!",
    ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>  & { hideBullet?: boolean, iconColor?: string }) {
    return (
        <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger
                data-slot="accordion-trigger"
                className={cn(
                    "group/accordion-trigger relative text-xl flex flex-1 items-start justify-between gap-6 border border-transparent p-2 text-left transition-all outline-none hover:underline disabled:pointer-events-none disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-5 **:data-[slot=accordion-trigger-icon]:text-muted-foreground",
                    className
                )}
                {...props}
            >
                <div className="flex items-center gap-2">
                    <div className={cn("size-2 bg-primary", hideBullet && "hidden")} />
                    {children}
                </div>
                <HugeiconsIcon
                    icon={PlusSignIcon}
                    strokeWidth={2}
                    data-slot="accordion-trigger-icon"
                    className={cn("pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden", iconColor)}
                />
                <HugeiconsIcon
                    icon={MinusSignIcon}
                    strokeWidth={2}
                    data-slot="accordion-trigger-icon"
                    className={cn("pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline", iconColor)}
                />
            </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
    );
}

function AccordionContent({
    className,
    children,
    ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
    return (
        <AccordionPrimitive.Content
            data-slot="accordion-content"
            className="overflow-hidden ps-6 px-2 text-sm data-open:animate-accordion-down data-closed:animate-accordion-up"
            {...props}
        >
            <div
                className={cn(
                    "h-(--radix-accordion-content-height) pt-0 pb-4 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4",
                    className
                )}
            >
                {children}
            </div>
        </AccordionPrimitive.Content>
    );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
