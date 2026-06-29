import HighlightedTitle from "@/components/common/highlight-title";
import { StrapiImage } from "@/components/common/strapi-image";
import { extractHighlightText, getImage } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ContactForm from "./contact-form";

const FormSection = () => {
    return (
        <section className="bg-[#F5F5F5]">
            <div className="container container-padding-x py-10 md:py-16 lg:py-20 grid md:grid-cols-2 lg:grid-cols-5 gap-5">
                <div className="max-w-104 space-y-3 lg:col-span-2">
                    <HighlightedTitle
                        title="Visit or contact <b>our team</b>"
                        highlights={extractHighlightText(
                            "Visit or contact <b>our team</b>"
                        )}
                        className="font-manrope"
                    />
                    <p className="text-[#414651]">
                        Our regional offices are ready to support your lifting
                        requirements across the GCC.
                    </p>

                    <div className="bg-white rounded-md p-5 mt-5">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <div className="size-2 bg-primary" />
                                <span className="font-medium">Contact us</span>
                            </div>
                            <span className="mr-3 text-[#414651]">
                                +973 1770 7700
                            </span>
                            <span className="text-[#414651]">
                                +971 543 789 3245
                            </span>
                        </div>
                        <hr className="my-4" />
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <div className="size-2 bg-primary" />
                                <span className="font-medium">
                                    Working Hours
                                </span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-medium">
                                    Sunday - Thursday
                                </span>
                                <span className="text-[#414651]">
                                    8:00 AM - 5:00 PM
                                </span>
                            </div>
                        </div>
                        <hr className="my-4" />
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <div className="size-2 bg-primary" />
                                <span className="font-medium">
                                    Headquarters
                                </span>
                            </div>
                            <div className="flex items-center gap-4">
                                <StrapiImage
                                    src={getImage({
                                        local: "http://localhost:3000/local/crane1.png",
                                        prod: "",
                                    })}
                                    alt={"crane"}
                                    width={100}
                                    height={100}
                                    className="rounded-md aspect-[2/1.3] object-cover"
                                />
                                <div className="space-y-2">
                                    <div>
                                        <h3 className="max-w-48 font-medium">
                                            Kanoo Cranes
                                        </h3>
                                        <p className="text-[#414651] text-sm">
                                            Manama, Kingdom of Bahrain
                                        </p>
                                    </div>

                                    <Link
                                        href={"#"}
                                        className="text-primary flex items-center gap-1 text-sm font-medium"
                                    >
                                        View Location <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ContactForm />
            </div>
        </section>
    );
};

export default FormSection;
