import { StrapiImage } from "@/components/common/strapi-image";
import { Button } from "@/components/ui/button";
import { getAllModels } from "@/data/loader";
import { MediaProps } from "@/type";
import Link from "next/link";
import { notFound } from "next/navigation";

async function loader() {
    const pageData = await getAllModels();
    if (!pageData || !pageData.data) notFound();
    return {
        pageData: pageData.data,
    };
}

const ModelPage = async () => {
    const { pageData } = await loader();

  return (
    <section className="container container-padding-x pb-10 md:pb-20 grid grid-cols-4 gap-3">
        {pageData.map((model: Props) => (
            <Link href={`/models/${model.model_slug}`} key={model.id} >
                <Card {...model} />
            </Link>
        ))}
    </section>
  )
}

export default ModelPage;

type Props = {
    id: number;
	main_section: {
		crane_capacity: number;
		images: MediaProps[];
		max_lifting_height: number;
		listingType: "sale" | "rent" | "both";
		max_working_radius: number;
		model_short_name: string;
	};
	model_name: string;
	model_slug: string;
};

function Card({
	main_section,
	model_name,
	model_slug,
}: Props) {
	if (!main_section || !model_name || !model_slug) return null;

	return (
		<div className="w-[80%] md:w-auto shrink-0 mt-10 pb-1">
			<div className="bg-[#F5F5F5] rounded-md flex items-center justify-center p-5 overflow-hidden">
				{main_section.images[0] && (
					<StrapiImage
						src={main_section.images[0].url}
						alt={
							main_section.images[0].alternativeText || model_name
						}
						width={200}
						height={200}
						className="hover:scale-110 transition-transform duration-300"
					/>
				)}
			</div>

			<h3 className="text-lg font-medium mt-5 mb-2">
				{main_section.model_short_name}
			</h3>
			<div>
				<div className="flex items-center gap-2 py-3">
					<div className="size-2 bg-primary rounded-xs shrink-0" />
					<span className="text-sm font-semibold">
						Crane capacity
					</span>
					<span className="text-sm text-gray-600">
						{main_section.crane_capacity} Ton
					</span>
				</div>
				<hr />
				<div className="flex items-center gap-2 py-3">
					<div className="size-2 bg-primary rounded-xs shrink-0" />
					<span className="text-sm font-semibold">
						Max. working radius
					</span>
					<span className="text-sm text-gray-600">
						{main_section.max_working_radius}m
					</span>
				</div>
				<hr />
				<div className="flex items-center gap-2 py-3">
					<div className="size-2 bg-primary rounded-xs shrink-0" />
					<span className="text-sm font-semibold">
						Max. lifting height
					</span>
					<span className="text-sm text-gray-600">
						{main_section.max_lifting_height}m
					</span>
				</div>

				<div className="space-x-3 mt-2">
					{(main_section.listingType === "sale" ||
						main_section.listingType === "both") && (
						<Button>Buy crane</Button>
					)}
					{(main_section.listingType === "rent" ||
						main_section.listingType === "both") && (
						<Button className="bg-white text-secondary border-secondary hover:bg-secondary hover:text-white">
							Rent crane
						</Button>
					)}
				</div>
			</div>
		</div>
	);
}