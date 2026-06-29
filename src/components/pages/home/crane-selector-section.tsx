import HighlightedTitle from "@/components/common/highlight-title";
import Tag from "@/components/common/tag";
import { extractHighlightText } from "@/lib/utils";
import CraneSelector from "./crane-selector";

const CraneSelectorSection = () => {
    return (
        <section className="container container-padding-x py-20 space-y-16">
            <div className="flex justify-between items-end">
                <div className="space-y-2">
                    <Tag>Engineering Solutions</Tag>
                    <HighlightedTitle
                        title={"Find the right crane <b>for your project</b>"}
                        highlights={extractHighlightText(
                            "Find the right crane <b>for your project</b>"
                        )}
                        className="max-w-88"
                    />
                </div>

                <p className="max-w-xl">
                    Tell us your project requirements, and we'll recommend the
                    most suitable crane based on load capacity, site conditions,
                    and operational needs.
                </p>
            </div>

            <CraneSelector />
        </section>
    );
};

export default CraneSelectorSection;
