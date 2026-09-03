import Section2 from "@/components/pages/sales-hub/section2";
import { ProductGallery } from "../../../components/pages/model/product-gallery";
import { ProductInfo } from "../../../components/pages/model/product-info";
import ProcurementSection from "@/components/pages/model/procurement-section";
import Section2Rental from "@/components/pages/rental-hub/section2";
import DownloadsSection from "@/components/pages/model/downloads-section";
import RelatedModels from "@/components/pages/model/related-models";
import SiteSelectionSection from "@/components/pages/rental-hub/site-selection-section";
import ProjectsSection from "@/components/pages/model/projects-section";
import GallerySection from "@/components/pages/home/gallery-section";
import TestimonialSection from "@/components/pages/home/testimonial-section";
import FooterCTASection from "@/components/pages/home/footer-cta-section";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";
import StickyCardsOneSideSection from "@/components/pages/eng-solutions/sticky-cards-one-side-section";
import { notFound } from "next/navigation";
import { getModelPage } from "@/data/loader";
import StickyCTA from "@/components/layout/sticky-cta";
import { type Metadata } from "next";
import { returnMetadata } from "@/lib/utils";

export async function generateStaticParams() {
  return [];
}

async function loader(model: string) {
  const pageData = await getModelPage(model);
  if (!pageData || !pageData.data) notFound();
  return {
    pageData: pageData.data,
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ model: string }>;
}): Promise<Metadata> {
  const { model } = await params;
  const { data } = await getModelPage(model);

  return returnMetadata(data);
}

const ModalPage = async ({
  params,
}: {
  params: Promise<{ model: string }>;
}) => {
  const { model } = await params;
  if (!model) return notFound();

  const { pageData } = await loader(model as string);

  return (
    <main>
      <section className="container container-padding-x pb-10 md:pb-20">
        <Breadcrumb className="mb-5">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                <Home
                  size={16}
                  className="text-[#A4A7AE] hover:text-secondary"
                />
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-[#A4A7AE]" />
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/models"
                className="text-[#A4A7AE] hover:text-secondary"
              >
                Models
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-[#A4A7AE]" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-secondary">
                {pageData.model_name}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="grid gap-6 lg:gap-12 lg:grid-cols-2">
          <ProductGallery images={pageData.main_section.images} />

          <ProductInfo
            title={pageData.main_section.title}
            short_description={pageData.main_section.short_description}
            crane_capacity={pageData.main_section.crane_capacity}
            max_working_radius={pageData.main_section.max_working_radius}
            max_lifting_height={pageData.main_section.max_lifting_height}
            hook_height={pageData.main_section.hook_height}
            crane_configuration={pageData.main_section.crane_configuration}
            manufacturer={pageData.manufacturer?.name}
            model_specifications={pageData.main_section.model_specifications}
            overview={pageData.main_section.overview}
          />
        </div>
      </section>
      <Section2
        details={pageData.why_buy_from_kc_section.cards}
        {...pageData.why_buy_from_kc_section}
      />
      <DownloadsSection {...pageData.downloads_section} />
      <StickyCardsOneSideSection {...pageData.technical_application} />
      <Section2Rental
        className="bg-white"
        {...pageData.safety_and_compliance}
      />
      <ProcurementSection {...pageData.procurement_section} />
      <RelatedModels {...pageData.related_model_section} />
      <SiteSelectionSection {...pageData.applications_section} />
      <ProjectsSection {...pageData.projects_section} />
      <GallerySection {...pageData.gallery_section} />
      <TestimonialSection {...pageData.testimonial_section} />
      <FooterCTASection {...pageData.footer_cta_section} />

      <StickyCTA
        title={pageData.main_section.title}
        defaultCrane={pageData.model_name}
      />
    </main>
  );
};

export default ModalPage;
