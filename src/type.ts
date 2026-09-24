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
};

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
};

export type SimpleSectionProps = {
  id: number;
  tag_title: TagTitleProps;
  description: string;
  image: MediaProps;
};

export type SectionWithGridProps = {
  id: number;
  tag_title: TagTitleProps;
  description: string;
  cards: {
    id: number;
    icon: MediaProps;
    label: string;
    description: string;
  }[];
};

export type BuyingGuideSectionProps = {
  id: number;
  tag_title: TagTitleProps;
  details: {
    id: number;
    label: string;
    description: string;
    icon: MediaProps;
  }[];
};

export type EngineeringSupportSectionProps = {
  id: number;
  tag_title: TagTitleProps;
  description: string;
  details: {
    id: number;
    label: string;
  }[];
  image: MediaProps;
};

export type SectionWithStickyCardsProps = {
  id: number;
  tag_title: TagTitleProps;
  description: string;
  cards: {
    id: number;
    icon: MediaProps;
    label: string;
    description: string;
  }[];
};

export type ResourceCardProps = {
  id: number;
  documentId: string;
  image: MediaProps;
  title: string;
  slug: string;
  date: string;
  resource_type: {
    id: number;
    type: string;
    slug: string;
  };
};

export type OwnershipBenefitsWithPointsSectionProps = {
  id: number;
  tag_title: TagTitleProps;
  description: string;
  points: {
    id: number;
    label: string;
  }[];
  image: MediaProps | null;
};

export type SiteSelectionSectionProps = {
  id: number;
  tag_title: TagTitleProps;
  description: string;
  site_selection_details: {
    id: number;
    title: string;
    description: string;
    image: MediaProps;
  }[];
};

export type CraneTypeProps = {
  id: number;
  type: string;
  slug: string;
};

export type ProjectTypeProps = {
  id: number;
  type: string;
  slug: string;
};

export type ManufacturerProps = {
  id: number;
  name: string;
  slug: string;
};

export type TableSectionProps = {
  id: number;
  documentId: string;
  model: string;
  reach: string;
  maximum_load: string;
  tip_load: string;
  fem_1001: MediaProps;
  en_14439_c25: MediaProps;
};

export type CraneSeriesSectionProps = {
  crane_series: {
    id: number;
    title: string;
    description: string;
    img_placement: "left" | "right";
    image: MediaProps;
  };
  table: TableSectionProps[];
};

export type CraneModelsSectionProps = {
  tag_title: TagTitleProps;
  models: {
    id: number;
    model_slug: string;
    crane_type: {
      type: string;
      slug: string;
    };
    main_section: {
      model_short_name: string;
      best_for: string;
      images: MediaProps[];
    };
  }[];
};

export type ModelListingTypeProps = {
  id: number;
  manufacturer: ManufacturerProps;
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

export type GroupedManufacturer = {
  manufacturer: string;
  manufacturerSlug: string;
  items: ModelListingTypeProps[];
};
