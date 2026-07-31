import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-dynamic'; 

const StaticModelMap = {
	"about-us-page": "/about-us",
	"home-page": "/",
	"contact-us-page": "/contact-us",
	"eng-solutions-page": "/eng-solutions",
	"rental-hub-page": "/rental-hub",
	"sales-hub": "/sales-hub",
	"resource-hub-page": "/resource-hub",
};

const DynamicModelMap = {
	model: "/models/",
	"category-rental": "/rent-cranes/[category]",
	"category-sale": "/buy-cranes/[category]",
};

export async function POST(request: NextRequest) {
	const secret = request.headers.get("Authorization")?.split(" ")[1];
	const body = await request.json();

	if (secret !== process.env.REVALIDATE_SECRET) {
		return new NextResponse("Invalid token", { status: 401 });
	}

	if (body.event === "trigger-test") {
		return new NextResponse("Triggered test", { status: 200 });
	}

	if (!body.model || !body.entry) {
		return new NextResponse("Invalid request", { status: 400 });
	}

	if (Object.keys(StaticModelMap).includes(body.model)) {
		// Revalidate the specific blog path
		const path = StaticModelMap[body.model as keyof typeof StaticModelMap];
		revalidatePath(path);
		console.log("Revalidated " + path);
	} else if (Object.keys(DynamicModelMap).includes(body.model)) {
		// Revalidate the specific path
		const path =
			DynamicModelMap[body.model as keyof typeof DynamicModelMap] +
			body.entry.slug;

		if (body.entry.slug) {
			revalidatePath(path);
		}

		revalidateTag("sitemap", "max"); // Revalidate sitemap after every resource/model/category update or creation
		console.log("Revalidated " + path);
	} else if (
		body.model === "global" ||
		body.model === "manufacturer" ||
		body.model === "crane-type" ||
		body.model === "project-type" ||
		body.model === "resource-type"
	) {
		revalidateTag(body.model, "max");
		console.log(`Revalidated pages using ${body.model} tag`);
	} else {
		console.log("Not Revalidated any path");
	}

	return new NextResponse("Revalidated successfully");
}
