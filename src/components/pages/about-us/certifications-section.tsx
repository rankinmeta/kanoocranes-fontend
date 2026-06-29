import { CertificationsCarousel } from "@/components/carousel/certifications";
import HighlightedTitle from "@/components/common/highlight-title";
import Tag from "@/components/common/tag";
import { extractHighlightText } from "@/lib/utils";
import type { MediaProps, TagTitleProps } from "@/type";

type CertificationsSectionProps = {
  tag_title: TagTitleProps;
  description: string;
  certificates: {
    id: number;
    logo: MediaProps;
    title: string;
    label: string;
    description: string;
  }[];
};

const CertificationsSection = ({
  certificates,
  description,
  tag_title,
}: CertificationsSectionProps) => {
  if (!tag_title || !certificates) return null;

  return (
    <section className="container container-padding-x py-10 md:py-16 lg:py-20">
      <div className="space-y-2">
        <Tag>{tag_title.tag}</Tag>
        <HighlightedTitle
          title={tag_title.title}
          highlights={extractHighlightText(tag_title.title)}
        />
        <p className="text-[#414651] max-w-xl mt-4">{description}</p>
      </div>

      {certificates.length > 0 && (
        <CertificationsCarousel certificates={certificates} />
      )}
    </section>
  );
};

export default CertificationsSection;
