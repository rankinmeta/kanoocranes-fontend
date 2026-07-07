import HighlightedTitle from "@/components/common/highlight-title";
import { StrapiImage } from "@/components/common/strapi-image";
import Tag from "@/components/common/tag";
import { extractHighlightText } from "@/lib/utils";
import { MediaProps, TagTitleProps } from "@/type";

type Props = {
	tag_title: TagTitleProps;
	image: MediaProps;
	details: {
		id: number;
		label: string;
		description: string;
	}[];
};

const ProfessionalRentalSection = ({ details, image, tag_title }: Props) => {
	if (!tag_title || !image || !details) return null;

	return (
		<section className="container container-padding-x py-10 md:py-20 grid md:grid-cols-5 gap-5 items-center">
			<StrapiImage
				src={image.url}
				alt={image.alternativeText || ""}
				width={400}
				height={400}
				className="hidden md:block aspect-square col-span-2 rounded-md object-cover"
			/>

			<div className="space-y-2.5 md:col-span-3">
				<Tag>{tag_title.tag}</Tag>
				<HighlightedTitle
					title={tag_title.title}
					highlights={extractHighlightText(tag_title.title)}
					className="max-w-md"
				/>

				<StrapiImage
					src={image.url}
					alt={image.alternativeText || ""}
					width={400}
					height={400}
					className="md:hidden my-5 aspect-square rounded-md object-cover"
				/>

				<div className="mt-6">
					{details.map((detail) => (
						<div
							className="grid md:grid-cols-5 gap-3 md:gap-5 border-b last:border-none py-3"
							key={detail.id}
						>
							<span className="md:col-span-2 text-primary text-lg">
								{detail.label}
							</span>
							<p className="md:col-span-3 text-[#414651]">
								{detail.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProfessionalRentalSection;
