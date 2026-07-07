import qs from "qs";

export const globalSettingQuery = qs.stringify({
	populate: {
		header: {
			populate: {
				logo: {
					fields: ["url", "alternativeText"],
				},
				logo_color: {
					fields: ["url", "alternativeText"],
				},
			},
		},
		footer: {
			populate: {
				socials: {
					populate: {
						icon: {
							fields: ["url", "alternativeText"],
						},
					},
				},
				quick_links: {
					populate: {
						link: true,
					},
				},
				our_services: {
					populate: {
						link: true,
					},
				},
				industries: {
					populate: {
						link: true,
					},
				},
				contact_us: {
					populate: {
						phone: true,
						email: true,
						address: true,
					},
				},
			},
		},
	},
});

export const homePageQuery = qs.stringify({
	populate: {
		hero: {
			populate: {
				background: {
					populate: {
						background: {
							fields: ["url", "alternativeText"],
						},
						responsive_image: {
							fields: ["url", "alternativeText"],
						},
					},
				},
				highlights: {
					populate: {
						image: {
							fields: ["id", "url", "alternativeText"],
						},
						link: true,
					},
				},
			},
		},
		partners_section: {
			populate: {
				logo: {
					fields: ["url", "alternativeText"],
				},
			},
		},
		engineering_solution_section: {
			populate: {
				tag_title: true,
				engineering_solution_info: {
					populate: {
						button: true,
						infos: true,
					},
				},
				details: true,
				background: {
					fields: ["url", "alternativeText"],
				},
			},
		},
		our_solutions_section: {
			populate: {
				tag_title: true,
				our_solutions_card: {
					populate: {
						image: {
							fields: ["url", "alternativeText"],
						},
						link: true,
					},
				},
			},
		},
		featured_projects_section: {
			populate: {
				tag_title: true,
				projects: {
					populate: {
						image: {
							fields: ["url", "alternativeText"],
						},
						link: true,
						details: true,
					},
				},
			},
		},
		gallery_section: {
			populate: {
				tag_title: true,
				images: {
					fields: ["url", "alternativeText"],
				},
			},
		},
		featured_models_section: {
			populate: {
				tag_title: true,
				models: {
					populate: {
						main_section: {
							fields: [
								"model_short_name",
								"crane_capacity",
								"max_working_radius",
								"max_lifting_height",
								"listingType",
							],
							populate: {
								images: {
									fields: ["url", "alternativeText"],
								},
							},
						},
					},
				},
			},
		},
		experts_section: {
			populate: {
				tag_title: true,
				experts: {
					populate: {
						image: {
							fields: ["url", "alternativeText"],
						},
					},
				},
			},
		},
		industries_section: {
			populate: {
				tag_title: true,
				industries: {
					populate: {
						icon: {
							fields: ["url", "alternativeText"],
						},
					},
				},
			},
		},
		testimonial_section: {
			populate: {
				tag_title: true,
				testimonials: {
					populate: {
						image: {
							fields: ["url", "alternativeText"],
						},
					},
				},
			},
		},
		about_section: {
			populate: {
				tag_title: true,
				button: true,
				images: {
					fields: ["url", "alternativeText"],
				},
			},
		},
		related_resources: {
			populate: {
				tag_title: true,
				resources: {
					fields: ["title", "slug", "date"],
					populate: {
						image: { fields: ["url", "alternativeText"] },
						resource_type: { fields: ["type", "slug"] },
					},
				},
			},
		},
		footer_cta_section: {
			populate: {
				image: {
					fields: ["url", "alternativeText"],
				},
			},
		},
		seo: {
            populate: {
                metaImage: {
                    fields: ["url", "alternativeText"],
                },
                openGraph: {
                    populate: {
                        ogImage: {
                            fields: ["url", "alternativeText"],
                        },
                    },
                },
            },
        },
	},
});

