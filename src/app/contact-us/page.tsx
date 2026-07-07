import FormSection from "@/components/pages/contact-us/form-section";
import HeroSection from "@/components/pages/contact-us/hero-section";
import Section2 from "@/components/pages/contact-us/section2";
import FooterCTASection from "@/components/pages/home/footer-cta-section";
import { LogoMarquee } from "@/components/pages/home/logo-marquee";
import { getContactUsPage } from "@/data/loader";
import { returnMetadata } from "@/lib/utils";
import { type Metadata } from "next";
import { notFound } from "next/navigation";

let contactUsPageDataPromise: ReturnType<typeof getContactUsPage> | null = null;

function getContactUsPageOnce() {
  if (!contactUsPageDataPromise) {
    contactUsPageDataPromise = getContactUsPage();
  }
  return contactUsPageDataPromise;
}

async function loader() {
  const pageData = await getContactUsPageOnce();
  if (!pageData || !pageData.data) notFound();
  return {
    pageData: pageData.data,
  };
}

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await getContactUsPageOnce();

  return returnMetadata(data);
}

const ContactUsPage = async () => {
  const { pageData } = await loader();

  return (
    <main>
      <HeroSection {...pageData.hero} />
      <Section2 {...pageData.contact_details} />
      <FormSection {...pageData.form_section} />
      <LogoMarquee partners_section={pageData.partners_section} />
      <FooterCTASection hide {...pageData.footer_cta_section} />
    </main>
  );
};

export default ContactUsPage;
