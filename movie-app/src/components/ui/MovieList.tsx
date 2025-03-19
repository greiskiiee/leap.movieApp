"use client";
import React, { useEffect, useState } from "react";
import { SeeMoreButton } from "./SeeMoreButton";
import { MovieCard } from "./MovieCard";

import axios from "axios";

interface MovieListProps {
  title: string;
  data: any;
}
export const MovieList: React.FC<MovieListProps> = ({ title, data }) => {
  // const [movieData, setData] = useState<{ results: any[] }>({ results: [] });
  // useEffect(() => {
  //   axios.get(api).then((res) => setData(res.data));
  // }, [api]);

  return (
    <div className="w-[80%] h-[978px] px-[80px] flex flex-col gap-[32px]">
      <div className="w-full h-[36px] flex justify-between items-center">
        <p className="inter text-[24px] font-[600] text-[#09090B]">{title}</p>
        <SeeMoreButton />
      </div>

      <div className="grid grid-cols-5 grid-rows-2 gap-8 place-items-center">
        {data.slice(0, 10).map(
          (
            movie: {
              original_title: string;
              vote_average: number;
              poster_path: any;
            },
            index: React.Key | null | undefined
          ) => (
            <MovieCard
              key={index}
              title={movie.original_title}
              imdb={movie.vote_average}
              img={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            />
          )
        )}
      </div>
    </div>
  );
};
