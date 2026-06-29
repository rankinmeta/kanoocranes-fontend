import { SeoMetadata } from "@/type";
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
        title: data.seo?.metaTitle || "Kozhikode Star Restaurant",
        description: data.seo?.metaDescription || "",
        keywords: data.seo?.metaKeywords || "",
        robots: data.seo?.metaRobots || "",
        alternates: {
            canonical: data.seo?.canonicalUrl || "",
        },
        openGraph: {
            title: data.seo?.openGraph?.ogTitle || "Kozhikode Star Restaurant",
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
    };
}
