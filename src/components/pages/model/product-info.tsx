import HighlightedTitle from "@/components/common/highlight-title";
import { SpecificationTable } from "./specification-table";
import { extractHighlightText } from "@/lib/utils";
import { Product } from "./type";

interface Props {
    product: Product;
    specifications: {
        label: string;
        value: string;
    }[];
}

export function ProductInfo({ product, specifications }: Props) {
    return (
        <div>
            <HighlightedTitle
                title="JASO J560 <b>Flat-top Tower Crane</b>"
                highlights={extractHighlightText(
                    "JASO J560 <b>Flat-top Tower Crane</b>"
                )}
                className="md:font-light text-4xl md:text-5xl! max-w-md"
            />

            <p className="mt-4">{product.description}</p>

            <div className="mt-5 grid md:grid-cols-3">
                <div className="py-3 md:py-5">
                    <div className="flex items-center gap-2">
                        <div className="size-2 bg-primary" />
                        <span className="text-sm">Crane Capacity</span>
                    </div>

                    <h3 className="mt-2 text-2xl md:text-3xl font-medium font-manrope">
                        {product.stats.capacity}
                    </h3>
                </div>

                <div className="border-y md:border-y-0 md:border-x py-3 md:py-5 md:pl-6">
                    <div className="flex items-center gap-2">
                        <div className="size-2 bg-primary" />
                        <span className="text-sm">Max Radius</span>
                    </div>

                    <h3 className="mt-2 text-2xl md:text-3xl font-medium font-manrope">
                        {product.stats.radius}
                    </h3>
                </div>

                <div className="py-3 md:py-5 md:pl-6">
                    <div className="flex items-center gap-2">
                        <div className="size-2 bg-primary" />
                        <span className="text-sm">Lift Height</span>
                    </div>

                    <h3 className="mt-2 text-2xl md:text-3xl font-medium font-manrope">
                        {product.stats.height}
                    </h3>
                </div>
            </div>

            <h3 className="mt-5 mb-4 text-2xl font-manrope font-medium">
                Specs Bar
            </h3>

            <div className="grid md:grid-cols-2 gap-4 bg-[#F5F5F5] p-3 md:p-5 rounded-sm">
                {product.highlights.map((item) => (
                    <div key={item.label} className="flex items-center gap-2">
                        <span className="h-2 w-2 bg-red-500" />
                        <span className="text-sm font-medium">
                            {item.label}
                        </span>

                        <span className="text-sm text-[#414651]">
                            {item.value}
                        </span>
                    </div>
                ))}
            </div>

            <div>
                <h3 className="mt-8 mb-4 text-2xl font-manrope font-medium">
                    Overview
                </h3>

                <p className="text-[#414651]">
                    The JASO J560 is a high-performance flat-top tower crane
                    designed for demanding construction environments. Its
                    impressive lifting capacity and extended working radius make
                    it ideal for high-rise developments, commercial complexes,
                    mixed-use projects, and major infrastructure developments.
                    Engineered for efficiency, reliability, and safety, the J560
                    helps contractors maximize productivity while maintaining
                    smooth site operations.
                </p>
            </div>

            <SpecificationTable specifications={specifications} />
        </div>
    );
}
