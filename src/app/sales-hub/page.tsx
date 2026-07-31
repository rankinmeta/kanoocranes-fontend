import BrandsSection from "@/components/pages/about-us/brands-section";
import HeroSection from "@/components/pages/contact-us/hero-section";
import AboutUsSection from "@/components/pages/home/about-us-section";
import ExpertsSection from "@/components/pages/home/experts-section";
import FeaturedModelsSection from "@/components/pages/home/featured-models-section";
import FooterCTASection from "@/components/pages/home/footer-cta-section";
import GallerySection from "@/components/pages/home/gallery-section";
import OurIndustriesSection from "@/components/pages/home/our-industries-section";
import ResourcesSection from "@/components/pages/home/resources-section";
import TestimonialSection from "@/components/pages/home/testimonial-section";
import BuyingGuideSection from "@/components/pages/sales-hub/buying-guide-section";
import EngineeringSupportSection from "@/components/pages/sales-hub/engineering-support-section";
import OwnershipBenefitsSection from "@/components/pages/sales-hub/ownership-benefits-section";
import SalesCategorySection from "@/components/pages/sales-hub/sales-category-section";
import Section2 from "@/components/pages/sales-hub/section2";
import { getSalesHubPage } from "@/data/loader";
import { returnMetadata } from "@/lib/utils";
import { type Metadata } from "next";
import { notFound } from "next/navigation";

async function loader() {
  const pageData = await getSalesHubPage();
  if (!pageData || !pageData.data) notFound();
  return {
    pageData: pageData.data,
  };
}

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await getSalesHubPage();

  return returnMetadata(data);
}

const SalesHubPage = async () => {
  const { pageData } = await loader();

  return (
    <main>
      <HeroSection {...pageData.hero} className="max-w-2xl" />
      <Section2 {...pageData.why_buy_from_us_section} />
      <SalesCategorySection {...pageData.sales_category_section} />
      <BrandsSection {...pageData.brands_section} />
      <FeaturedModelsSection {...pageData.featured_models_section} />
      <OwnershipBenefitsSection {...pageData.ownership_benefits} />
      <EngineeringSupportSection {...pageData.engineering_support_section} />
      <BuyingGuideSection {...pageData.buying_guide_section} />
      <OurIndustriesSection {...pageData.industries_section} />
      <GallerySection {...pageData.gallery_section} />
      <TestimonialSection {...pageData.testimonial_section} />
      <ExpertsSection {...pageData.experts_section} />
      <AboutUsSection {...pageData.investment_section} />
      <ResourcesSection {...pageData.related_resources} />
      <FooterCTASection {...pageData.footer_cta_section} />
    </main>
  );
};

export default SalesHubPage;
