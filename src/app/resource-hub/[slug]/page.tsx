import ResourceHubHero from "@/components/hero/resource-hub-hero";
import FooterCTASection from "@/components/pages/home/footer-cta-section";
import RelatedResources from "@/components/pages/resource-hub/related-resources";
import ResourceDetails from "@/components/pages/resource-hub/resource-details";

const ResourceHubDetailsPage = () => {
    return (
        <main>
            <ResourceHubHero />
            <ResourceDetails />
            <RelatedResources />
            <FooterCTASection />
        </main>
    );
};

export default ResourceHubDetailsPage;
