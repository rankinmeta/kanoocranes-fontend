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
import {
  getCraneTypes,
  getCSPage,
  getManufacturers,
  getProjectTypes,
} from "@/data/loader";
import { returnMetadata } from "@/lib/utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return [];
}

async function loader(category: string) {
  const [pageData, craneTypes, projectTypes, manufacturers] = await Promise.all(
    [
      getCSPage(category),
      getCraneTypes(),
      getProjectTypes(),
      getManufacturers(),
    ],
  );
  if (!pageData || !pageData.data) notFound();
  return {
    pageData: pageData.data,
    craneTypes: craneTypes?.data || [],
    projectTypes: projectTypes?.data || [],
    manufacturers: manufacturers?.data || [],
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const { data } = await getCSPage(category);

  return returnMetadata(data);
}

const CategorySalesPage = async ({
  params,
}: {
  params: Promise<{ category: string }>;
}) => {
  const { category } = await params;
  if (!category) return notFound();

  const { pageData, craneTypes, projectTypes, manufacturers } = await loader(
    category as string,
  );
  return (
    <main>
      <HeroSection {...pageData.hero} className="max-w-2xl" />
      <FilterListSection
        {...pageData.filter_section}
        crane_types={craneTypes}
        project_types={projectTypes}
        manufacturers={manufacturers}
      />
      <ProcurementSection {...pageData.info_section} />
      <OwnershipBenefitsSection2 {...pageData.benefits_section} />
      <BrandHighlightSection {...pageData.brand_highlight} />
      <CraneCategorySection {...pageData.crane_categories} />
      <BuyingGuideSection {...pageData.buying_guide} />
      <SiteSelectionSection {...pageData.industry_application} />
      <GallerySection {...pageData.gallery_section} />
      <EngineeringSupportSection {...pageData.engineering_support_section} />
      <OwnershipBenefitsSection3 {...pageData.ownership_benefits} />
      <TestimonialSection {...pageData.testimonial_section} />
      <ExpertsSection {...pageData.experts_section} />
      <ResourcesSection {...pageData.related_resources} />
      <FooterCTASection {...pageData.footer_cta_section} />
    </main>
  );
};

export default CategorySalesPage;
