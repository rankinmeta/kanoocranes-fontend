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

const SalesHubPage = () => {
    return (
        <main>
            <HeroSection
                title="Cranes for sale for construction & industrial projects"
                description="Own high-performance lifting equipment from globally trusted manufacturers, backed by expertise, technical support, and long-term operational value."
                button1={{
                    id: 1,
                    label: "View Cranes",
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
            <BrandsSection />
            <FeaturedModelsSection />
            <OwnershipBenefitsSection />
            <EngineeringSupportSection />
            <BuyingGuideSection />
            <OurIndustriesSection />
            <GallerySection />
            <TestimonialSection />
            <ExpertsSection />
            <AboutUsSection />
            <ResourcesSection />
            <FooterCTASection />
        </main>
    );
};

export default SalesHubPage;
