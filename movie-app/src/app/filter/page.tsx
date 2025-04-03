"use client";
import { MovieList } from "@/components/ui/MovieList";
import { Navigation } from "@/components/ui/Navigation";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { axiosInstance } from "@/lib/utils";
import { ChevronRight, X } from "lucide-react";
import React, { useEffect, useState } from "react";

interface Movie {
  id: number;
  title: string;
  genre_ids: number[];
}

interface Genre {
  id: number;
  name: string;
}

const TOTAL_PAGES = 10;
const fetchMovies = async (genreIds: string, page: number) => {
  try {
    const urls = [
      `discover/movie?language=en&with_genres=${genreIds}&page=${page}`,
      `genre/movie/list?language=en&`,
    ];
    const [movies, genres] = await Promise.all(
      urls.map((url) => axiosInstance.get(url))
    );
    return {
      movies: movies.data.results,
      genres: genres.data.genres,
    };
  } catch (error) {
    console.error("Error fetching movies:", error);
    return { movies: [], genres: [] };
  }
};

export default function Detail() {
  const [genreData, setGenre] = useState<Genre[]>([]);
  const [moviesData, setMoviesData] = useState<Movie[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<number[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const genreQuery = selectedGenre.length > 0 ? selectedGenre.join(",") : "";
    fetchMovies(genreQuery, page).then((data) => {
      setMoviesData(data.movies);
      setGenre(data.genres);
    });
  }, [selectedGenre, page]);

  const handleFilter = (genreId: number) => {
    setSelectedGenre((prev) =>
      prev.includes(genreId)
        ? prev.filter((id) => id !== genreId)
        : [...prev, genreId]
    );
  };

  const filteredMovies = selectedGenre.length
    ? moviesData.filter((movie) =>
        selectedGenre.some((id) => movie.genre_ids.includes(id))
      )
    : moviesData;

  return (
    <div className="w-screen flex flex-col min-h-screen gap-8 items-center pb-16">
      <Navigation genreData={genreData} />

      <div className="w-[80%] h-fit flex flex-col justify-start items-center gap-6">
        <div className="w-full h-fit flex justify-start items-center gap-6 ">
          <p className="text-[30px] inter font-[600] text-[#09090B]">
            Search Filter
          </p>
        </div>

        <div className="flex w-full h-fit justify-between items-start gap-6 ">
          <div className="h-fit lg:w-[400px] flex flex-col gap-4">
            <div className="flex flex-col">
              <p className="text-[#09090B] text-[24px] font-[600] inter">
                Genres
              </p>
              <p className="text-[#09090B] text-[16px] font-[400] inter">
                See lists of movies by genre
              </p>
            </div>

            <div className="w-[300px] max-w-[500px] h-fit flex justify-start items-start flex-wrap gap-4 ">
              {genreData.map((genre) => (
                <div
                  key={genre.id}
                  className={`rounded-full cursor-pointer ${
                    selectedGenre.includes(genre.id)
                      ? "bg-[#E4E4E7]"
                      : "border-0"
                  }`}
                  onClick={() => handleFilter(genre.id)}
                >
                  <div className="flex h-[20px] w-fit rounded-full justify-center items-center py-[2px] pr-1 pl-[10px] gap-2 border-1 border-[#E4E4E7] focus:shadow-md text-[12px] inter font-[600] text-[#09090B]">
                    {genre.name}
                    {selectedGenre.includes(genre.id) ? (
                      <X size={16} strokeWidth={2} color="#09090B" />
                    ) : (
                      <ChevronRight size={16} strokeWidth={1} color="#09090B" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-[2px] h-screen flex justify-center items-center bg-[#E4E4E7]"></div>

          <div className="flex flex-col gap-4">
            <span className="inter text-[20px] font-[600]">
              {filteredMovies.length} titles in{" "}
              {selectedGenre.length > 0
                ? genreData
                    .filter((genre) => selectedGenre.includes(genre.id))
                    .map((genre) => genre.name)
                    .join(", ")
                : "All Genres"}
            </span>

            {filteredMovies.length > 0 ? (
              <MovieList data={filteredMovies} className="justify-start" />
            ) : (
              <p className="text-gray-500">
                No movies found for the selected genre(s).
              </p>
            )}

            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                  />
                </PaginationItem>
                {[...Array(TOTAL_PAGES)].map((_, index) => (
                  <PaginationItem key={index}>
                    <PaginationLink
                      href="#"
                      onClick={() => setPage(index + 1)}
                      className={
                        page === index + 1 ? "font-bold text-blue-500" : ""
                      }
                    >
                      {index + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={() =>
                      setPage((prev) => Math.min(prev + 1, TOTAL_PAGES))
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
}
