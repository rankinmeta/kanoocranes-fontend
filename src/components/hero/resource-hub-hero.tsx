import { Home } from "lucide-react";
import { StrapiImage } from "../common/strapi-image";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";
import type { MediaProps } from "@/type";

type ResourceHubHeroProps = {
    title: string;
    description: string;
    resource_type: {
        id: number;
        type: string;
        slug: string;
    };
    reading_time: string;
    resource_category: string;
    image: MediaProps;
};

const ResourceHubHero = ({
    description,
    resource_type,
    reading_time,
    resource_category,
    image,
    title
}: ResourceHubHeroProps) => {
    if (!description || !resource_type || !image || !title) return null;
    return (
        <section className="bg-secondary relative z-60 -mt-26">
            <div className="container container-padding-x pt-28 pb-10 md:pb-24 flex flex-col-reverse md:flex-row justify-between items-center">
                <div className="text-white max-w-2xl space-y-4">
                    <BreadcrumbSection className="hidden md:block" />

                    <h1 className="text-3xl md:text-5xl font-manrope mt-6 md:mt-0">
                        {title}
                    </h1>
                    <p className="text-sm max-w-xl">
                        {description}
                    </p>

                    <div className="mt-6 md:mt-12">
                        <ul className="flex flex-col md:flex-row items-center">
                            <li className="border-b md:border-b-0 md:border-r border-[#717680] md:mr-4 md:pr-4 py-4 md:py-0 w-full md:w-auto flex gap-1 md:flex-col justify-between items-center md:items-start">
                                <div className="flex items-center gap-1.5">
                                    <div className="size-2 bg-primary shrink-0" />
                                    <span>Resource Type</span>
                                </div>
                                <span className="text-sm text-[#A4A7AE]">
                                    {resource_type.type}
                                </span>
                            </li>
                            <li className="border-b md:border-b-0 md:border-r border-[#717680] md:mr-4 md:pr-4 py-4 md:py-0 w-full md:w-auto flex gap-1 md:flex-col justify-between items-center md:items-start">
                                <div className="flex items-center gap-1.5">
                                    <div className="size-2 bg-primary shrink-0" />
                                    <span>Reading Time</span>
                                </div>
                                <span className="text-sm text-[#A4A7AE]">
                                    {reading_time}
                                </span>
                            </li>
                            <li className="w-full md:w-auto flex gap-1 md:flex-col py-4 md:py-0 justify-between items-center md:items-start">
                                <div className="flex items-center gap-1.5">
                                    <div className="size-2 bg-primary shrink-0" />
                                    <span>Category</span>
                                </div>
                                <span className="text-sm text-[#A4A7AE]">
                                    {resource_category}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <StrapiImage
                    src={image.url}
                    alt={image.alternativeText || ""}
                    width={400}
                    height={350}
                    className="rounded-md"
                />

                <BreadcrumbSection className="md:hidden w-full mb-6" />
   
            </div>
        </section>
    );
};

export default ResourceHubHero;

function BreadcrumbSection({className}: {className?: string}) {
    return (
        <Breadcrumb className={cn("mb-12", className)}>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">
                                    <Home
                                        size={16}
                                        className="text-[#A4A7AE] hover:text-white"
                                    />
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink
                                    href="/resource-hub"
                                    className="text-[#A4A7AE] hover:text-white"
                                >
                                    Resource Hub
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage className="text-white">
                                    Breadcrumb
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
    )
}