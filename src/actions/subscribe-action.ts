"use server";

import { fetchAPI } from "@/lib/fetch-api";
import { getStrapiURL } from "@/lib/get-strapi-url";
import { subscribeSchema } from "@/lib/zod";
import z from "zod";

const BASE_URL = getStrapiURL();

export async function subscribeAction(data: z.infer<typeof subscribeSchema>) {
  const path = "/api/email-subscribes";
  const url = new URL(path, BASE_URL);
  return fetchAPI(url.href, {
    method: "POST",
    authToken: process.env.STRAPI_FORM_TOKEN,
    body: { data },
  });
}