export const aboutUsPageQuery = qs.stringify({
	populate: {
		hero: true,
		who_we_are: {
			populate: {
				tag_title: true,
				button: true,
				images: {
					fields: ["url", "alternativeText"],
				},
			},
		},
		about_kanoo_group: {
			populate: {
				tag_title: true,
				image: {
					fields: ["url", "alternativeText"],
				},
			},
		},
		business_units_section: {
			populate: {
				tag_title: true,
				details: {
					populate: {
						image: {
							fields: ["url", "alternativeText"],
						},
					},
				},
			},
		},
		brands_section: {
			populate: {
				tag_title: true,
				brands: {
					populate: {
						logo: {
							fields: ["url", "alternativeText"],
						},
					},
				},
			},
		},
		engineering_approach: {
			populate: {
				tag_title: true,
				details: {
					populate: {
						icon: {
							fields: ["url", "alternativeText"],
						},
					},
				},
			},
		},
		featured_projects_section: {
			populate: {
				tag_title: true,
				projects: {
					populate: {
						image: {
							fields: ["url", "alternativeText"],
						},
						link: true,
						details: true,
					},
				},
			},
		},
		expertise_section: {
			populate: {
				tag_title: true,
				details: true,
			},
		},
		certification_section: {
			populate: {
				tag_title: true,
				certificates: {
					populate: {
						logo: {
							fields: ["url", "alternativeText"],
						},
					},
				},
			},
		},
		team_section: {
			populate: {
				tag_title: true,
				members: {
					populate: {
						image: {
							fields: ["url", "alternativeText"],
						},
					},
				},
			},
		},
		footer_cta_section: {
			populate: {
				image: {
					fields: ["url", "alternativeText"],
				},
			},
		},
		seo: {
            populate: {
                metaImage: {
                    fields: ["url", "alternativeText"],
                },
                openGraph: {
                    populate: {
                        ogImage: {
                            fields: ["url", "alternativeText"],
                        },
                    },
                },
            },
        },
	},
});

export const contactUsPageQuery = qs.stringify({
	populate: {
		hero: {
			populate: {
				button1: true,
				button2: true,
			},
		},
		contact_details: true,
		form_section: {
			populate: {
				headquater_image: {
					fields: ["url", "alternativeText"],
				},
				link: true,
			},
		},
		partners_section: {
			populate: {
				logo: {
					fields: ["url", "alternativeText"],
				},
			},
		},
		footer_cta_section: {
			populate: {
				image: {
					fields: ["url", "alternativeText"],
				},
			},
		},
		seo: {
            populate: {
                metaImage: {
                    fields: ["url", "alternativeText"],
                },
                openGraph: {
                    populate: {
                        ogImage: {
                            fields: ["url", "alternativeText"],
                        },
                    },
                },
            },
        },
	},
});

export const engSolutionsPageQuery = qs.stringify({
	populate: {
		hero: {
			populate: {
				button1: true,
				button2: true,
			},
		},
		crane_engineering_section: {
			populate: {
				tag_title: true,
				image: {
					fields: ["url", "alternativeText"],
				},
			},
		},
		engineering_services: {
			populate: {
				tag_title: true,
				details: {
					populate: {
						icon: {
							fields: ["url", "alternativeText"],
						},
					},
				},
			},
		},
		sticky_cards: {
			populate: {
				tag_title: true,
				image: {
					fields: ["url", "alternativeText"],
				},
			},
		},
		engineering_advantage: {
			populate: {
				tag_title: true,
				cards: {
					populate: {
						icon: {
							fields: ["url", "alternativeText"],
						},
					},
				},
			},
		},
		how_we_work: {
			populate: {
				tag_title: true,
				details: {
					populate: {
						icon: {
							fields: ["url", "alternativeText"],
						},
					},
				},
			},
		},
		featured_projects: {
			populate: {
				tag_title: true,
				projects: {
					populate: {
						image: {
							fields: ["url", "alternativeText"],
						},
						link: true,
						details: {
							populate: {
								icon: {
									fields: ["url", "alternativeText"],
								},
							},
						},
					},
				},
			},
		},
		gallery_section: {
			populate: {
				tag_title: true,
				images: {
					fields: ["url", "alternativeText"],
				},
			},
		},
		testimonial_section: {
			populate: {
				tag_title: true,
				testimonials: {
					populate: {
						image: {
							fields: ["url", "alternativeText"],
						},
					},
				},
			},
		},
		integrated_solution_section: {
			populate: {
				tag_title: true,
				details: true,
				image: {
					fields: ["url", "alternativeText"],
				},
			},
		},
		industry_application: {
			populate: {
				tag_title: true,
				cards: {
					populate: {
						icon: {
							fields: ["url", "alternativeText"],
						},
					},
				},
			},
		},
		experts_section: {
			populate: {
				tag_title: true,
				experts: {
					populate: {
						image: {
							fields: ["url", "alternativeText"],
						},
					},
				},
			},
		},
		related_resources: {
			populate: {
				tag_title: true,
				resources: {
					fields: ["title", "slug", "date"],
					populate: {
						image: { fields: ["url", "alternativeText"] },
						resource_type: { fields: ["type", "slug"] },
					},
				},
			},
		},
		footer_cta_section: {
			populate: {
				image: {
					fields: ["url", "alternativeText"],
				},
			},
		},
		seo: {
            populate: {
                metaImage: {
                    fields: ["url", "alternativeText"],
                },
                openGraph: {
                    populate: {
                        ogImage: {
                            fields: ["url", "alternativeText"],
                        },
                    },
                },
            },
        },
	},
});

