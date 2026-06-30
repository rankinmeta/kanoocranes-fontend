import HeroSection from "@/components/pages/contact-us/hero-section"
import CardsSection from "@/components/pages/eng-solutions/cards-section"
import EngineeringServicesSection from "@/components/pages/eng-solutions/engineering-services-section"
import Section2 from "@/components/pages/eng-solutions/section2"
import StickyCardsOneSideSection from "@/components/pages/eng-solutions/sticky-cards-one-side-section";
import ExpertsSection from "@/components/pages/home/experts-section";
import FeaturedProjectsSection from "@/components/pages/home/featured-projects-section";
import FooterCTASection from "@/components/pages/home/footer-cta-section";
import GallerySection from "@/components/pages/home/gallery-section";
import ResourcesSection from "@/components/pages/home/resources-section";
import TestimonialSection from "@/components/pages/home/testimonial-section";
import Section2Eng from "@/components/pages/rental-hub/section2";
import BuyingGuideSection from "@/components/pages/sales-hub/buying-guide-section";
import EngineeringSupportSection from "@/components/pages/sales-hub/engineering-support-section";
import { getEngSolutionsPage } from "@/data/loader";
import { notFound } from "next/navigation";

let engSolutionsPageDataPromise: ReturnType<typeof getEngSolutionsPage> | null = null;

function getEngSolutionsPageOnce() {
    if (!engSolutionsPageDataPromise) {
        engSolutionsPageDataPromise = getEngSolutionsPage();
    }
    return engSolutionsPageDataPromise;
}

async function loader() {
    const pageData = await getEngSolutionsPageOnce();
    console.log(pageData);
    if (!pageData || !pageData.data) notFound();
    return {
        pageData: pageData.data,
    };
}

const EngSolutionsPage = async () => {
  const { pageData } = await loader();

  return (
    <main>
        <HeroSection
            title={pageData.hero.title}
            description={pageData.hero.description}
            button1={pageData.hero.button1}
            button2={pageData.hero.button2}
            className="max-w-2xl"
        />
        <Section2 {...pageData.crane_engineering_section} />
        <EngineeringServicesSection {...pageData.engineering_services} />
        <CardsSection sticky_cards={pageData.sticky_cards} />
        <Section2Eng {...pageData.engineering_advantage} />
        <BuyingGuideSection {...pageData.how_we_work} />
        <FeaturedProjectsSection {...pageData.featured_projects_section} />
        <GallerySection {...pageData.gallery_section} />
        <TestimonialSection {...pageData.testimonial_section} />
        <EngineeringSupportSection {...pageData.integrated_solution_section} />
        <StickyCardsOneSideSection className="bg-secondary text-white" cardStyles="bg-[#041D54] [&_p]:text-[#A4A7AE]" {...pageData.industry_application} />
        <ExpertsSection theme="light" {...pageData.experts_section} />
        <ResourcesSection />
        <FooterCTASection {...pageData.footer_cta_section} />
    </main>
  )
}

export default EngSolutionsPage