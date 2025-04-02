"use client";
import { MovieList } from "@/components/ui/MovieList";
import { Navigation } from "@/components/ui/Navigation";
import { axiosInstance } from "@/lib/utils";
import { ChevronRight, X } from "lucide-react";
import { useParams } from "next/navigation";
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

const fetchMovies = async (searchQuery: string) => {
  try {
    const urls = [
      `search/movie?query=${searchQuery}&language=en-US&page=1&`,
      `genre/movie/list?language=en&`,
    ];
    const [search, genres] = await Promise.all(
      urls.map((url) => axiosInstance.get(url))
    );
    return {
      search: search.data.results,
      genres: genres.data.genres,
    };
  } catch (error) {
    console.error("Error fetching movies:", error);
    return { search: [], genres: [] };
  }
};

export default function Detail() {
  const { searchQuery } = useParams() as { searchQuery?: string };
  const [genreData, setGenre] = useState<Genre[]>([]);
  const [searchData, setSearchData] = useState<Movie[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<number[]>([]);
  useEffect(() => {
    if (searchQuery) {
      fetchMovies(searchQuery).then((data) => {
        setSearchData(data.search);
        setGenre(data.genres);
      });
    }
  }, [searchQuery]);

  const handleFilter = (genreId: number) => {
    if (selectedGenre.includes(genreId)) {
      setSelectedGenre(selectedGenre.filter((id) => id !== genreId));
    } else {
      setSelectedGenre([...selectedGenre, genreId]);
    }
  };

  const filteredMovies = selectedGenre.length
    ? searchData.filter((movie) =>
        selectedGenre.some((id) => movie.genre_ids.includes(id))
      )
    : searchData;

  return (
    <div className="w-screen flex flex-col min-h-screen gap-8 items-center pb-16">
      <Navigation genreData={genreData} />

      <div className="w-[80%] h-fit flex flex-col justify-start items-center gap-6">
        <div className="w-full h-fit flex justify-start items-center gap-6 ">
          <p className="text-[30px] inter font-[600] text-[#09090B]">
            Search Results
          </p>
        </div>

        <div className="flex w-full h-fit justify-between items-start gap-6 ">
          <MovieList data={filteredMovies} className="p-0" />

          <div className="h-fit lg:w-[400px]">
            <div className="flex flex-col">
              <p className="text-[#09090B] text-[24px] font-[600] inter">
                Search by Genre
              </p>
              <p className="text-[#09090B] text-[16px] font-[400] inter">
                See lists of movies by genre
              </p>
            </div>
            <div className="w-full h-[33px] flex justify-center items-center">
              <div className="w-full bg-[#E4E4E7] h-[1px]"></div>
            </div>
            <div className="max-w-[500px] h-fit flex justify-start items-start flex-wrap gap-4 ">
              {genreData.map((genre: { name: string; id: number }) => {
                return (
                  <div
                    className={`rounded-full ${
                      selectedGenre.includes(genre.id) ? "border-2" : "border-0"
                    }`}
                    key={genre.id}
                    onClick={() => {
                      handleFilter(genre.id);
                    }}
                  >
                    <div className="flex h-[20px] w-fit rounded-full justify-center items-center py-[2px] pr-1 pl-[10px] gap-2 border-1 border-[#E4E4E7] focus:shadow-md text-[12px] inter font-[600] text-[#09090B]">
                      {genre.name}
                      {selectedGenre.includes(genre.id) ? (
                        <X size={16} strokeWidth={2} color="#09090B" />
                      ) : (
                        <ChevronRight
                          size={16}
                          strokeWidth={1}
                          color="#09090B"
                        />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