export const resourceHubPageQuery = qs.stringify({
	populate: {
		hero: true,
		footer_cta_section: {
			populate: {
				image: {
					fields: ["url", "alternativeText"],
				},
			},
		},
		seo: {
            populate: {
                metaImage: {
                    fields: ["url", "alternativeText"],
                },
                openGraph: {
                    populate: {
                        ogImage: {
                            fields: ["url", "alternativeText"],
                        },
                    },
                },
            },
        },
	},
});

export const resourcesQuery = qs.stringify({
	pagination: {
		pageSize: 100,
	},
	populate: {
		image: { fields: ["url", "alternativeText"] },
		resource_type: { fields: ["type", "slug"] },
	},
	fields: ["slug", "title", "date"],
});

export const resourceTypesQuery = qs.stringify({
	pagination: {
		pageSize: 100,
	},
});

export const resourceHubDetailsPageQuery = qs.stringify({
	populate: {
		resource_type: {
			fields: ["type", "slug"],
		},
		banner_button: true,
		image: {
			fields: ["url", "alternativeText"],
		},
		card_banner_button: true,
		related_resources: {
			populate: {
				image: {
					fields: ["url", "alternativeText"],
				},
				resource_type: {
					fields: ["type", "slug"],
				},
			},
			fields: ["title", "slug", "date"],
		},
		footer_cta_section: {
			populate: {
				image: {
					fields: ["url", "alternativeText"],
				},
			},
		},
		seo: {
            populate: {
                metaImage: {
                    fields: ["url", "alternativeText"],
                },
                openGraph: {
                    populate: {
                        ogImage: {
                            fields: ["url", "alternativeText"],
                        },
                    },
                },
            },
        },
	},
});

