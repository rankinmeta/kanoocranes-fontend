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
import { notFound } from "next/navigation";

let homePageDataPromise: ReturnType<typeof getHomePage> | null = null;

function getHomePageOnce() {
    if (!homePageDataPromise) {
        homePageDataPromise = getHomePage();
    }
    return homePageDataPromise;
}

async function loader() {
    const pageData = await getHomePageOnce();
    if (!pageData || !pageData.data) notFound();
    return {
        pageData: pageData.data,
    };
}

// export async function generateMetadata(): Promise<Metadata> {
//     const { data } = await getHomePageOnce();

//     return returnMetadata(data);
// }

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
            <OurSolutionsSection />
            <FeaturedProjectsSection />
            <GallerySection />
            <FeaturedModelsSection />
            <ExpertsSection />
            <OurIndustriesSection />
            <TestimonialSection />
            <AboutUsSection />
            <ResourcesSection />
            <FooterCTASection />
        </main>
    );
}
