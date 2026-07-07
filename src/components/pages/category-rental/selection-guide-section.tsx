import HighlightedTitle from "@/components/common/highlight-title";
import { StrapiImage } from "@/components/common/strapi-image";
import Tag from "@/components/common/tag";
import { extractHighlightText } from "@/lib/utils";
import type { MediaProps, TagTitleProps } from "@/type";

type Props = {
	tag_title: TagTitleProps;
	image: MediaProps;
	description: string;
	details: {
		id: number;
		label: string;
		description: string;
	}[];
};

const SelectionGuideSection = ({
	details,
	image,
	tag_title,
	description,
}: Props) => {
	if (!tag_title || !image || !details) return null;

	return (
		<section className="container container-padding-x py-10 md:py-20 grid md:grid-cols-5 gap-5">
			<StrapiImage
				src={image.url}
				alt={image.alternativeText || ""}
				width={400}
				height={400}
				className="hidden md:block aspect-square min-h-full col-span-2 rounded-md object-cover"
			/>

			<div className="space-y-2.5 md:col-span-3 w-full md:w-auto overflow-x-hidden">
				<Tag>{tag_title.tag}</Tag>
				<HighlightedTitle
					title={tag_title.title}
					highlights={extractHighlightText(tag_title.title)}
					className="max-w-md"
				/>
				<p>{description}</p>

				<StrapiImage
					src={image.url}
					alt={image.alternativeText || ""}
					width={400}
					height={400}
					className="md:hidden my-5 aspect-square rounded-md object-cover"
				/>

				<div className="flex w-full gap-3 overflow-x-scroll scrollbar-none mt-10">
					{details.map((detail, i) => (
						<Card key={detail.id} {...detail} index={i} />
					))}
				</div>
			</div>
		</section>
	);
};

export default SelectionGuideSection;

function Card({
	description,
	index,
	label,
}: {
	id: number;
	label: string;
	description: string;
	index: number;
}) {
	return (
		<div className="bg-[#f5f5f5] w-60 aspect-[1/0.9] min-h-fit p-5 flex flex-col rounded-md shrink-0">
			<span className="text-secondary text-3xl font-manrope font-medium">
				0{index + 1}
			</span>
			<h5 className="mt-auto font-manrope font-medium text-lg leading-tight">
				{label}
			</h5>
			<p className="text-[#414651] leading-tight mt-2 text-sm">
				{description}
			</p>
		</div>
	);
}
