import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import ResourceCard from "../pages/resource-hub/resource-card";

export function ResourcesCarousel() {
    return (
        <Carousel
            opts={{
                align: "start",
                loop: false,
            }}
            className="w-full mt-7"
        >
            <CarouselContent>
                {Array.from({ length: 4 }).map((_, index) => (
                    <CarouselItem key={index} className="basis-1/1 md:basis-1/3">
                        <ResourceCard />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious size="icon-lg" className="-top-14" />
            <CarouselNext size="icon-lg" className="-top-14" />
        </Carousel>
    );
}
