"use server";

import { fetchAPI } from "@/lib/fetch-api";
import { getStrapiURL } from "@/lib/get-strapi-url";
import { contactUsSchema } from "@/lib/zod";
import z from "zod";

const BASE_URL = getStrapiURL();

export async function contactFormAction(data: z.infer<typeof contactUsSchema>) {
  const path = "/api/contact-forms";
  const url = new URL(path, BASE_URL);
  return fetchAPI(url.href, {
    method: "POST",
    authToken: process.env.STRAPI_FORM_TOKEN,
    body: { data },
  });
}
