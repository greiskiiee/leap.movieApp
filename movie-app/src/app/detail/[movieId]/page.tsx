"use client";
import { Footer } from "@/components/ui/Footer";
import { MoviebyCategory } from "@/components/ui/MoviebyCategory";
import { MovieGenre } from "@/components/ui/MovieGenre";
import { Navigation } from "@/components/ui/Navigation";
import { StaffInfo } from "@/components/ui/StaffInfo";
import { axiosInstance } from "@/lib/utils";
import { log } from "console";
import { Dirent } from "fs";
import { useParams } from "next/navigation";
import React, { Key, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const BASE_URL = "https://image.tmdb.org/t/p/original";

export default function Detail() {
  const { movieId } = useParams();
  const [genreData, setGenre] = useState([]);
  const [similarData, setSimilar] = useState([]);
  const [castData, setCastData] = useState<
    {
      known_for_department: string;
      name: string;
    }[]
  >([]);
  const [crewData, setCrewData] = useState<
    {
      job: string;
      department: string;
      name: string;
    }[]
  >([]);

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
  const promiseGenre = axiosInstance.get(`genre/movie/list?language=en&`);
  const promiseMovie = axiosInstance.get(`movie/${movieId}?language=en-US&`);
  const promiseSimilar = axiosInstance.get(
    `movie/${movieId}/similar?language=en-US&page=1&`
  );
  const promiseCrew = axiosInstance.get(
    `movie/${movieId}/credits?language=en-US`
  );

  useEffect(() => {
    Promise.all([promiseGenre, promiseMovie, promiseSimilar, promiseCrew]).then(
      ([res1, res2, res3, res4]) => {
        setGenre(res1.data.genres);
        setMovie(res2.data);
        setSimilar(res3.data.results);
        setCrewData(res4.data.crew);
        setCastData(res4.data.cast);
      }
    );
  }, [movieId]);

  const hours = Math.floor(movie.runtime / 60);
  const minutes = movie.runtime % 60;

  const director = crewData
    .filter((person) => person.job === "Director")
    .map((d) => d.name)
    .join(", ");
  const writers = crewData
    .filter((person) => person.department === "Writing")
    .slice(0, 3)
    .map((w) => w.name)
    .join(" · ");
  const actors = castData
    .slice(0, 3)
    .map((a) => a.name)
    .join(" · ");

  console.log(director, writers, actors);
  return (
    <div className="w-screen h-[1600px] flex flex-col min-h-screen gap-[32px] items-center">
      <Navigation genreData={genreData} />

      <div className="w-[80%] h-fit flex flex-col justify-start items-center gap-6">
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
          <div className="w-full h-fit md-[428px] flex justify-between items-center">
            <img
              src={`${BASE_URL}${movie.poster_path}`}
              alt="img1"
              className="rounded-sm w-[30%]"
            />
            <img
              src={`${BASE_URL}${movie.backdrop_path}`}
              alt="poster2"
              className="rounded-sm w-[65%] h-full"
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
            <StaffInfo role="Director" who={director} />
            <StaffInfo role="Writers" who={writers} />
            <StaffInfo role="Stars" who={actors} />
          </div>
        </div>
      </div>
      <MoviebyCategory title={"More Like This"} data={similarData} slice={5} />

      <Footer />
    </div>
  );
}
