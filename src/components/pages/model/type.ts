export interface Product {
    id: string;
    name: string;
    category: string;
    description: string;

    stats: {
        capacity: string;
        radius: string;
        height: string;
    };

    highlights: {
        label: string;
        value: string;
    }[];

    overview: string;

    images: string[];

    specifications: {
        label: string;
        value: string;
    }[];
}
