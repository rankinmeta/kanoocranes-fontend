import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const Tag = ({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) => {
    return (
        <div className="flex items-center gap-2">
            <div className={cn("size-2 bg-primary", className)} />
            <span className="uppercase font-inter text-xs font-medium">
                {children}
            </span>
        </div>
    );
};

export default Tag;
