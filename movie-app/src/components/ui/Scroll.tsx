"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ScrollItem } from "./ScrollItem";

interface ScrollData {
  data: any;
}

export const Scroll: React.FC<ScrollData> = ({ data }) => {
  return (
    <div className="w-full h-[900px] flex items-center justify-center">
      <Carousel className="w-[80%] flex justify-center  ">
        <CarouselContent className="z-10">
          {data.slice(0, 5).map(
            (
              movie: {
                original_title: string;
                vote_average: number;
                backdrop_path: any;
                overview: string;
              },
              index: React.Key | null | undefined
            ) => (
              <CarouselItem key={index} className="w-[1800px] h-[900px]">
                <ScrollItem
                  trailer="https://youtu.be/6COmYeLsz4c?si=wWfINKdz7VTG0-KO"
                  img={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  name={movie.original_title}
                  imdb={movie.vote_average}
                  desc={movie.overview}
                />
              </CarouselItem>
            )
          )}
        </CarouselContent>
        <CarouselPrevious className="z-30" />
        <CarouselNext className="z-30" />
      </Carousel>
    </div>
  );
};
