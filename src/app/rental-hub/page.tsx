import HeroSection from "@/components/pages/contact-us/hero-section";
import AboutUsSection from "@/components/pages/home/about-us-section";
import ExpertsSection from "@/components/pages/home/experts-section";
import FeaturedModelsSection from "@/components/pages/home/featured-models-section";
import FeaturedProjectsSection from "@/components/pages/home/featured-projects-section";
import FooterCTASection from "@/components/pages/home/footer-cta-section";
import GallerySection from "@/components/pages/home/gallery-section";
import ResourcesSection from "@/components/pages/home/resources-section";
import TestimonialSection from "@/components/pages/home/testimonial-section";
import AccordionSection from "@/components/pages/rental-hub/accordion-section";
import Section2 from "@/components/pages/rental-hub/section2";
import SiteSelectionSection from "@/components/pages/rental-hub/site-selection-section";
import EngineeringSupportSection from "@/components/pages/sales-hub/engineering-support-section";
import SalesCategorySection from "@/components/pages/sales-hub/sales-category-section";
import { getRentalHubPage } from "@/data/loader";
import { returnMetadata } from "@/lib/utils";
import { type Metadata } from "next";
import { notFound } from "next/navigation";

let rentalHubPageDataPromise: ReturnType<typeof getRentalHubPage> | null = null;

function getRentalHubPageOnce() {
  if (!rentalHubPageDataPromise) {
    rentalHubPageDataPromise = getRentalHubPage();
  }
  return rentalHubPageDataPromise;
}

async function loader() {
  const pageData = await getRentalHubPageOnce();
  if (!pageData || !pageData.data) notFound();
  return {
    pageData: pageData.data,
  };
}

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await getRentalHubPageOnce();

  return returnMetadata(data);
}

const RentalHubPage = async () => {
    const { pageData } = await loader();

    return (
        <main>
            <HeroSection
                {...pageData.hero}
                className="max-w-2xl"
            />
            <Section2
                cards={pageData.why_rent_from_us_section.details}
                {...pageData.why_rent_from_us_section}
            />
            <SalesCategorySection {...pageData.sales_category_section} />
            <SiteSelectionSection {...pageData.site_selection_section} />
            <FeaturedModelsSection {...pageData.featured_models_section} />
            <AccordionSection {...pageData.rental_benefit_section} />
            <EngineeringSupportSection {...pageData.engineering_support_section} />
            <FeaturedProjectsSection {...pageData.featured_projects_section} />
            <GallerySection {...pageData.gallery_section} />
            <TestimonialSection {...pageData.testimonial_section} />
            <ExpertsSection {...pageData.experts_section} />
            <ResourcesSection {...pageData.related_resources} />
            <AboutUsSection {...pageData.industry_expertise_section} />
            <FooterCTASection {...pageData.footer_cta_section} />
        </main>
    );
};

export default RentalHubPage;
