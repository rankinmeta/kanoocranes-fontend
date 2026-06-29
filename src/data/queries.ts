import qs from "qs";

export const globalSettingQuery = qs.stringify({
    populate: {
        header: {
            populate: {
                logo: {
                    fields: ["url", "alternativeText"],
                },
            },
        },
        footer: {
            populate: {
                logo: {
                    fields: ["url", "alternativeText"],
                },
            },
        },
        branch_details: true,
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
        resources_section: {
            populate: {
                tag_title: true,
                resources: {
                    populate: {
                        image: {
                            fields: ["url", "alternativeText"],
                        },
                        button: true,
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
            }
        },
        about_kanoo_group: {
            populate: {
                tag_title: true,
                image: {
                    fields: ["url", "alternativeText"],
                },
            }
        },
        business_units_section: {
            populate: {
                tag_title: true,
                details: {
                    populate: {
                        image: {
                            fields: ["url", "alternativeText"],
                        },
                    }
                }
            }
        },
        brands_section: {
            populate: {
                tag_title: true,
                brands: {
                    populate: {
                        logo: {
                            fields: ["url", "alternativeText"],
                        },
                    }
                }
            }
        },
        engineering_approach: {
            populate: {
                tag_title: true,
                details: {
                    populate: {
                        icon: {
                            fields: ["url", "alternativeText"],
                        }
                    }
                }
            }
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
                    }
                }
            },
        },
        expertise_section: {
            populate: {
                tag_title: true,
                details: true
            }
        },
        certification_section: {
            populate: {
                tag_title: true,
                certificates: {
                    populate: {
                        logo: {
                            fields: ["url", "alternativeText"],
                        },
                    }
                }
            }
        },
        team_section: {
            populate: {
                tag_title: true,
                members: {
                    populate: {
                        image: {
                            fields: ["url", "alternativeText"],
                        },
                    }
                }
            }
        },
        footer_cta_section: {
            populate: {
                image: {
                    fields: ["url", "alternativeText"],
                },
            }
        }
    }
});

export const contactUsPageQuery = qs.stringify({
    populate: {
        hero: true,
        contact_details: true,
        form_section: {
            populate: {
                headquater_image: {
                    fields: ["url", "alternativeText"],
                },
                link: true,
            }
        },
        partners_section: {
            populate: {
                logo: {
                    fields: ["url", "alternativeText"],
                },
            }
        }
    }
});