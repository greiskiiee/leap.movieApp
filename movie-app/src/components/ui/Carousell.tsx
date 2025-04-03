"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CarousellItem } from "./CarousellItem";
import { useEffect, useState } from "react";
import { axiosInstance } from "@/lib/utils";

interface CarousellData {
  data: {
    original_title: string;
    vote_average: number;
    backdrop_path: string;
    overview: string;
    id: number;
  }[];
}

export const Carousell: React.FC<CarousellData> = ({ data }) => {
  const [trailers, setTrailers] = useState<{ [key: number]: string }>({});

  useEffect(() => {
    const fetchTrailers = async () => {
      const trailerMap: { [key: number]: string } = {};

      await Promise.all(
        data.slice(0, 5).map(async (movie) => {
          try {
            const res = await axiosInstance.get(
              `movie/${movie.id}/videos?language=en-US`
            );
            const trailer = res.data.results.find(
              (vid: { type: string; site: string }) =>
                vid.type === "Trailer" && vid.site === "YouTube"
            );
            if (trailer) {
              trailerMap[movie.id] = trailer.key;
            }
          } catch (err) {
            console.log(`Error fetching trailer for movie ${movie.id}`, err);
          }
        })
      );

      setTrailers(trailerMap);
    };

    fetchTrailers();
  }, [data]);
  return (
    <div className="w-full h-[800px] flex items-center justify-center lg:h-[700px]">
      <Carousel className="w-[80%] flex justify-center bg-transparent h-full">
        <CarouselPrevious className="z-50 left-[50px]" />
        <CarouselNext className="z-50 right-[50px]" />
        <CarouselContent className="z-10 w-full left-0 top-0 bg-transparent ">
          {data.slice(0, 5).map((movie) => (
            <CarouselItem key={movie.id} className="w-[1720px] h-[900px] flex ">
              <CarousellItem
                trailer={trailers[movie.id]}
                img={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                name={movie.original_title}
                imdb={movie.vote_average}
                desc={movie.overview}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
