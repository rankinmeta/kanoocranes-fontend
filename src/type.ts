export interface MediaProps {
    id: number;
    documentId: string;
    url: string;
    alternativeText: string | null;
}

export interface LinkProps {
    id: number;
    label: string;
    href: string;
    isExternal: boolean;
}

export interface TagTitleProps {
    id: number;
    tag: string;
    title: string;
}

export type SeoMetadata = {
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string;
    metaRobots: string;
    canonicalUrl: string;
    openGraph: {
        ogTitle: string;
        ogDescription: string;
        ogUrl: string;
        ogType: string;
        ogImage: {
            url: string;
            alternativeText: string;
        };
    };
};

export interface HomeHeroProps {
    id: number;
    title: string;
    description: string;
    background: {
        id: number;
        type: "image" | "video";
        background: MediaProps;
        responsive_image: MediaProps | null;
    }[];
    highlights: HighlightCardProps[];
}

export type HighlightCardProps = {
    id: number;
    image: MediaProps;
    title: string;
    link: LinkProps;
};

export type LogoMarqueeProps = {
    id: number;
    logo: MediaProps[];
};

export type EngineeringSolutionsSectionProps = {
    id: number;
    tag_title: TagTitleProps;
    details: {
        id: number;
        value: string;
        label: string;
        description: string;
    }[];
    background: MediaProps;
    engineering_solution_info: {
        button: LinkProps;
        infos: {
            id: number;
            label: string;
        }[];
    };
};

export type AboutUsSectionProps = {
    id: number;
    tag_title: TagTitleProps;
    images: MediaProps[];
    description: string;
    button: LinkProps | null;
};

export type AboutKanooGroupProps = {
    id: number;
    tag_title: TagTitleProps;
    image: MediaProps;
    description: string;
};

export type BusinessUnitSectionProps = {
    id: number;
    tag_title: TagTitleProps;
    details: {
        id: number;
        title: string;
        description: string;
        image: MediaProps;
    }[];
}

export type BrandSectionProps = {
    id: number;
    tag_title: TagTitleProps;
    description: string;
    brands: {
        id: number;
        title: string;
        description: string;
        logo: MediaProps;
    }[];
}