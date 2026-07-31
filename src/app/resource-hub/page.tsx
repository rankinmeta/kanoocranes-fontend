import HeroSection from "@/components/pages/contact-us/hero-section";
import FooterCTASection from "@/components/pages/home/footer-cta-section";
import ResourcesSection from "@/components/pages/resource-hub/resources-section";
import { getAllResources, getResourceHubPage, getResourceTypes } from "@/data/loader";
import { returnMetadata } from "@/lib/utils";
import { type Metadata } from "next";
import { notFound } from "next/navigation";

async function loader() {
  const [pageData, resources, resourceTypes] = await Promise.all([
    getResourceHubPage(),
    getAllResources(),
    getResourceTypes()
  ]);
  if (!pageData || !pageData.data) notFound();
  return {
    pageData: pageData.data,
    resources: resources?.data || [],
    resourceTypes: resourceTypes?.data || []
  };
}

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await getResourceHubPage();

  return returnMetadata(data);
}

const ResourceHubPage = async () => {
  const { pageData, resources, resourceTypes } = await loader();

  return (
    <main>
      <HeroSection {...pageData.hero} />
      <ResourcesSection
        banner_description={pageData.banner_description}
        banner_title={pageData.banner_title}
        resources_list_title={pageData.resources_list_title}
        resources={resources}
        resourceTypes={resourceTypes}
      />
      <FooterCTASection {...pageData.footer_cta_section} />
    </main>
  );
};

export default ResourceHubPage;
