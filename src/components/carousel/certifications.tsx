import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { StrapiImage } from "../common/strapi-image";

export function CertificationsCarousel() {
    return (
        <Carousel
            opts={{
                align: "start",
                loop: false,
            }}
            className="w-full mt-7"
        >
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="basis-1/1 md:basis-1/3 lg:basis-1/4">
                        <div className="space-y-2">
                            <div className="bg-[#F5F5F5] flex items-center justify-center w-full aspect-video">
                                <StrapiImage
                                    src={`http://localhost:3000/local/certi${
                                        index + 1
                                    }.webp`}
                                    alt="Cert"
                                    width={100}
                                    height={100}
                                    className="object-cover"
                                />
                            </div>

                            <h5 className="text-xl font-semibold text-primary font-manrope">
                                ISO 9001
                            </h5>
                            <span className="font-medium">
                                Quality Management
                            </span>
                            <p className="text-sm mt-2">
                                Committed to delivering consistent service
                                excellence and operational efficiency.
                            </p>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious size="icon-lg" className="-top-14" />
            <CarouselNext size="icon-lg" className="-top-14" />
        </Carousel>
    );
}
