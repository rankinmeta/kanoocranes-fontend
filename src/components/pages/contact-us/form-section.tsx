import HighlightedTitle from "@/components/common/highlight-title";
import { StrapiImage } from "@/components/common/strapi-image";
import { extractHighlightText, getImage } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ContactForm from "./contact-form";
import { LinkProps, MediaProps } from "@/type";

type FormSectionProps = {
  id: number;
  title: string;
  description: string;
  phone1: string;
  phone2: string;
  working_days: string;
  working_hours: string;
  headquater: string;
  headquater_address: string;
  form_title: string;
  form_description: string;
  headquater_image: MediaProps;
  link: LinkProps;
};

const FormSection = (props: FormSectionProps) => {
  return (
    <section className="bg-[#F5F5F5]" id="form">
      <div className="container container-padding-x py-10 md:py-16 lg:py-20 grid md:grid-cols-2 lg:grid-cols-5 gap-5">
        <div className="max-w-104 space-y-3 lg:col-span-2">
          <HighlightedTitle
            title={props.title || "Contact us"}
            highlights={extractHighlightText(props.title || "Contact us")}
            className="font-manrope"
          />
          <p className="text-[#414651]">{props.description}</p>

          <div className="bg-white rounded-md p-5 mt-5">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="size-2 bg-primary" />
                <span className="font-medium">Contact us</span>
              </div>
              <span className="mr-3 text-[#414651]">{props.phone1}</span>
              <span className="text-[#414651]">{props.phone2}</span>
            </div>
            <hr className="my-4" />
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="size-2 bg-primary" />
                <span className="font-medium">Working Hours</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">{props.working_days}</span>
                <span className="text-[#414651]">{props.working_hours}</span>
              </div>
            </div>
            <hr className="my-4" />
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="size-2 bg-primary" />
                <span className="font-medium">Headquarters</span>
              </div>
              <div className="flex items-center gap-4">
                {props.headquater_image && (
                  <StrapiImage
                    src={props.headquater_image.url}
                    alt={props.headquater_image.alternativeText || ""}
                    width={100}
                    height={100}
                    className="rounded-md aspect-[2/1.3] object-cover"
                  />
                )}
                <div className="space-y-2">
                  <div>
                    <h3 className="max-w-48 font-medium">{props.headquater}</h3>
                    <p className="text-[#414651] text-sm">
                      {props.headquater_address}
                    </p>
                  </div>

                  {props.link && (
                    <Link
                      href={props.link.href}
                      target={props.link.isExternal ? "_blank" : "_self"}
                      className="text-primary flex items-center gap-1 text-sm font-medium"
                    >
                      {props.link.label} <ArrowRight size={16} />
                    </Link>
                  )}
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
