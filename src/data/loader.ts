import { fetchAPI } from "@/lib/fetch-api";
import { getStrapiURL } from "@/lib/get-strapi-url";
import {
	aboutUsPageQuery,
	categoryRentalPageQuery,
	categorySalesPageQuery,
	contactUsPageQuery,
	engSolutionsPageQuery,
	getAll,
	getAllModelsQuery,
	globalSettingQuery,
	homePageQuery,
	modelPageQuery,
	rentalHubPageQuery,
	resourceHubDetailsPageQuery,
	resourceHubPageQuery,
	resourcesQuery,
	resourceTypesQuery,
	salesHubPageQuery,
} from "./queries";
import { contactUsSchema } from "@/lib/zod";
import z from "zod";

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
	});
}

export async function getAboutUsPage() {
	const path = "/api/about-us-page";
	const url = new URL(path, BASE_URL);
	url.search = aboutUsPageQuery;
	return fetchAPI(url.href, {
		method: "GET",
		authToken: process.env.STRAPI_API_TOKEN,
	});
}

export async function getContactUsPage() {
	const path = "/api/contact-us-page";
	const url = new URL(path, BASE_URL);
	url.search = contactUsPageQuery;
	return fetchAPI(url.href, {
		method: "GET",
		authToken: process.env.STRAPI_API_TOKEN,
	});
}

export async function getEngSolutionsPage() {
	const path = "/api/eng-solutions-page";
	const url = new URL(path, BASE_URL);
	url.search = engSolutionsPageQuery;
	return fetchAPI(url.href, {
		method: "GET",
		authToken: process.env.STRAPI_API_TOKEN,
	});
}

export async function getResourceHubPage() {
	const path = "/api/resource-hub-page";
	const url = new URL(path, BASE_URL);
	url.search = resourceHubPageQuery;
	return fetchAPI(url.href, {
		method: "GET",
		authToken: process.env.STRAPI_API_TOKEN,
	});
}

export async function getAllResources() {
	const path = "/api/resources";
	const url = new URL(path, BASE_URL);
	url.search = resourcesQuery;
	return fetchAPI(url.href, {
		method: "GET",
		authToken: process.env.STRAPI_API_TOKEN,
	});
}

export async function getResourceTypes() {
	const path = "/api/resource-types";
	const url = new URL(path, BASE_URL);
	url.search = resourceTypesQuery;
	return fetchAPI(url.href, {
		method: "GET",
		authToken: process.env.STRAPI_API_TOKEN,
		next: {
			tags: ["resource-type"], // 👈 KEY POINT
		},
	});
}

export async function getResourceHubDetailsPage(slug: string) {
	const path = `/api/resources/${slug}`;
	const url = new URL(path, BASE_URL);
	url.search = resourceHubDetailsPageQuery;
	return fetchAPI(url.href, {
		method: "GET",
		authToken: process.env.STRAPI_API_TOKEN,
	});
}

export async function getSalesHubPage() {
	const path = "/api/sales-hub";
	const url = new URL(path, BASE_URL);
	url.search = salesHubPageQuery;
	return fetchAPI(url.href, {
		method: "GET",
		authToken: process.env.STRAPI_API_TOKEN,
	});
}

export async function getRentalHubPage() {
	const path = "/api/rental-hub-page";
	const url = new URL(path, BASE_URL);
	url.search = rentalHubPageQuery;
	return fetchAPI(url.href, {
		method: "GET",
		authToken: process.env.STRAPI_API_TOKEN,
	});
}

export async function getModelPage(model: string) {
	const path = `/api/models/${model}`;
	const url = new URL(path, BASE_URL);
	url.search = modelPageQuery;
	return fetchAPI(url.href, {
		method: "GET",
		authToken: process.env.STRAPI_API_TOKEN,
	});
}

export async function getAllBuyCranes() {
	const path = `/api/category-sales`;
	const url = new URL(path, BASE_URL);
	url.search = getAll;
	return fetchAPI(url.href, {
		method: "GET",
		authToken: process.env.STRAPI_API_TOKEN,
	});
}

export async function getCSPage(category: string) {
	const path = `/api/category-sales/${category}`;
	const url = new URL(path, BASE_URL);
	url.search = categorySalesPageQuery;
	return fetchAPI(url.href, {
		method: "GET",
		authToken: process.env.STRAPI_API_TOKEN,
	});
}

export async function getAllRentCranes() {
	const path = `/api/category-rentals`;
	const url = new URL(path, BASE_URL);
	url.search = getAll;
	return fetchAPI(url.href, {
		method: "GET",
		authToken: process.env.STRAPI_API_TOKEN,
	});
}

export async function getRSPage(category: string) {
	const path = `/api/category-rentals/${category}`;
	const url = new URL(path, BASE_URL);
	url.search = categoryRentalPageQuery;
	return fetchAPI(url.href, {
		method: "GET",
		authToken: process.env.STRAPI_API_TOKEN,
	});
}

export async function getCraneTypes() {
	const path = "/api/crane-types";
	const url = new URL(path, BASE_URL);
	url.search = getAll;
	return fetchAPI(url.href, {
		method: "GET",
		authToken: process.env.STRAPI_API_TOKEN,
		next: {
			tags: ["crane-type"], // 👈 KEY POINT
		},
	});
}

export async function getProjectTypes() {
	const path = "/api/project-types";
	const url = new URL(path, BASE_URL);
	url.search = getAll;

	return fetchAPI(url.href, {
		method: "GET",
		authToken: process.env.STRAPI_API_TOKEN,
		next: {
			tags: ["project-type"], // 👈 KEY POINT
		},
	});
}

export async function getManufacturers() {
	const path = "/api/manufacturers";
	const url = new URL(path, BASE_URL);
	url.search = getAll;

	return fetchAPI(url.href, {
		method: "GET",
		authToken: process.env.STRAPI_API_TOKEN,
		next: {
			tags: ["manufacturer"], // 👈 KEY POINT
		},
	});
}

export async function getAllModels() {
	const path = "/api/models";
	const url = new URL(path, BASE_URL);
	url.search = getAllModelsQuery;

	return fetchAPI(url.href, {
		method: "GET",
		authToken: process.env.STRAPI_API_TOKEN,
	});
}

export async function getAllCategorySales() {
	const path = "/api/category-sales";
	const url = new URL(path, BASE_URL);
	url.search = getAll;
	return fetchAPI(url.href, {
		method: "GET",
		authToken: process.env.STRAPI_API_TOKEN,
	});
}

export async function getAllCategoryRentals() {
	const path = "/api/category-rentals";
	const url = new URL(path, BASE_URL);
	url.search = getAll;
	return fetchAPI(url.href, {
		method: "GET",
		authToken: process.env.STRAPI_API_TOKEN,
	});
}

export async function submitContactUsForm(
	data: z.infer<typeof contactUsSchema>,
) {
	const path = "/api/contact-forms";
	const url = new URL(path, BASE_URL);
	return fetchAPI(url.href, {
		method: "POST",
		authToken: process.env.NEXT_PUBLIC_STRAPI_FORM_TOKEN,
		body: { data },
	});
}
