import {
  GroupedManufacturer,
  ModelListingTypeProps,
  SeoMetadata,
} from "@/type";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getImage({ local, prod }: { local?: string; prod?: string }) {
  const imgUrl =
    process.env.NODE_ENV === "development"
      ? local
      : process.env.NEXT_PUBLIC_STRAPI_API_URL! + prod;

  return imgUrl || (process.env.NEXT_PUBLIC_DEFAULT_IMAGE as string);
}

export function extractHighlightText(text: string) {
  const regex = /<b>(.*?)<\/b>/gi;
  const matches = text.match(regex);
  return matches?.map((match) => match.replace(/<b>|<\/b>/gi, "")) || [];
}

export function returnMetadata(data: { seo: SeoMetadata }) {
  return {
    title: data.seo?.metaTitle || "Kanoo Cranes",
    description: data.seo?.metaDescription || "",
    keywords: data.seo?.metaKeywords || "",
    alternates: {
      canonical: data.seo?.canonicalUrl || "",
    },
    openGraph: {
      title: data.seo?.openGraph?.ogTitle || "Kanoo Cranes",
      description: data.seo?.openGraph?.ogDescription || "",
      url: data.seo?.openGraph?.ogUrl || "",
      type: data.seo?.openGraph?.ogType || "website",
      images: {
        url: data.seo?.openGraph?.ogImage?.url || "",
        alt: data.seo?.openGraph?.ogImage?.alternativeText || "",
      },
    },
    other: {
      "color-scheme": "light",
    },
    // robots: data.seo?.metaRobots || "",
    robots: {
      index: false,
      follow: false, // Set to false if you also want "nofollow"
    },
  };
}

export function chunk(arr: any[], size = 7) {
  const result = [];

  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
}

export function regroupModels(data: ModelListingTypeProps[]) {
  const grouped: GroupedManufacturer[] = Object.values(
    data.reduce<Record<string, GroupedManufacturer>>((acc, item) => {
      const { slug, name } = item.manufacturer;

      if (!acc[slug]) {
        acc[slug] = {
          manufacturer: name,
          manufacturerSlug: slug,
          items: [],
        };
      }

      acc[slug].items.push(item);

      return acc;
    }, {}),
  );

  return grouped;
}
