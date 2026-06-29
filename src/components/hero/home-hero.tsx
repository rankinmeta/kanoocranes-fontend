"use client";

import { useEffect, useState, useRef } from "react";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "../ui/carousel";
import { HomeHeroProps } from "@/type";
import { getImage } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "../ui/button";
import HighlightCard from "../pages/home/highlight-card";

const HomeHero = ({ hero }: Readonly<{ hero: HomeHeroProps }>) => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    const plugin = useRef(
        Autoplay({
            delay: 5000,
            stopOnInteraction: false,
        })
    );

    useEffect(() => {
        if (!api) return;

        setCurrent(api.selectedScrollSnap());

        api.on("select", () => {
            videoRefs.current.map((video, index) => {
                if (index === api.selectedScrollSnap()) {
                    video?.play();
                } else {
                    video?.pause();
                }
            });
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    const isMobile = useMediaQuery("(max-width: 768px)");

    useEffect(() => {
        const initialPlaying: { [key: number]: boolean } = {};
        const initialMuted: { [key: number]: boolean } = {};
        hero.background?.forEach((_, idx) => {
            initialPlaying[idx] = true;
            initialMuted[idx] = true;
        });
    }, [hero]);

    if (!hero || hero.background.length === 0) return null;

    return (
        <section className="relative w-full -mt-26 z-60 h-176 min-h-screen bg-black text-white">
            <Carousel
                setApi={setApi}
                opts={{
                    watchDrag: false,
                    loop: true,
                }}
                plugins={[plugin.current]}
                className="size-full relative"
            >
                <CarouselContent className="ml-0">
                    {hero.background.map((data, index) => {
                        if (data.type === "video") {
                            videoRefs.current[index] ??= null;
                        }

                        return (
                            <CarouselItem
                                key={index}
                                className="h-176 min-h-screen pl-0"
                            >
                                <div
                                    className="relative flex flex-col justify-center items-center h-full bg-no-repeat bg-center bg-cover after:bottom-0 after:left-0 after:right-0 after:h-full lg:after:h-9/12 after:bg-linear-to-t after:from-black/80 after:to-transparent after:absolute before:absolute before:top-0 before:h-44 before:left-0 before:right-0 before:bg-linear-to-b before:from-black/80 before:to-transparent gap-32 pb-10"
                                    style={
                                        data.type === "image"
                                            ? {
                                                  backgroundImage: `url(${getImage(
                                                      {
                                                          local: isMobile
                                                              ? "/local/hero-res.png"
                                                              : "/local/hero.jpg",
                                                          prod:
                                                              isMobile &&
                                                              data
                                                                  .responsive_image
                                                                  ?.url
                                                                  ? data
                                                                        .responsive_image
                                                                        ?.url
                                                                  : data
                                                                        .background
                                                                        ?.url,
                                                      }
                                                  )})`,
                                              }
                                            : {}
                                    }
                                >
                                    {data.type === "video" && (
                                        <video
                                            src={getImage({
                                                local: "/local/dummy.webm",
                                                prod: data.background?.url,
                                            })}
                                            ref={(el) => {
                                                videoRefs.current[index] = el;
                                            }}
                                            autoPlay
                                            muted
                                            controls={false}
                                            playsInline
                                            className="absolute inset-0 size-full object-cover pointer-events-none"
                                            onEnded={() => {
                                                if (api) {
                                                    if (
                                                        index ===
                                                        hero.background.length -
                                                            1
                                                    ) {
                                                        api.scrollTo(0);
                                                        videoRefs.current[0]?.play();
                                                    } else {
                                                        api.scrollNext();
                                                        videoRefs.current[
                                                            index + 1
                                                        ]?.play();
                                                    }
                                                }
                                            }}
                                        ></video>
                                    )}
                                </div>
                            </CarouselItem>
                        );
                    })}
                </CarouselContent>

                <div className="absolute right-0 top-1/2 -translate-y-1/2 mx-10 hidden lg:flex flex-col gap-1 items-center text-sm font-manrope">
                    <span>{String(current + 1).padStart(2, "0")}</span>
                    <div className="h-20 w-1.5 bg-white/10 rounded-md">
                        <div
                            style={{
                                height: `${100 / hero.background.length}%`,
                                transform: `translateY(${current * 100}%)`,
                            }}
                            className="w-1.5 bg-white rounded-md"
                        ></div>
                    </div>
                    <span>
                        {String(hero.background.length).padStart(2, "0")}
                    </span>
                </div>
            </Carousel>
            <div className="absolute inset-0 flex flex-col lg:flex-row lg:items-end justify-end lg:justify-start gap-10 lg:gap-0 container container-padding-x py-14">
                <div className="max-w-xl space-y-3">
                    <h1 className="text-[42px] font-manrope leading-12">
                        Engineering crane solutions for industrial & rentals
                    </h1>
                    <p className="font-inter text-sm tracking-[-1%] leading-5">
                        Trusted by industries across the region, Kanoo Cranes
                        delivers high-performance lifting solutions backed by
                        engineering expertise, fast deployment, and reliable
                        rental support.
                    </p>

                    <div className="space-x-3 mt-8">
                        <Button>Get quote</Button>
                        <Button variant={"white"}>Find Your Crane</Button>
                    </div>
                </div>

                <div className="ms-auto w-full lg:w-100">
                    <HighlightCard highlights={hero.highlights} />
                </div>
            </div>
        </section>
    );
};

export default HomeHero;
