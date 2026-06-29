"use client";

import HighlightedTitle from "../common/highlight-title";
import { cn, extractHighlightText } from "@/lib/utils";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

const StickyCTA = () => {
    const pathname = usePathname();
    const hide = !pathname.includes("/models");

    return (
        <div
            className={cn(
                "bg-white sticky z-60 bottom-0 w-full py-4 border-t shadow-2xl",
                hide ? "hidden md:hidden" : "hidden md:block"
            )}
        >
            <div className="container container-padding-x flex justify-between items-center">
                <HighlightedTitle
                    title="JASO J560 <b>flat-top tower crane</b>"
                    highlights={extractHighlightText(
                        "JASO J560 <b>flat-top tower crane</b>"
                    )}
                    className="text-xl!"
                />

                <div className="flex items-center gap-2">
                    <Button>Rent This Crane</Button>
                    <Button className="bg-white text-secondary border-secondary hover:bg-secondary hover:text-white">
                        Request a Quote
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default StickyCTA;