export const salesHubPageQuery = qs.stringify({
	populate: {
		hero: {
			populate: {
				button1: true,
				button2: true,
			},
		},
		why_buy_from_us_section: {
			populate: {
				tag_title: true,
				details: {
					populate: {
						icon: {
							fields: ["url", "alternativeText"],
						},
					},
				},
			},
		},
		sales_category_section: {
			populate: {
				tag_title: true,
				details: {
					populate: {
						logo: {
							fields: ["url", "alternativeText"],
						},
					},
				},
			},
		},
		brands_section: {
			populate: {
				tag_title: true,
				brands: {
					populate: {
						logo: {
							fields: ["url", "alternativeText"],
						},
					},
				},
			},
		},
		featured_models_section: {
			populate: {
				tag_title: true,
			},
		},
		ownership_benefits: {
			populate: {
				tag_title: true,
				points: true,
				image: {
					fields: ["url", "alternativeText"],
				},
			},
		},
		engineering_support_section: {
			populate: {
				tag_title: true,
				details: true,
				image: {
					fields: ["url", "alternativeText"],
				},
			},
		},
		buying_guide_section: {
			populate: {
				tag_title: true,
				details: {
					populate: {
						icon: {
							fields: ["url", "alternativeText"],
						},
					},
				},
			},
		},
		industries_section: {
			populate: {
				tag_title: true,
				industries: {
					populate: {
						icon: {
							fields: ["url", "alternativeText"],
						},
					},
				},
			},
		},
		gallery_section: {
			populate: {
				tag_title: true,
				images: {
					fields: ["url", "alternativeText"],
				},
			},
		},
		testimonial_section: {
			populate: {
				tag_title: true,
				testimonials: {
					populate: {
						image: {
							fields: ["url", "alternativeText"],
						},
					},
				},
			},
		},
		experts_section: {
			populate: {
				tag_title: true,
				experts: {
					populate: {
						image: {
							fields: ["url", "alternativeText"],
						},
					},
				},
			},
		},
		investment_section: {
			populate: {
				tag_title: true,
				button: true,
				images: {
					fields: ["url", "alternativeText"],
				},
			},
		},
		related_resources: {
			populate: {
				tag_title: true,
				resources: {
					fields: ["title", "slug", "date"],
					populate: {
						image: { fields: ["url", "alternativeText"] },
						resource_type: { fields: ["type", "slug"] },
					},
				},
			},
		},
		footer_cta_section: {
			populate: {
				image: {
					fields: ["url", "alternativeText"],
				},
			},
		},
		seo: {
            populate: {
                metaImage: {
                    fields: ["url", "alternativeText"],
                },
                openGraph: {
                    populate: {
                        ogImage: {
                            fields: ["url", "alternativeText"],
                        },
                    },
                },
            },
        },
	},
});

export const rentalHubPageQuery = qs.stringify({
	populate: {
		hero: {
			populate: {
				button1: true,
				button2: true,
			},
		},
		why_rent_from_us_section: {
			populate: {
				tag_title: true,
				details: {
					populate: {
						icon: {
							fields: ["url", "alternativeText"],
						},
					},
				},
			},
		},
		sales_category_section: {
			populate: {
				tag_title: true,
				details: {
					populate: {
						logo: {
							fields: ["url", "alternativeText"],
						},
					},
				},
			},
		},
		site_selection_section: {
			populate: {
				tag_title: true,
				site_selection_details: {
					populate: {
						image: {
							fields: ["url", "alternativeText"],
						},
					},
				},
			},
		},
		featured_models_section: {
			populate: {
				tag_title: true,
			},
		},
		rental_benefit_section: {
			populate: {
				tag_title: true,
				image: {
					fields: ["url", "alternativeText"],
				},
				accordion: true,
			},
		},
		engineering_support_section: {
			populate: {
				tag_title: true,
				details: true,
				image: {
					fields: ["url", "alternativeText"],
				},
			},
		},
		featured_projects_section: {
			populate: {
				tag_title: true,
				projects: {
					populate: {
						image: {
							fields: ["url", "alternativeText"],
						},
						link: true,
						details: true,
					},
				},
			},
		},
		gallery_section: {
			populate: {
				tag_title: true,
				images: {
					fields: ["url", "alternativeText"],
				},
			},
		},
		testimonial_section: {
			populate: {
				tag_title: true,
				testimonials: {
					populate: {
						image: {
							fields: ["url", "alternativeText"],
						},
					},
				},
			},
		},
		experts_section: {
			populate: {
				tag_title: true,
				experts: {
					populate: {
						image: {
							fields: ["url", "alternativeText"],
						},
					},
				},
			},
		},
		industry_expertise_section: {
			populate: {
				tag_title: true,
				images: {
					fields: ["url", "alternativeText"],
				},
			},
		},
		related_resources: {
			populate: {
				tag_title: true,
				resources: {
					fields: ["title", "slug", "date"],
					populate: {
						image: { fields: ["url", "alternativeText"] },
						resource_type: { fields: ["type", "slug"] },
					},
				},
			},
		},
		footer_cta_section: {
			populate: {
				image: {
					fields: ["url", "alternativeText"],
				},
			},
		},
		seo: {
            populate: {
                metaImage: {
                    fields: ["url", "alternativeText"],
                },
                openGraph: {
                    populate: {
                        ogImage: {
                            fields: ["url", "alternativeText"],
                        },
                    },
                },
            },
        },
	},
});

