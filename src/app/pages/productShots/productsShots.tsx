"use client"

import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import React from "react";

export default function ProductShots() {
    const autoplayOptions = React.useRef(
      Autoplay({
        delay: 4000,
        stopOnInteraction: true,
      }))


    return (
       <section>
            <div className="flex flex-col justify-center items-center text-center mt-20">
                <h1 className="text-lg font-bold md:text-3xl">Product Shots</h1>
                <p className="text-[8px] text-gray-400 md:text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia aliquid consequatur?</p>
            </div>

            <div className="flex justify-center items-center mt-10">
                <Carousel 
                    className="w-3/5 mt-10 md:w-full"
                    plugins={[autoplayOptions.current]}
                    opts={{
                        loop: true,
                        align: "start",
                    }}>
                    <CarouselContent className="-ml-4">
                        {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="pl-4 basis-1/3 md:basis-1/2 lg:basis-1/3">
                            <div className="">
                            <Card>
                                <CardContent className="flex md:h-[300px] shadow-xl  items-center justify-center p-5">
                                <span className="text-2xl font-semibold">{index + 1}</span>
                                </CardContent>
                            </Card>
                            </div>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
            <hr className="mt-32"/>
       </section>
    )}