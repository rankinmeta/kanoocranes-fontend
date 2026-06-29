import { StrapiImage } from "@/components/common/strapi-image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const FooterCTASection = ({hide}: {hide?: boolean}) => {
    return (
        <section className={cn("relative bg-secondary grid md:grid-cols-3 text-white", hide && "md:hidden")}>
            {/* Circles */}
            <div className="absolute right-5 top-1/2 -translate-y-1/2 hidden lg:grid grid-cols-4 gap-2 gap-y-3 after:bg-linear-to-r after:from-transparent after:to-secondary after:absolute after:inset-0">
                {Array(12)
                    .fill(0)
                    .map((_, i) => (
                        <div
                            key={i}
                            className="size-14 bg-[#03297a] rounded-full"
                        ></div>
                    ))}
            </div>

            <StrapiImage
                src="http://localhost:3000/local/crane1.png"
                alt="crane"
                width={200}
                height={150}
                className="size-full aspect-video md:aspect-auto object-cover"
            />

            <div className="px-4 md:px-8 py-6 md:py-8 flex flex-col justify-center gap-4 md:col-span-2 max-w-[85%] md:max-w-lg">
                <h2 className="font-manrope text-3xl tracking-wide">
                    Get the right crane for your next project
                </h2>
                <p className="text-sm">
                    Talk to our experts for tailored crane solutions, quick
                    quotes, and reliable support for your project requirements.
                </p>

                <Button className="bg-white text-primary hover:bg-primary hover:text-white w-fit">
                    Request a Quote
                </Button>
            </div>
        </section>
    );
};

export default FooterCTASection;
