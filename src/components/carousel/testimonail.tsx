import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { StrapiImage } from "../common/strapi-image";
import Quote from "../icons/quote";

export function TestimonialCarousel() {
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-full mt-8 lg:mt-16"
        >
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="basis-[90%] lg:basis-1/2">
                        <div className="flex flex-col md:flex-row gap-6">
                            <StrapiImage
                                src="http://localhost:3000/local/expert1.png"
                                alt="expert"
                                width={200}
                                height={200}
                                className="rounded-md object-cover aspect-square shrink-0"
                            />

                            <div>
                                <Quote />
                                <p className="text-[#414651]">
                                    Kanoo Cranes delivered exactly what we
                                    needed during a critical shutdown. Their
                                    engineering precision and safety standards
                                    ensured zero delays and smooth execution
                                </p>

                                <div className="flex flex-col mt-3">
                                    <span className="font-medium">
                                        Sarah Ahmed
                                    </span>
                                    <span className="text-[#414651] text-sm">
                                        Skyline Construction
                                    </span>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious size="icon-lg" className="hidden lg:block" />
            <CarouselNext size="icon-lg" className="hidden lg:block" />
        </Carousel>
    );
}
