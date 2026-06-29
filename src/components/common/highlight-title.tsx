import { cn } from "@/lib/utils";

function HighlightedTitle({
    title,
    highlights,
    className,
}: {
    title: string;
    highlights: string[];
    className?: string;
}) {
    const regex = new RegExp(`(${highlights.join("|")}(?:\\?)?)`, "gi");
    const parts = title.split(regex);

    return (
        <h1
            className={cn(
                "text-3xl lg:text-4xl font-manrope font-medium",
                className
            )}
        >
            {parts.map((part, i) =>
                highlights.some(
                    (h) => h.toLowerCase() === part.toLowerCase()
                ) ? (
                    <span key={i} className="text-primary">
                        {part}
                    </span>
                ) : (
                    part.replace("<b>", "").replace("</b>", "")
                )
            )}
        </h1>
    );
}

export default HighlightedTitle;
