import { CertificationsCarousel } from "@/components/carousel/certifications";
import HighlightedTitle from "@/components/common/highlight-title";
import Tag from "@/components/common/tag";
import { extractHighlightText } from "@/lib/utils";

const CertificationsSection = () => {
    return (
        <section className="container container-padding-x py-10 md:py-16 lg:py-20">
            <div className="space-y-2">
                <Tag>Certifications</Tag>
                <HighlightedTitle
                    title="Certified for <b>safety & quality</b>"
                    highlights={extractHighlightText(
                        "Certified for <b>safety & quality</b>"
                    )}
                />
                <p className="text-[#414651] max-w-xl mt-4">
                    Our operations adhere to internationally recognized
                    standards, ensuring safety, quality, and compliance across
                    every lifting project.
                </p>
            </div>

            <CertificationsCarousel />
        </section>
    );
};

export default CertificationsSection;