export const modelPageQuery = qs.stringify({
	populate: {
		main_section: {
			populate: {
				model_specifications: true,
				images: {
					fields: ["url", "alternativeText"],
				},
			},
		},
		why_buy_from_kc_section: {
			populate: {
				tag_title: true,
				cards: {
					populate: {
						icon: {
							fields: ["url", "alternativeText"],
						},
					},
				},
			},
		},
		procurement_section: {
			populate: {
				tag_title: true,
				image: {
					fields: ["url", "alternativeText"],
				},
			},
		},
		technical_application: {
			populate: {
				tag_title: true,
				cards: {
					populate: {
						icon: {
							fields: ["url", "alternativeText"],
						},
					},
				},
			},
		},
		safety_and_compliance: {
			populate: {
				tag_title: true,
				cards: {
					populate: {
						icon: {
							fields: ["url", "alternativeText"],
						},
					},
				},
			},
		},
		downloads_section: {
			populate: {
				tag_title: true,
				resources: {
					populate: {
						resource: {
							fields: ["url"],
						},
					},
				},
			},
		},
		related_model_section: {
			populate: {
				tag_title: true,
			},
		},
		applications_section: {
			populate: {
				tag_title: true,
				site_selection_details: {
					populate: {
						image: {
							fields: ["url", "alternativeText"],
						},
					},
				},
			},
		},
		projects_section: {
			populate: {
				tag_title: true,
				projects: {
					populate: {
						image: {
							fields: ["url", "alternativeText"],
						},
					},
				},
			},
		},
		gallery_section: {
			populate: {
				tag_title: true,
				images: {
					fields: ["url", "alternativeText"],
				},
			},
		},
		testimonial_section: {
			populate: {
				tag_title: true,
				testimonials: {
					populate: {
						image: {
							fields: ["url", "alternativeText"],
						},
					},
				},
			},
		},
		footer_cta_section: {
			populate: {
				image: {
					fields: ["url", "alternativeText"],
				},
			},
		},
		seo: {
            populate: {
                metaImage: {
                    fields: ["url", "alternativeText"],
                },
                openGraph: {
                    populate: {
                        ogImage: {
                            fields: ["url", "alternativeText"],
                        },
                    },
                },
            },
        },
	},
});

export const categorySalesPageQuery = qs.stringify({
	populate: {
		hero: {
			populate: {
				button1: true,
				button2: true,
			},
		},
		filter_section: {
			populate: {
				tag_title: true,
			},
		},
		info_section: {
			populate: {
				tag_title: true,
				image: {
					fields: ["url", "alternativeText"],
				},
			},
		},
		benefits_section: {
			populate: {
				tag_title: true,
				points: true,
				image: {
					fields: ["url", "alternativeText"],
				},
			},
		},
		brand_highlight: {
			populate: {
				logo: {
					fields: ["url", "alternativeText"],
				},
				tag_title: true,
			},
		},
		crane_categories: {
			populate: {
				tag_title: true,
				details: {
					populate: {
						logo: {
							fields: ["url", "alternativeText"],
						},
					},
				},
			},
		},
		buying_guide: {
			populate: {
				tag_title: true,
				details: {
					populate: {
						icon: {
							fields: ["url", "alternativeText"],
						},
					},
				},
			},
		},
		industry_application: {
			populate: {
				tag_title: true,
				site_selection_details: {
					populate: {
						image: {
							fields: ["url", "alternativeText"],
						},
					},
				},
			},
		},
		gallery_section: {
			populate: {
				tag_title: true,
				images: {
					fields: ["url", "alternativeText"],
				},
			},
		},
		engineering_support_section: {
			populate: {
				tag_title: true,
				details: true,
				image: {
					fields: ["url", "alternativeText"],
				},
			},
		},
		ownership_benefits: {
			populate: {
				tag_title: true,
				image: {
					fields: ["url", "alternativeText"],
				},
			},
		},
		testimonial_section: {
			populate: {
				tag_title: true,
				testimonials: {
					populate: {
						image: {
							fields: ["url", "alternativeText"],
						},
					},
				},
			},
		},
		experts_section: {
			populate: {
				tag_title: true,
				experts: {
					populate: {
						image: {
							fields: ["url", "alternativeText"],
						},
					},
				},
			},
		},
		related_resources: {
			populate: {
				tag_title: true,
				resources: {
					fields: ["title", "slug", "date"],
					populate: {
						image: { fields: ["url", "alternativeText"] },
						resource_type: { fields: ["type", "slug"] },
					},
				},
			},
		},
		footer_cta_section: {
			populate: {
				image: {
					fields: ["url", "alternativeText"],
				},
			},
		},
		seo: {
            populate: {
                metaImage: {
                    fields: ["url", "alternativeText"],
                },
                openGraph: {
                    populate: {
                        ogImage: {
                            fields: ["url", "alternativeText"],
                        },
                    },
                },
            },
        },
	},
});

