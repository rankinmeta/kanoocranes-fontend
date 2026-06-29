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

const RentalHubPage = () => {
    return (
        <main>
            <HeroSection
                title="Crane rental solutions for every project"
                description="Reliable crane rental services backed by expert engineering support, modern equipment, and responsive service across construction, infrastructure, and industrial sectors."
                button1={{
                    id: 1,
                    label: "Find your crane",
                    href: "/",
                    isExternal: false,
                }}
                button2={{
                    id: 2,
                    label: "Request a Quote",
                    href: "/",
                    isExternal: false,
                }}
                className="max-w-2xl"
            />
            <Section2 />
            <SalesCategorySection />
            <SiteSelectionSection />
            <FeaturedModelsSection />
            <AccordionSection />
            <EngineeringSupportSection />
            <FeaturedProjectsSection />
            <GallerySection />
            <TestimonialSection />
            <ExpertsSection />
            <ResourcesSection />
            <AboutUsSection />
            <FooterCTASection />
        </main>
    );
};

export default RentalHubPage;
