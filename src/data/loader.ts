import { fetchAPI } from "@/lib/fetch-api";
import { getStrapiURL } from "@/lib/get-strapi-url";
import { aboutUsPageQuery, contactUsPageQuery, engSolutionsPageQuery, globalSettingQuery, homePageQuery } from "./queries";

const BASE_URL = getStrapiURL();

export async function getGlobalSettings() {
    const path = "/api/global";
    const url = new URL(path, BASE_URL);
    url.search = globalSettingQuery;
    return fetchAPI(url.href, {
        method: "GET",
        next: { tags: ["global"] },
        authToken: process.env.STRAPI_API_TOKEN,
    });
}

export async function getHomePage() {
    const path = "/api/home-page";
    const url = new URL(path, BASE_URL);
    url.search = homePageQuery;
    return fetchAPI(url.href, {
        method: "GET",
        authToken: process.env.STRAPI_API_TOKEN,
        next: {
            tags: ["home-page"], // 👈 KEY POINT
        },
    });
}

export async function getAboutUsPage() {
    const path = "/api/about-us-page";
    const url = new URL(path, BASE_URL);
    url.search = aboutUsPageQuery;
    return fetchAPI(url.href, {
        method: "GET",
        authToken: process.env.STRAPI_API_TOKEN,
        next: {
            tags: ["about-us-page"], // 👈 KEY POINT
        },
    });
}

export async function getContactUsPage() {
    const path = "/api/contact-us-page";
    const url = new URL(path, BASE_URL);
    url.search = contactUsPageQuery;
    return fetchAPI(url.href, {
        method: "GET",
        authToken: process.env.STRAPI_API_TOKEN,
        next: {
            tags: ["contact-us-page"], // 👈 KEY POINT
        },
    });
}

export async function getEngSolutionsPage() {
    const path = "/api/eng-solutions-page";
    const url = new URL(path, BASE_URL);
    url.search = engSolutionsPageQuery;
    return fetchAPI(url.href, {
        method: "GET",
        authToken: process.env.STRAPI_API_TOKEN,
        next: {
            tags: ["eng-solutions-page"], // 👈 KEY POINT
        },
    });
}