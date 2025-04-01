"use client";
import { Footer } from "@/components/ui/Footer";
import { MovieList } from "@/components/ui/MovieList";
import { Navigation } from "@/components/ui/Navigation";
import { axiosInstance } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

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
  const [genreData, setGenre] = useState([]);
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    if (searchQuery) {
      fetchMovies(searchQuery).then((data) => {
        setSearchData(data.search);
        setGenre(data.genres);
      });
    }
  }, [searchQuery]);

  console.log(genreData);

  return (
    <div className="w-screen h-[1600px] flex flex-col min-h-screen gap-[32px] items-center">
      <Navigation genreData={genreData} />

      <div className="w-[80%] h-fit flex flex-col justify-start items-center gap-6">
        <div className="w-full h-fit flex justify-start items-center gap-6 ">
          <p className="text-[30px] inter font-[600] text-[#09090B]">
            Search Results
          </p>
        </div>

        <div className="flex w-full h-fit justify-between items-start ">
          <MovieList data={searchData} className="p-0" />

          <div className=" h-fit">
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
            <div className="w-[500px] h-fit flex justify-start items-start flex-wrap gap-4 ">
              {genreData.map((genre: { name: string; id: number }) => {
                return (
                  <div className="rounded-full" key={genre.id}>
                    <a
                      className="flex h-[20px] w-fit rounded-full justify-center items-center py-[2px] pr-1 pl-[10px] gap-2 border-1 border-[#E4E4E7] focus:shadow-md"
                      href="/"
                    >
                      <div className="w-full flex justify-center items-center text-[12px] inter font-[600] text-[#09090B]">
                        {genre.name}
                        <ChevronRight
                          size={16}
                          strokeWidth={1}
                          color="#09090B"
                        />
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
