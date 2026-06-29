import { TeamCarousel } from "@/components/carousel/team";
import HighlightedTitle from "@/components/common/highlight-title";
import Tag from "@/components/common/tag";
import { extractHighlightText } from "@/lib/utils";
import type { MediaProps, TagTitleProps } from "@/type";

type TeamSectionProps = {
    tag_title: TagTitleProps;
    members: {
        id: number;
        image: MediaProps;
        name: string;
        role: string;
        linkedin_url: string | null;
    }[]
}

const TeamSection = ({members, tag_title}: TeamSectionProps) => {
    if(!tag_title || !members) return null;

    return (
        <section className="bg-[#F5F5F5]">
            <div className="container container-padding-x py-10 md:py-16 lg:py-20">
                <div className="space-y-2">
                    <Tag>{tag_title.tag}</Tag>
                    <HighlightedTitle
                        title={tag_title.title}
                        highlights={extractHighlightText(
                            tag_title.title
                        )}
                    />
                </div>

                {members.length > 0 && <TeamCarousel members={members} />}
            </div>
        </section>
    );
};

export default TeamSection;
