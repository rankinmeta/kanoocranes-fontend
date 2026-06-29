import { TeamCarousel } from "@/components/carousel/team";
import HighlightedTitle from "@/components/common/highlight-title";
import Tag from "@/components/common/tag";
import { extractHighlightText } from "@/lib/utils";

const TeamSection = () => {
    return (
        <section className="bg-[#F5F5F5]">
            <div className="container container-padding-x py-10 md:py-16 lg:py-20">
                <div className="space-y-2">
                    <Tag>Team & Leadership</Tag>
                    <HighlightedTitle
                        title="Experienced professionals <b>behind every lift</b>"
                        highlights={extractHighlightText(
                            "Experienced professionals <b>behind every lift</b>"
                        )}
                    />
                </div>

                <TeamCarousel />
            </div>
        </section>
    );
};

export default TeamSection;
