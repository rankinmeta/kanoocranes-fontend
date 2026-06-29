import BrandsSection from "@/components/pages/about-us/brands-section";
import BusinessUnitSection from "@/components/pages/about-us/business-unit-section";
import CertificationsSection from "@/components/pages/about-us/certifications-section";
import EngineeringApproach from "@/components/pages/about-us/engineering-approach";
import ExpertiseAndCapabilitySection from "@/components/pages/about-us/expertise-and-capability-section";
import Section3 from "@/components/pages/about-us/section3";
import TeamSection from "@/components/pages/about-us/team-section";
import HeroSection from "@/components/pages/contact-us/hero-section";
import AboutUsSection from "@/components/pages/home/about-us-section";
import FeaturedProjectsSection from "@/components/pages/home/featured-projects-section";
import FooterCTASection from "@/components/pages/home/footer-cta-section";
import { getAboutUsPage } from "@/data/loader";
import { notFound } from "next/navigation";

let aboutUsPageDataPromise: ReturnType<typeof getAboutUsPage> | null = null;

function getAboutUsPageOnce() {
    if (!aboutUsPageDataPromise) {
        aboutUsPageDataPromise = getAboutUsPage();
    }
    return aboutUsPageDataPromise;
}

async function loader() {
    const pageData = await getAboutUsPageOnce();
    if (!pageData || !pageData.data) notFound();
    return {
        pageData: pageData.data,
    };
}

const AboutUsPage = async () => {
    const { pageData } = await loader();
    return (
        <main>
            <HeroSection
                title={pageData.hero.title}
                description={pageData.hero.description}
            />
            <AboutUsSection {...pageData.who_we_are} />
            <Section3 {...pageData.about_kanoo_group} />
            <BusinessUnitSection {...pageData.business_units_section} />
            <BrandsSection {...pageData.brands_section} />
            <EngineeringApproach {...pageData.engineering_approach} />
            <FeaturedProjectsSection {...pageData.featured_projects_section} />
            <ExpertiseAndCapabilitySection {...pageData.expertise_section} />
            <CertificationsSection {...pageData.certification_section} />
            <TeamSection {...pageData.team_section} />
            <FooterCTASection {...pageData.footer_cta_section} />
        </main>
    );
};

export default AboutUsPage;
