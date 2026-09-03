import {
  getAllCategoryRentals,
  getAllCategorySales,
  getAllModels,
  getAllResources,
} from "@/data/loader";

export const dynamic = "force-dynamic"; // Required for ISR with tags
export const fetchCache = "force-cache"; // Enables caching with tags

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kanoocranes.com";

  const { categoryRentals, categorySales, models, resources } = await loader();

  const resourceUrls = resources
    .map(
      (resource: { slug: string }) => `
    <url>
      <loc>${baseUrl}/resource-hub/${resource.slug}</loc>
      <lastmod>${new Date()}</lastmod>
    </url>
  `,
    )
    .join("");

  const modelUrls = models
    .map(
      (model: { model_slug: string }) => `
    <url>
      <loc>${baseUrl}/models/${model.model_slug}</loc>
      <lastmod>${new Date()}</lastmod>
    </url>
  `,
    )
    .join("");

  const categorySalesUrls = categorySales
    .map(
      (categorySale: { slug: string }) => `
    <url>
      <loc>${baseUrl}/buy-cranes/${categorySale.slug}</loc>
      <lastmod>${new Date()}</lastmod>
    </url>
  `,
    )
    .join("");

  const categoryRentalUrls = categoryRentals
    .map(
      (categoryRental: { slug: string }) => `
    <url>
      <loc>${baseUrl}/rent-cranes/${categoryRental.slug}</loc>
      <lastmod>${new Date()}</lastmod>
    </url>
  `,
    )
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${baseUrl}</loc>
      <priority>1</priority>
    </url>
    <url>
      <loc>${baseUrl}/about-us</loc>
      <priority>0.5</priority>
    </url>
    <url>
      <loc>${baseUrl}/contact-us</loc>
      <priority>1</priority>
    </url>
    <url>
      <loc>${baseUrl}/eng-solutions</loc>
      <priority>0.9</priority>
    </url>
    <url>
      <loc>${baseUrl}/rental-hub</loc>
      <priority>0.9</priority>
    </url>
    <url>
      <loc>${baseUrl}/resource-hub</loc>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>${baseUrl}/sales-hub</loc>
      <priority>0.7</priority>
    </url>
    <url>
      <loc>${baseUrl}/models</loc>
      <priority>0.7</priority>
    </url>
    <url>
      <loc>${baseUrl}/gallery</loc>
      <priority>0.7</priority>
    </url>
    ${resourceUrls}
    ${modelUrls}
    ${categorySalesUrls}
    ${categoryRentalUrls}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "s-maxage=31536000, stale-while-revalidate", // Long cache
      "x-next-cache-tags": "sitemap", // Tag for on-demand revalidation
    },
  });
}

async function loader() {
  const [resources, models, categorySales, categoryRentals] = await Promise.all(
    [
      getAllResources(),
      getAllModels(),
      getAllCategorySales(),
      getAllCategoryRentals(),
    ],
  );

  return {
    resources: resources.data,
    models: models.data,
    categorySales: categorySales.data,
    categoryRentals: categoryRentals.data,
  };
}
