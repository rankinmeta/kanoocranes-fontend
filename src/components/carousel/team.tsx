import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { StrapiImage } from "../common/strapi-image";

export function TeamCarousel() {
    return (
        <Carousel
            opts={{
                align: "start",
                loop: false,
            }}
            className="w-full mt-12"
        >
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="basis-[80%] md:basis-1/3 lg:basis-1/4">
                        <div>
                            <div className="bg-secondary w-full aspect-square rounded-md flex justify-center items-end overflow-hidden">
                                <StrapiImage
                                    src={`http://localhost:3000/local/team${
                                        index + 1
                                    }.webp`}
                                    alt="Team"
                                    width={250}
                                    height={100}
                                    className="relative -bottom-24"
                                />
                            </div>

                            <h5 className="text-lg font-medium font-manrope mt-6 leading-5">
                                Ahmed Al Mansoori
                            </h5>
                            <span className="text-xs text-[#414651]">
                                Cheif Executive Officer &#040;CEO&#041;
                            </span>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious size="icon-lg" className="-top-20" />
            <CarouselNext size="icon-lg" className="-top-20" />
        </Carousel>
    );
}
