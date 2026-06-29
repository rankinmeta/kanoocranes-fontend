import BrandHighlightSection from "@/components/pages/category-sales/brand-highlight-section";
import CraneCategorySection from "@/components/pages/category-sales/crane-category-section";
import FilterListSection from "@/components/pages/category-sales/filter-list-section";
import OwnershipBenefitsSection2 from "@/components/pages/category-sales/ownership-benefits-section2";
import OwnershipBenefitsSection3 from "@/components/pages/category-sales/ownership-benefits-section3";
import HeroSection from "@/components/pages/contact-us/hero-section";
import ExpertsSection from "@/components/pages/home/experts-section";
import FooterCTASection from "@/components/pages/home/footer-cta-section";
import GallerySection from "@/components/pages/home/gallery-section";
import ResourcesSection from "@/components/pages/home/resources-section";
import TestimonialSection from "@/components/pages/home/testimonial-section";
import ProcurementSection from "@/components/pages/model/procurement-section";
import SiteSelectionSection from "@/components/pages/rental-hub/site-selection-section";
import BuyingGuideSection from "@/components/pages/sales-hub/buying-guide-section";
import EngineeringSupportSection from "@/components/pages/sales-hub/engineering-support-section";

const CategorySalesPage = () => {
    return (
        <main>
            <HeroSection
                title="Tower cranes for sale for construction projects"
                description="Invest in reliable tower cranes engineered for performance, productivity, and long-term operational value."
                button1={{
                    id: 1,
                    label: "View Available Models",
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
            <FilterListSection />
            <ProcurementSection />
            <OwnershipBenefitsSection2 />
            <BrandHighlightSection />
            <CraneCategorySection />
            <BuyingGuideSection />
            <SiteSelectionSection />
            <GallerySection />
            <EngineeringSupportSection />
            <OwnershipBenefitsSection3 />
            <TestimonialSection />
            <ExpertsSection />
            <ResourcesSection />
            <FooterCTASection />
        </main>
    );
};

export default CategorySalesPage;
