import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import ResourceCard from "../pages/resource-hub/resource-card";
import { ResourceCardProps } from "@/type";

export function ResourcesCarousel({resources}: {resources: ResourceCardProps[]}) {
    if(!resources) return null;
    return (
        <Carousel
            opts={{
                align: "start",
                loop: false,
            }}
            className="w-full mt-7"
        >
            <CarouselContent>
                {resources.map((res) => (
                    <CarouselItem key={res.id} className="basis-1/1 md:basis-1/3">
                        <ResourceCard resource={res} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious size="icon-lg" className="-top-14" />
            <CarouselNext size="icon-lg" className="-top-14" />
        </Carousel>
    );
}
