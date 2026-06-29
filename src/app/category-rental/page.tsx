import ProfessionalRentalSection from "@/components/pages/category-rental/professional-rental-section"
import Section2 from "@/components/pages/category-rental/section2"
import SelectionGuideSection from "@/components/pages/category-rental/selection-guide-section"
import CraneCategorySection from "@/components/pages/category-sales/crane-category-section"
import FilterListSection from "@/components/pages/category-sales/filter-list-section"
import OwnershipBenefitsSection3 from "@/components/pages/category-sales/ownership-benefits-section3"
import HeroSection from "@/components/pages/contact-us/hero-section"
import ExpertsSection from "@/components/pages/home/experts-section"
import FooterCTASection from "@/components/pages/home/footer-cta-section"
import GallerySection from "@/components/pages/home/gallery-section"
import ResourcesSection from "@/components/pages/home/resources-section"
import TestimonialSection from "@/components/pages/home/testimonial-section"
import SiteSelectionSection from "@/components/pages/rental-hub/site-selection-section"
import EngineeringSupportSection from "@/components/pages/sales-hub/engineering-support-section"

const CategoryRentalPage = () => {
  return (
    <main>
        <HeroSection
                title="Tower crane rental solutions for construction projects"
                description="Access reliable tower crane rental solutions for high-rise, commercial, and infrastructure projects. Backed by JASO equipment and engineering expertise, we help deliver safe, efficient, and productive lifting operations."
                button1={{
                    id: 1,
                    label: "Find Your Crane",
                    href: "/",
                    isExternal: false,
                }}
                button2={{
                    id: 2,
                    label: "Request Consultation",
                    href: "/",
                    isExternal: false,
                }}
                className="max-w-2xl"
            />
            <FilterListSection />
            <Section2 />
            <ProfessionalRentalSection />
            <CraneCategorySection theme="dark" />
            <SelectionGuideSection />
            <SiteSelectionSection />
            <GallerySection />
            <EngineeringSupportSection />
            <OwnershipBenefitsSection3 />
            <TestimonialSection />
            <ExpertsSection />
            <ResourcesSection />
            <FooterCTASection />
    </main>
  )
}

export default CategoryRentalPage