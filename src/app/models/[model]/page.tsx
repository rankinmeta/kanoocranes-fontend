import Section2 from "@/components/pages/sales-hub/section2";
import { ProductGallery } from "../../../components/pages/model/product-gallery";
import { ProductInfo } from "../../../components/pages/model/product-info";
import { type Product } from "../../../components/pages/model/type";
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

export const crane: Product = {
    id: "jaso-j560",

    name: "JASO J560",
    category: "Flat-top Tower Crane",

    description:
        "A high-capacity tower crane engineered for large-scale construction projects requiring exceptional reach, lifting performance and operational efficiency.",

    stats: {
        capacity: "32 Ton",
        radius: "65m",
        height: "80m+",
    },

    highlights: [
        {
            label: "Maximum Capacity",
            value: "32 Ton",
        },
        {
            label: "Maximum Radius",
            value: "80m",
        },
        {
            label: "Hook Height",
            value: "85m+",
        },
        {
            label: "Configuration",
            value: "Flat-Top",
        },
    ],

    images: [
        "/local/crane1.png",
        "/local/crane2.png",
        "/local/crane3.png",
        "/local/unit1.webp",
    ],

    overview:
        "The JASO J560 is a high-performance flat-top tower crane designed for demanding construction environments.",

    specifications: [
        {
            label: "Manufacturer",
            value: "JASO",
        },
        {
            label: "Maximum Capacity",
            value: "32 Ton",
        },
        {
            label: "Maximum Hook Height",
            value: "85m+",
        },
        {
            label: "Jib Configuration",
            value: "Flat-Top",
        },
        {
            label: "Application",
            value: "High-Rise Construction",
        },
    ],
};

const ModalPage = () => {
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
                                Breadcrumb
                            </BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <div className="grid gap-6 lg:gap-12 lg:grid-cols-2">
                    <ProductGallery images={crane.images} />

                    <ProductInfo
                        product={crane}
                        specifications={crane.specifications}
                    />
                </div>
            </section>
            <Section2 title="Why Choose the <b>JASO J560?</b>" description="" />
            <ProcurementSection />
            <StickyCardsOneSideSection />
            <Section2Rental className="bg-white" />
            <DownloadsSection />
            <RelatedModels />
            <SiteSelectionSection />
            <ProjectsSection />
            <GallerySection />
            <TestimonialSection />
            <FooterCTASection />
        </main>
    );
};

export default ModalPage;
