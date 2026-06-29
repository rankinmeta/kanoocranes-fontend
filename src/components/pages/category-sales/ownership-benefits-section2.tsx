import HighlightedTitle from "@/components/common/highlight-title";
import Tag from "@/components/common/tag";
import { extractHighlightText } from "@/lib/utils";

const OwnershipBenefitsSection2 = () => {
    return (
        <section className="bg-[#f5f5f5]">
            <div className="container container-padding-x py-10 md:py-20 grid md:grid-cols-2 gap-5">
                <div className="space-y-2.5">
                    <Tag>Ownership benefits</Tag>
                    <HighlightedTitle
                        title="Reliable tower cranes for <b>long-term success</b>"
                        highlights={extractHighlightText(
                            "Reliable tower cranes for <b>long-term success</b>"
                        )}
                        className="max-w-sm"
                    />
                    <p className="text-[#414651] max-w-lg">
                        Our tower crane portfolio is designed to meet the
                        demands of today's most challenging construction
                        environments. Combining advanced engineering, proven
                        reliability, and efficient operation, these cranes help
                        contractors improve productivity while maintaining high
                        safety standards. Backed by technical expertise and
                        support services, our solutions deliver value throughout
                        the equipment lifecycle.
                    </p>
                </div>

                <div className="bg-white rounded-md p-5">
                    <span className="font-manrope text-lg font-medium">
                        Benefits
                    </span>
                    <ul className="mt-2 space-y-1">
                        <li className="flex items-center gap-2">
                            <div className="size-2 bg-primary" />
                            <span>
                                High lifting capacities for demanding projects
                            </span>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="size-2 bg-primary" />
                            <span>Extended reach and site coverage</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default OwnershipBenefitsSection2;
