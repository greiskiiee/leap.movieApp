"use client";
import { MovieGenre } from "@/components/ui/MovieGenre";
import { Navigation } from "@/components/ui/Navigation";
import { StaffInfo } from "@/components/ui/StaffInfo";
import axios from "axios";
import { log } from "console";
import { useParams } from "next/navigation";
import React, { Key, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

export default function Detail() {
  const { movieId } = useParams();
  const [genreData, setGenre] = useState([]);
  const [movie, setMovie] = useState<{
    original_title: string;
    vote_average: number;
    poster_path: string;
    backdrop_path?: string;
    id: number;
    runtime: number;
    release_date?: string;
    genres?: {
      id: Key | null | undefined;
      name: string;
    }[];
    overview?: string;
    vote_count?: number;
  }>({
    original_title: "",
    vote_average: 0,
    poster_path: "",
    id: 0,
    runtime: 0,
  });
  const promiseGenre = axios.get(
    `https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=d67d8bebd0f4ff345f6505c99e9d0289`
  );
  const promiseMovie = axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=d67d8bebd0f4ff345f6505c99e9d0289`
  );

  useEffect(() => {
    Promise.all([promiseGenre, promiseMovie]).then(([res1, res2]) => {
      setGenre(res1.data.genres);
      setMovie(res2.data);
    });
  }, [movieId]);

  // const runtime = movie.runtime;
  const hours = Math.floor(movie.runtime / 60);
  const minutes = movie.runtime % 60;

  return (
    <div className="w-screen h-[1600px] flex flex-col min-h-screen gap-[32px] items-center">
      <Navigation genreData={genreData} />

      <div className="w-[1080px] h-fit flex flex-col justify-start items-center  gap-6">
        <div className="w-full h-fit flex flex-col justify-center items-center gap-6">
          {/* movie title */}
          <div className="w-full h-fit">
            <div className="w-full h-fit flex justify-between items-center">
              <div className="w-fit h-full flex flex-col gap-1">
                <p className="inter font-[700] text-[36px] text-[#09090B]">
                  {movie.original_title}
                </p>
                <p className="inter font-[400] text-[18px] text-[#09090B]">
                  {movie.release_date} · PG · {hours}h {minutes}m
                </p>
              </div>

              <div className="flex flex-col w-fit h-full justify-start items-start gap-1">
                <p className="inter font-[500] text-[12px] text-[#09090B]">
                  Rating
                </p>

                <div className="w-full h-[48px] flex gap-[4px]">
                  <FaStar size={28} fill="#FDE047" />
                  <div className="flex flex-col justify-start items-start">
                    <p className="inter font-[600] text-[18px] text-[#09090B]">
                      {movie.vote_average}
                      <span className="inter font-[400] text-[16px] text-[#71717A]">
                        /10
                      </span>
                    </p>
                    <p className="inter font-[400] text-[12px] text-[#71717A]">
                      {movie.vote_count}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* movie posters */}
          <div className="w-full h-[428px] md-[428px] flex justify-between items-center">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt="img1"
              className="rounded-sm h-full w-[290px]"
            />
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt="poster2"
              className="rounded-sm h-full w-[760px]"
            />
          </div>
        </div>

        {/* movie description */}
        <div className="flex flex-col w-full h-fit gap-5 items-center justify-start">
          <div className="w-full h-fit flex gap-[10px] items-center justify-start">
            {movie.genres?.map((genre) => {
              return <MovieGenre genreName={genre.name} key={genre.id} />;
            })}
            {/* <MovieGenre genreName="Fairy Tale" />
            <MovieGenre genreName="Pop Musical" /> */}
          </div>

          <p className="w-full text-[16px] font-[400] inter text-[#09090B]">
            {movie.overview}
          </p>

          <div className="flex flex-col w-full h-fit justify-center items-center gap-5">
            <StaffInfo role="Director" who="Jon M. Chu" />
            <StaffInfo
              role="Writers"
              who="Winnie Holzman ·  Dana Fox · Gregory Maguire"
            />
            <StaffInfo
              role="Stars"
              who="Cynthia Erivo ·  Ariana Grande · Jeff Goldblum"
            />
          </div>

          {/* <MovieList title="More Like This" /> */}
        </div>
      </div>
    </div>
  );
}
