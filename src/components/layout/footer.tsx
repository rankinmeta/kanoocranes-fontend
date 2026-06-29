import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { StrapiImage } from "../common/strapi-image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

const Footer = () => {
    return (
        <footer className="grid lg:grid-cols-3">
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
                            <Link href={"/"}>
                                <li className="bg-white rounded-full size-12 flex items-center justify-center">
                                    <StrapiImage
                                        src="http://localhost:3000/local/yt.png"
                                        alt="yt"
                                        width={50}
                                        height={50}
                                        className="w-7 h-5"
                                    />
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-2 pt-3 lg:pt-20 ps-5 lg:ps-8 pe-5 lg:pe-6 max-w-6xl">
                {/* Desktop */}
                <div className="hidden lg:grid grid-cols-4 gap-1">
                    <dl className="shrink-0 space-y-2 [&>dd]:text-sm">
                        <dt className="font-manrope font-medium mb-3">
                            Quick links
                        </dt>
                        <dd>Home</dd>
                        <dd>About us</dd>
                        <dd>Contact us</dd>
                        <dd>Careers</dd>
                    </dl>
                    <dl className="shrink-0 space-y-2 [&>dd]:text-sm">
                        <dt className="font-manrope font-medium mb-3">
                            Our services
                        </dt>
                        <dd>Crane rental</dd>
                        <dd>Heavy Lifting Solutions</dd>
                        <dd>Lift Planning & Engineering</dd>
                        <dd>Maintenance & support</dd>
                    </dl>
                    <dl className="shrink-0 space-y-2 [&>dd]:text-sm">
                        <dt className="font-manrope font-medium mb-3">
                            Industries
                        </dt>
                        <dd>Oil & Gas</dd>
                        <dd>Construction</dd>
                        <dd>Energy & Utilities</dd>
                        <dd>Infrastructure</dd>
                    </dl>

                    <dl className="shrink-0 space-y-2">
                        <dt className="font-manrope font-medium mb-3">
                            Contact us
                        </dt>
                        <dl className="mb-2 text-sm">
                            <dt>Phone</dt>
                            <dd className="font-medium">+971 50 482 7612</dd>
                        </dl>
                        <dl className="mb-2 text-sm">
                            <dt>Email</dt>
                            <dd className="font-medium">
                                support@kanoocranes.com
                            </dd>
                        </dl>
                        <dl className="mb-2 text-sm">
                            <dt>Address</dt>
                            <dd className="max-w-xs font-medium">
                                Hamriya Free Zone, UAE
                            </dd>
                        </dl>
                    </dl>
                </div>

                {/* Mobile */}
                <div className="lg:hidden">
                <Accordion type="single" className="border-none">
                        <AccordionItem value="quick-links">
                            <AccordionTrigger hideBullet iconColor="text-black!" className="px-0">
                                Quick Links
                            </AccordionTrigger>
                            <AccordionContent className="h-fit! pt-3">
                                <ul className="-ms-3 space-y-3 text-base">
                                    <li><Link href={"/"}>Home</Link></li>
                                    <li><Link href={"/about-us"}>About us</Link></li>
                                    <li><Link href={"/contact-us"}>Contact us</Link></li>
                                    <li><Link href={"/rental-hub"}>Rent cranes</Link></li>
                                    <li><Link href={"/sales-hub"}>Buy cranes</Link></li>
                                    <li><Link href={"/resource-hub"}>Resource hub</Link></li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="service">
                            <AccordionTrigger hideBullet iconColor="text-black!" className="px-0">
                                Our Services
                            </AccordionTrigger>
                            <AccordionContent className="h-fit! pt-3">
                                <ul className="-ms-3 space-y-3 text-base">
                                    <li><Link href={"/"}>Home</Link></li>
                                    <li><Link href={"/about-us"}>About us</Link></li>
                                    <li><Link href={"/contact-us"}>Contact us</Link></li>
                                    <li><Link href={"/rental-hub"}>Rent cranes</Link></li>
                                    <li><Link href={"/sales-hub"}>Buy cranes</Link></li>
                                    <li><Link href={"/resource-hub"}>Resource hub</Link></li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="industries">
                            <AccordionTrigger hideBullet iconColor="text-black!" className="px-0">
                                Industries
                            </AccordionTrigger>
                            <AccordionContent className="h-fit! pt-3">
                                <ul className="-ms-3 space-y-3 text-base">
                                    <li><Link href={"/"}>Home</Link></li>
                                    <li><Link href={"/about-us"}>About us</Link></li>
                                    <li><Link href={"/contact-us"}>Contact us</Link></li>
                                    <li><Link href={"/rental-hub"}>Rent cranes</Link></li>
                                    <li><Link href={"/sales-hub"}>Buy cranes</Link></li>
                                    <li><Link href={"/resource-hub"}>Resource hub</Link></li>
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
                            <dd className="font-medium">+971 50 482 7612</dd>
                        </dl>
                        <dl className="mb-3">
                            <dt>Email</dt>
                            <dd className="font-medium">
                                support@kanoocranes.com
                            </dd>
                        </dl>
                        <dl className="mb-3">
                            <dt>Address</dt>
                            <dd className="max-w-xs font-medium">
                                Hamriya Free Zone, UAE
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