export const categoryRentalPageQuery = qs.stringify({
	populate: {
		hero: {
			populate: {
				button1: true,
				button2: true,
			},
		},
		filter_section: {
			populate: {
				tag_title: true,
			},
		},
		info_section: {
			populate: {
				tag_title: true,
				image: {
					fields: ["url", "alternativeText"],
				},
			},
		},
		rental_services_section: {
			populate: {
				tag_title: true,
				details: true,
				image: {
					fields: ["url", "alternativeText"],
				},
			},
		},
		crane_categories: {
			populate: {
				tag_title: true,
				details: {
					populate: {
						logo: {
							fields: ["url", "alternativeText"],
						},
					},
				},
			},
		},
		selection_guide: {
			populate: {
				tag_title: true,
				details: true,
				image: {
					fields: ["url", "alternativeText"],
				},
			},
		},
		industry_application: {
			populate: {
				tag_title: true,
				site_selection_details: {
					populate: {
						image: {
							fields: ["url", "alternativeText"],
						},
					},
				},
			},
		},
		gallery_section: {
			populate: {
				tag_title: true,
				images: {
					fields: ["url", "alternativeText"],
				},
			},
		},
		engineering_support_section: {
			populate: {
				tag_title: true,
				details: true,
				image: {
					fields: ["url", "alternativeText"],
				},
			},
		},
		ownership_benefits: {
			populate: {
				tag_title: true,
				image: {
					fields: ["url", "alternativeText"],
				},
			},
		},
		testimonial_section: {
			populate: {
				tag_title: true,
				testimonials: {
					populate: {
						image: {
							fields: ["url", "alternativeText"],
						},
					},
				},
			},
		},
		experts_section: {
			populate: {
				tag_title: true,
				experts: {
					populate: {
						image: {
							fields: ["url", "alternativeText"],
						},
					},
				},
			},
		},
		related_resources: {
			populate: {
				tag_title: true,
				resources: {
					fields: ["title", "slug", "date"],
					populate: {
						image: { fields: ["url", "alternativeText"] },
						resource_type: { fields: ["type", "slug"] },
					},
				},
			},
		},
		footer_cta_section: {
			populate: {
				image: {
					fields: ["url", "alternativeText"],
				},
			},
		},
		seo: {
            populate: {
                metaImage: {
                    fields: ["url", "alternativeText"],
                },
                openGraph: {
                    populate: {
                        ogImage: {
                            fields: ["url", "alternativeText"],
                        },
                    },
                },
            },
        },
	},
});

export const getAll = qs.stringify({
	pagination: {
		pageSize: 100,
	},
});

export const getAllModelsQuery = qs.stringify({
	pagination: {
		pageSize: 100,
	},
	populate: {
		main_section: {
			fields: [
				"model_short_name",
				"crane_capacity",
				"max_working_radius",
				"max_lifting_height",
				"listingType",
			],
			populate: {
				images: {
					fields: ["url", "alternativeText"],
				},
			},
		},
	},
});
