import HeroSection from "@/components/pages/contact-us/hero-section";
import FooterCTASection from "@/components/pages/home/footer-cta-section";
import ResourcesSection from "@/components/pages/resource-hub/resources-section";

const ResourceHubPage = () => {
    return (
        <main>
            <HeroSection
                description="Access expert guides, technical documents, case studies, and downloadable resources to support safe, efficient, and informed lifting operations."
                title="Crane guides & technical resources"
            />
            <ResourcesSection />
            <FooterCTASection />
        </main>
    );
};

export default ResourceHubPage;
