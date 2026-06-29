import HighlightedTitle from "@/components/common/highlight-title";
import Tag from "@/components/common/tag";
import Automation from "@/components/icons/automation";
import ElectricBolt from "@/components/icons/electric-bolt";
import LightStrip from "@/components/icons/lightstrip";
import Support from "@/components/icons/support";
import { cn, extractHighlightText } from "@/lib/utils";

const Section2 = ({ className }: { className?: string }) => {
    return (
        <section className={cn("bg-[#F5F5F5] py-10 md:py-16 lg:py-20", className)}>
            <div className="container container-padding-x md:grid grid-cols-2 gap-5">
                <div className="space-y-2.5">
                    <Tag>Why rent with kanoo cranes</Tag>
                    <HighlightedTitle
                        title="Flexible solutions for <b>every project</b>"
                        highlights={extractHighlightText(
                            "Flexible solutions for <b>every project</b>"
                        )}
                    />
                    <p className="text-[#414651] text-sm max-w-lg">
                        Whether you're managing a short-term lift or a long-term
                        construction project, Kanoo Cranes provides reliable
                        rental solutions backed by modern equipment, engineering
                        expertise, and responsive support
                    </p>
                </div>

                <div className="flex md:grid lg:grid-cols-2 mt-7 md:mt-0 gap-4 gap-y-10 overflow-x-scroll scrollbar-none">
                    <div className="space-y-2 shrink-0 w-[80%] md:w-auto">
                        <Automation />
                        <h5 className="text-lg">Diverse rental fleet</h5>
                        <p className="text-[#414651] text-sm">
                            Access tower cranes, mobile cranes, spider cranes,
                            and specialized lifting equipment for a wide range
                            of projects.
                        </p>
                    </div>
                    <div className="space-y-2 shrink-0 w-[90%] md:w-auto">
                        <Support className="size-14" />
                        <h5 className="text-lg">Diverse rental fleet</h5>
                        <p className="text-[#414651] text-sm">
                            Access tower cranes, mobile cranes, spider cranes,
                            and specialized lifting equipment for a wide range
                            of projects.
                        </p>
                    </div>
                    <div className="space-y-2 shrink-0 w-[90%] md:w-auto">
                        <ElectricBolt />
                        <h5 className="text-lg">Diverse rental fleet</h5>
                        <p className="text-[#414651] text-sm">
                            Access tower cranes, mobile cranes, spider cranes,
                            and specialized lifting equipment for a wide range
                            of projects.
                        </p>
                    </div>
                    <div className="space-y-2 shrink-0 w-[90%] md:w-auto">
                        <LightStrip />
                        <h5 className="text-lg">Diverse rental fleet</h5>
                        <p className="text-[#414651] text-sm">
                            Access tower cranes, mobile cranes, spider cranes,
                            and specialized lifting equipment for a wide range
                            of projects.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section2;
