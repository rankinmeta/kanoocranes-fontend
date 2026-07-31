import ResourceHubHero from "@/components/hero/resource-hub-hero";
import FooterCTASection from "@/components/pages/home/footer-cta-section";
import RelatedResources from "@/components/pages/resource-hub/related-resources";
import ResourceDetails from "@/components/pages/resource-hub/resource-details";
import { getResourceHubDetailsPage } from "@/data/loader";
import { returnMetadata } from "@/lib/utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return [];
}

async function loader(slug: string) {
  const pageData = await getResourceHubDetailsPage(slug);
  if (!pageData || !pageData.data) notFound();
  return {
    pageData: pageData.data,
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { data } = await getResourceHubDetailsPage(slug);

  return returnMetadata(data);
}

const ResourceHubDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  if (!slug) return notFound();

  const { pageData } = await loader(slug as string);

  return (
    <main>
      <ResourceHubHero
        description={pageData?.description}
        resource_type={pageData?.resource_type}
        reading_time={pageData?.reading_time}
        resource_category={pageData?.resource_category}
        image={pageData?.image}
        title={pageData?.title}
      />
      <ResourceDetails
        banner_button={pageData?.banner_button}
        banner_description={pageData?.banner_description}
        banner_title={pageData?.banner_title}
        card_banner_button={pageData?.card_banner_button}
        card_banner_description={pageData?.card_banner_description}
        card_banner_title={pageData?.card_banner_title}
        resource_content={pageData?.resource_content}
      />
      <RelatedResources resources={pageData?.related_resources} />
      <FooterCTASection {...pageData.footer_cta_section} />
    </main>
  );
};

export default ResourceHubDetailsPage;
