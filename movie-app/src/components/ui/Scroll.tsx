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
    <div className="w-full h-[900px] flex items-center justify-center">
      <Carousel className="w-[1880px] flex justify-center  ">
        <CarouselContent className="z-10">
          <CarouselItem className="w-[1800px] h-[900px]">
            <ScrollItem
              trailer="https://youtu.be/6COmYeLsz4c?si=wWfINKdz7VTG0-KO"
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
              trailer="https://youtu.be/4rgYUipGJNo?si=qWhYAJi1BpJc_cSo"
              img="glad.png"
              name={"Gladiator II"}
              imdb={6.9}
              desc={
                "After his home is conquered by the tyrannical emperors who now lead Rome, Lucius is forced to enter the Colosseum and must look to his past to find strength to return the glory of Rome to its people."
              }
            />
          </CarouselItem>
          <CarouselItem>
            <ScrollItem
              trailer="https://youtu.be/hDZ7y8RP5HE?si=Cq5Axr4S5plkH3pn"
              img="moana.jpeg"
              name={"Moana 2"}
              imdb={6.9}
              desc={
                "After receiving an unexpected call from her wayfinding ancestors, Moana must journey to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she's ever faced."
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
