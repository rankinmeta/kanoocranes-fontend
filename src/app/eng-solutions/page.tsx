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
            title="Engineered lifting solutions for complex projects"
            description="Kanoo Cranes delivers comprehensive lifting engineering services that go beyond equipment supply. From lift planning and crane positioning to foundation design and installation support, our engineering team helps ensure safe, efficient, and successful project execution."
            button1={{
                id: 1,
                label: "Request Consultation",
                href: "/",
                isExternal: false,
            }}
            button2={{
                id: 2,
                label: "Talk to an Expert",
                href: "/",
                isExternal: false,
            }}
            className="max-w-2xl"
        />
        <Section2 />
        <EngineeringServicesSection />
        <CardsSection />
        <Section2Eng />
        <BuyingGuideSection />
        <FeaturedProjectsSection {...pageData.featured_projects_section} />
        <GallerySection/>
        <TestimonialSection />
        <EngineeringSupportSection />
        <StickyCardsOneSideSection className="bg-secondary text-white" cardStyles="bg-[#041D54] [&_p]:text-[#A4A7AE]" />
        <ExpertsSection theme="light" />
        <ResourcesSection />
        <FooterCTASection {...pageData.footer_cta_section} />
    </main>
  )
}

export default EngSolutionsPage