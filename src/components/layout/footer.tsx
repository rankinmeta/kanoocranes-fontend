"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { StrapiImage } from "../common/strapi-image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { MediaProps } from "@/type";

type FooterProps = {
    socials: {
        id: number;
        icon: MediaProps;
        link: string;
        isExternal: boolean;
    }[];
    quick_links: {
        title: string;
        link: {
            id: number;
            label: string;
            isExternal: boolean;
            href: string;
        }[];
    },
    our_services: {
        title: string;
        link: {
            id: number;
            label: string;
            isExternal: boolean;
            href: string;
        }[];
    },
    industries: {
        title: string;
        link: {
            id: number;
            label: string;
            isExternal: boolean;
            href: string;
        }[];
    },
    contact_us: {
        phone: {
            id: number;
            label: string;
            isExternal: boolean;
            href: string;
        },
        email: {
            id: number;
            label: string;
            isExternal: boolean;
            href: string;
        },
        address: {
            id: number;
            label: string;
            isExternal: boolean;
            href: string;
        }
    }
}

const Footer = ({
    contact_us,
    industries,
    our_services,
    quick_links,
    socials
}: FooterProps) => {
    const pathname = usePathname();
  const padding = pathname.includes("/models");

    return (
        <footer className={cn("grid lg:grid-cols-3", padding && "md:mb-18")}>
            <div className="bg-primary m-4 lg:m-0 rounded-xl lg:rounded-none flex justify-center md:justify-start lg:justify-end">
                <div className="text-white rounded-xl lg:rounded-none space-y-1 pt-10 lg:pt-20 pb-10 ps-4 lg:ps-0 pe-4 lg:pe-6 bg-primary max-w-md">
                    <h6 className="text-3xl font-manrope">
                        Subscribe to our emails
                    </h6>
                    <p className="text-[15px]">
                        Get our latest offers and news straight in your inbox
                    </p>

                    <div className="flex items-center gap-1 pt-5">
                        <Input
                            placeholder="Enter your email ID"
                            className="bg-white h-9.5 rounded-sm placeholder:text-sm border-none"
                        />
                        <Button className="bg-white text-primary hover:bg-white/90 hover:text-primary">
                            Subscribe
                        </Button>
                    </div>

                    <div className="pt-10">
                        <span>Follow us on</span>
                        <ul className="flex gap-2 mt-3">
                            {socials?.map((social) => (
                                <li key={social.id} className="bg-white rounded-full size-12 flex items-center justify-center">
                                    <Link href={social.link} target={social.isExternal ? "_blank" : "_self"}>
                                        <StrapiImage
                                            src={social.icon.url}
                                            alt={social.icon.alternativeText || "Logo"}
                                            width={50}
                                            height={50}
                                            className="w-7 h-5"
                                        />
                                    </Link>
                                </li>
                            ))}
                            {/* <Link href={"/"}>
                                <li className="bg-white rounded-full size-12 flex items-center justify-center">
                                    <StrapiImage
                                        src="http://localhost:3000/local/yt.png"
                                        alt="yt"
                                        width={50}
                                        height={50}
                                        className="w-7 h-5"
                                    />
                                </li>
                            </Link> */}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-2 pt-3 lg:pt-20 ps-5 lg:ps-8 pe-5 lg:pe-6 max-w-6xl">
                {/* Desktop */}
                <div className="hidden lg:grid grid-cols-4 gap-1">
                    <dl className="shrink-0 space-y-2 [&>dd]:text-sm">
                        <dt className="font-manrope font-medium mb-3">
                            {quick_links?.title}
                        </dt>
                        {quick_links?.link.map((link) => (
                            <dd key={link.id}>
                                <Link href={link.href} target={link.isExternal ? "_blank" : "_self"}>
                                    {link.label}
                                </Link>
                            </dd>
                        ))}
                    </dl>
                    <dl className="shrink-0 space-y-2 [&>dd]:text-sm">
                        <dt className="font-manrope font-medium mb-3">
                            {our_services?.title}
                        </dt>
                        {our_services?.link.map((link) => (
                            <dd key={link.id}>
                                <Link href={link.href} target={link.isExternal ? "_blank" : "_self"}>
                                    {link.label}
                                </Link>
                            </dd>
                        ))}
                    </dl>
                    <dl className="shrink-0 space-y-2 [&>dd]:text-sm">
                        <dt className="font-manrope font-medium mb-3">
                            {industries?.title}
                        </dt>
                        {industries?.link.map((link) => (
                            <dd key={link.id}>
                                <Link href={link.href} target={link.isExternal ? "_blank" : "_self"}>
                                    {link.label}
                                </Link>
                            </dd>
                        ))}
                    </dl>

                    <dl className="shrink-0 space-y-2">
                        <dt className="font-manrope font-medium mb-3">
                            Contact us
                        </dt>
                        <dl className="mb-2 text-sm">
                            <dt>Phone</dt>
                            <dd className="font-medium">
                                <Link href={contact_us?.phone.href} target={contact_us?.phone.isExternal ? "_blank" : "_self"}>
                                    {contact_us?.phone.label}
                                </Link>
                            </dd>
                        </dl>
                        <dl className="mb-2 text-sm">
                            <dt>Email</dt>
                            <dd className="font-medium">
                                <Link href={contact_us?.email.href} target={contact_us?.email.isExternal ? "_blank" : "_self"}>    
                                    {contact_us?.email.label}
                                </Link>
                            </dd>
                        </dl>
                        <dl className="mb-2 text-sm">
                            <dt>Address</dt>
                            <dd className="max-w-xs font-medium">
                                <Link href={contact_us?.address.href} target={contact_us?.address.isExternal ? "_blank" : "_self"}>        
                                    {contact_us?.address.label}
                                </Link>
                            </dd>
                        </dl>
                    </dl>
                </div>

                {/* Mobile */}
                <div className="lg:hidden">
                <Accordion type="single" className="border-none">
                        <AccordionItem value="quick-links">
                            <AccordionTrigger hideBullet iconColor="text-black!" className="px-0">
                                {quick_links?.title}
                            </AccordionTrigger>
                            <AccordionContent className="h-fit! pt-3">
                                <ul className="-ms-3 space-y-3 text-base">
                                    {quick_links?.link.map((link) => (
                                        <li key={link.id}>
                                            <Link href={link.href} target={link.isExternal ? "_blank" : "_self"}>
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="service">
                            <AccordionTrigger hideBullet iconColor="text-black!" className="px-0">
                                {our_services?.title}
                            </AccordionTrigger>
                            <AccordionContent className="h-fit! pt-3">
                                <ul className="-ms-3 space-y-3 text-base">
                                    {our_services?.link.map((link) => (
                                        <li key={link.id}>
                                            <Link href={link.href} target={link.isExternal ? "_blank" : "_self"}>
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="industries">
                            <AccordionTrigger hideBullet iconColor="text-black!" className="px-0">
                                {industries?.title}
                            </AccordionTrigger>
                            <AccordionContent className="h-fit! pt-3">
                                <ul className="-ms-3 space-y-3 text-base">
                                    {industries?.link.map((link) => (
                                        <li key={link.id}>
                                            <Link href={link.href} target={link.isExternal ? "_blank" : "_self"}>
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    <dl className="shrink-0 space-y-2 mt-3">
                        <dt className="font-manrope font-medium mb-4 text-xl">
                            Contact us
                        </dt>
                        <dl className="mb-3">
                            <dt>Phone</dt>
                            <dd className="font-medium">
                                <Link href={contact_us?.phone.href} target={contact_us?.phone.isExternal ? "_blank" : "_self"}>    
                                    {contact_us?.phone.label}
                                </Link>
                            </dd>
                        </dl>
                        <dl className="mb-3">
                            <dt>Email</dt>
                            <dd className="font-medium">
                                <Link href={contact_us?.email.href} target={contact_us?.email.isExternal ? "_blank" : "_self"}>                
                                    {contact_us?.email.label}    
                                </Link>
                            </dd>
                        </dl>
                        <dl className="mb-3">
                            <dt>Address</dt>
                            <dd className="max-w-xs font-medium">
                                <Link href={contact_us?.address.href} target={contact_us?.address.isExternal ? "_blank" : "_self"}>        
                                    {contact_us?.address.label}
                                </Link>
                            </dd>
                        </dl>
                    </dl>
                </div>

                <hr className="my-7 lg:my-10" />

                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 lg:gap-0 mb-7">
                    <span className="text-base lg:text-xs text-[#414651]">
                        &copy; {new Date().getFullYear()} Kanoo Cranes. All
                        Rights Reserved
                    </span>
                    <span className="text-base lg:text-xs text-[#414651]">
                        Design by{" "}
                        <Link
                            href="https://rankinmeta.com"
                            target="_blank"
                            className="underline text-black"
                        >
                            Rankinmeta
                        </Link>
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
