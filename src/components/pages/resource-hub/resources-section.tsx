import HighlightedTitle from "@/components/common/highlight-title";
import { extractHighlightText } from "@/lib/utils";
import { ResourceSelect } from "./resource-select";
import ResourceCard from "./resource-card";
import ResourceListSection from "./resource-list-section";
import Book from "@/components/icons/book";
import { Button } from "@/components/ui/button";

const ResourcesSection = () => {
    return (
        <section className="bg-[#F5F5F5]">
            <div className="container container-padding-x py-10 md:py-20">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <HighlightedTitle
                        title="Crane operations & <b>resources</b>"
                        highlights={extractHighlightText(
                            "Crane operations & <b>resources</b>"
                        )}
                    />

                    <ResourceSelect />
                </div>

                <ResourceListSection />

                <div className="bg-secondary mt-10 text-white p-8 md:p-6 rounded-md flex flex-col md:flex-row justify-between md:items-center">
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                        <Book />
                        <div className="space-y-2 max-w-2xl">
                            <h3 className="text-3xl font-manrope">
                                Access premium technical resources
                            </h3>
                            <p className="text-sm">
                                Unlock exclusive resources including CAD
                                drawings, detailed load charts, engineering
                                reports, technical manuals, and project planning
                                documents.
                            </p>
                        </div>
                    </div>

                    <Button className="w-fit mt-4 md:mt-0">Unlock Resources</Button>
                </div>
            </div>
        </section>
    );
};

export default ResourcesSection;
