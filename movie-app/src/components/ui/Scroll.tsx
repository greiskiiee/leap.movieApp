import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ScrollItem } from "./ScrollItem";

export const Scroll = () => {
  return (
    <div className="w-full h-[800px] flex items-center justify-center">
      <Carousel className="w-full flex justify-center absolute">
        <CarouselContent className="z-10">
          <CarouselItem className="w-screen h-[800px]">
            <ScrollItem
              img="wicked.jpeg"
              name={"Wicked"}
              imdb={6.9}
              desc={
                "Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads."
              }
            />
          </CarouselItem>
          <CarouselItem>
            <ScrollItem
              img="glad.png"
              name={"Wicked"}
              imdb={6.9}
              desc={
                "Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads."
              }
            />
          </CarouselItem>
          <CarouselItem>
            <ScrollItem
              img="moana.jpeg"
              name={"Wicked"}
              imdb={6.9}
              desc={
                "Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads."
              }
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="z-30" />
        <CarouselNext className="z-30" />
      </Carousel>
    </div>
  );
};
