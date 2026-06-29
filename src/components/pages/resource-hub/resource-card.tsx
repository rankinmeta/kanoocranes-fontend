import { StrapiImage } from "@/components/common/strapi-image";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ResourceCard = ({className}: {className?: string}) => {
    return (
        <Link href="/" className={cn("shrink-0 w-[90%] md:w-1/2 lg:w-auto", className)}>
            <div className="group bg-white md:bg-transparent p-3 pb-5 hover:bg-white transition-colors duration-300">
                <div className="overflow-hidden">
                    <StrapiImage
                        src="http://localhost:3000/local/crane1.png"
                        alt="crane"
                        width={200}
                        height={150}
                        className="w-full aspect-video rounded-sm object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                </div>

                <div className="flex justify-between items-center text-xs mt-5 mb-2">
                    <span className="bg-[#E9EAEB] px-1.5 py-px">Guide</span>
                    <span className="text-[#414651]">14 Mar 26</span>
                </div>
                <h4 className="font-medium mb-3">
                    Wind-Load Limits: What Every Site Manager Should Check
                </h4>
                <button className="flex items-center gap-2 text-primary text-sm">
                    Read more <ArrowRight size={16} />
                </button>
            </div>
        </Link>
    );
};

export default ResourceCard;
