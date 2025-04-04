"use client";
import { MoviebyCategory } from "@/components/ui/MoviebyCategory";
import { MovieGenre } from "@/components/ui/MovieGenre";
import { Navigation } from "@/components/ui/Navigation";
import { DetailSkeleton } from "@/components/ui/skeletons/DetailSkeleton";
import { StaffInfo } from "@/components/ui/StaffInfo";
import { axiosInstance } from "@/lib/utils";
import { Fullscreen, Play, Target } from "lucide-react";
import { useParams } from "next/navigation";
import React, { Key, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const BASE_URL = "https://image.tmdb.org/t/p/original";
const YT_BASE = "https://www.youtube.com/watch?v=";

export const DetailTest = () => {
  const [genreData, setGenre] = useState([]);
  const [similarData, setSimilar] = useState([]);
  const [trailer, setTrailer] = useState<{ key: string }>({ key: "" });
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

  const { movieId: paramMovieId } = useParams();
  const movieIdNumber = paramMovieId ? Number(paramMovieId) : 0;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [res1, res2, res3, res4, res5] = await Promise.all([
          axiosInstance.get(`genre/movie/list?language=en&`),
          axiosInstance.get(`movie/${movieIdNumber}?language=en-US&`),
          axiosInstance.get(
            `movie/${movieIdNumber}/similar?language=en-US&page=1&`
          ),
          axiosInstance.get(`movie/${movieIdNumber}/credits?language=en-US`),
          axiosInstance.get(`movie/${movieIdNumber}/videos?language=en-US`),
        ]);

        setGenre(res1.data.genres);
        setMovie(res2.data);
        setSimilar(res3.data.results);
        setCrewData(res4.data.crew);
        setCastData(res4.data.cast);

        const trailerVideo = res5.data.results.find(
          (vid: { type: string; site: string }) =>
            vid.type === "Trailer" && vid.site === "YouTube"
        );

        setTrailer(trailerVideo ? { key: trailerVideo.key } : { key: "" });
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, [movieIdNumber]);

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

  const [showTrailer, setShowTrailer] = useState(false);

  const handleTrailer = () => {
    setShowTrailer(true);
  };

  // const handleTrailer = (key: string) => {
  //   console.log("working");
  //   return (
  //     <video width={500} height={400}>
  //       <source src={`${YT_BASE}${key}`} type="video" />
  //     </video>
  //   );
  // };
  if (movie.id === 0) return <DetailSkeleton />;

  return (
    <div className="w-screen flex flex-col min-h-screen gap-[32px] items-center pb-16">
      <Navigation genreData={genreData} />

      <div className="w-[80%] h-fit flex flex-col justify-start items-center gap-6">
        <div className="w-full h-fit flex flex-col justify-center items-center gap-6">
          {/* movie title and rating */}
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

          {/* movie posters */}
          <div className="w-full h-fit md:h-[428px] flex justify-between items-center relative 2xl:h-[620px] xl:h-[520px]">
            <img
              src={`${BASE_URL}${movie.poster_path}`}
              alt="img1"
              className="rounded-sm w-[30%] h-full"
            />
            <div className="relative w-[65%] h-full">
              <img
                src={`${BASE_URL}${movie.backdrop_path}`}
                alt="poster2"
                className="rounded-sm w-full h-full"
              />
              <a
                className="absolute bottom-6 left-6 z-70 flex justify-start items-center gap-3"
                // href={`${YT_BASE}${trailer.key}`}
                target="__blank"
                onClick={handleTrailer}
              >
                <div className="rounded-full h-[40px] w-[40px] bg-[#fff] flex justify-center items-center">
                  <Play strokeWidth={1} />
                </div>
                <span className="inter text-[16px] font-[400] text-white">
                  Play Trailer
                </span>
              </a>
              {showTrailer && (
                <div className="absolute z-80 inset-0 flex justify-center items-center bg-black bg-opacity-70">
                  <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* movie description */}
        <div className="flex flex-col w-full h-fit gap-5 items-center justify-start text-justify">
          <div className="w-full h-fit flex gap-[10px] items-center justify-start">
            {movie.genres?.map((genre) => {
              return <MovieGenre genreName={genre.name} key={genre.id} />;
            })}
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
    </div>
  );
};
