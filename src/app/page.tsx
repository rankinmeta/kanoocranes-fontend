import HomeHero from "@/components/hero/home-hero";
import AboutUsSection from "@/components/pages/home/about-us-section";
import EngineeringSolutionsSection from "@/components/pages/home/engineering-solutions-section";
import ExpertsSection from "@/components/pages/home/experts-section";
import FeaturedModelsSection from "@/components/pages/home/featured-models-section";
import FeaturedProjectsSection from "@/components/pages/home/featured-projects-section";
import FooterCTASection from "@/components/pages/home/footer-cta-section";
import GallerySection from "@/components/pages/home/gallery-section";
import { LogoMarquee } from "@/components/pages/home/logo-marquee";
import OurIndustriesSection from "@/components/pages/home/our-industries-section";
import OurSolutionsSection from "@/components/pages/home/our-solutions-section";
import ResourcesSection from "@/components/pages/home/resources-section";
import TestimonialSection from "@/components/pages/home/testimonial-section";
import { getHomePage } from "@/data/loader";
import { returnMetadata } from "@/lib/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

async function loader() {
    const pageData = await getHomePage();
    if (!pageData || !pageData.data) notFound();
    return {
        pageData: pageData.data,
    };
}

export async function generateMetadata(): Promise<Metadata> {
    const { data } = await getHomePage();

    return returnMetadata(data);
}

export default async function Home() {
    const { pageData } = await loader();

    return (
        <main>
            <HomeHero hero={pageData.hero} />
            <LogoMarquee partners_section={pageData.partners_section} />
            <EngineeringSolutionsSection
                {...pageData.engineering_solution_section}
            />
            {/* <CraneSelectorSection /> */}
            <OurSolutionsSection {...pageData.our_solutions_section} />
            <FeaturedProjectsSection {...pageData.featured_projects_section} />
            <GallerySection {...pageData.gallery_section} />
            <FeaturedModelsSection {...pageData.featured_models_section} />
            <ExpertsSection {...pageData.experts_section} />
            <OurIndustriesSection {...pageData.industries_section} />
            <TestimonialSection  {...pageData.testimonial_section} />
            <AboutUsSection {...pageData.about_section} />
            <ResourcesSection {...pageData.related_resources} />
            <FooterCTASection {...pageData.footer_cta_section} />
        </main>
    );
}
