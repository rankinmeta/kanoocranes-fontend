import FormSection from "@/components/pages/contact-us/form-section";
import HeroSection from "@/components/pages/contact-us/hero-section";
import Section2 from "@/components/pages/contact-us/section2";
import ExpertsSection from "@/components/pages/home/experts-section";
import FooterCTASection from "@/components/pages/home/footer-cta-section";
import { LogoMarquee } from "@/components/pages/home/logo-marquee";
import { getContactUsPage } from "@/data/loader";
import { returnMetadata } from "@/lib/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

async function loader() {
  const pageData = await getContactUsPage();
  if (!pageData || !pageData.data) notFound();
  return {
    pageData: pageData.data,
  };
}

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await getContactUsPage();

  return returnMetadata(data);
}

const ContactUsPage = async () => {
  const { pageData } = await loader();

  return (
    <main>
      <HeroSection {...pageData.hero} />
      <Section2 {...pageData.contact_details} />
      <ExpertsSection {...pageData.experts_section} />
      <FormSection {...pageData.form_section} />
      <LogoMarquee partners_section={pageData.partners_section} />
      <FooterCTASection hide {...pageData.footer_cta_section} />
    </main>
  );
};

export default ContactUsPage;
