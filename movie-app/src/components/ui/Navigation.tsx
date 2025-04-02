"use client";
import React, { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { ChevronRight, Film, Moon } from "lucide-react";
import { Popover, PopoverContent } from "./popover";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { Button } from "@/components/ui/button";
import { SearchItem } from "./SearchItem";
import { useRouter } from "next/navigation";
import axios from "axios";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./command";
import { Input } from "./input";

const API_KEY = "d67d8bebd0f4ff345f6505c99e9d0289";
const BASE_URL = "https://api.themoviedb.org/3";

interface NavProps {
  genreData: any;
}

const fetchMovies = async (searchQuery: string) => {
  try {
    const url = `${BASE_URL}/search/movie?query=${searchQuery}&language=en-US&page=1&api_key=${API_KEY}`;
    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

export const Navigation: React.FC<NavProps> = ({ genreData }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchData, setSearchData] = useState([]);
  const homePage = useRouter();

  const onClick = () => {
    homePage.push("/");
  };

  const handleSearch = () => {
    setSearchQuery(inputRef.current!.value);
  };

  useEffect(() => {
    if (searchQuery) {
      fetchMovies(searchQuery).then((data) => {
        setSearchData(data);
      });
    }
  }, [searchQuery]);

  const router = useRouter();

  const handleClickDetail = (id: number) => {
    router.push(`/detail/${id}`);
  };

  const handleClickSearch = (searchQuery: string) => {
    router.push(`/search/${searchQuery}`);
  };

  const toFilter = () => router.push(`/filter/`);

  return (
    <div className="w-[80%] h-[59px] flex items-center justify-center mb-[1px] mt-4">
      <div className="w-full h-[36px] flex justify-between items-center ">
        <div
          className="w-[92px] h-[36px] flex gap-[8px] justify-center items-center"
          onClick={onClick}
        >
          <Film size={20} color="#4338CA" strokeWidth={1} />
          <p className="inter italic font-[700] text-[#4338CA] text-[16px]">
            {" "}
            Movie Z
          </p>
        </div>

        <div className="w-fit h-[36px] flex justify-center items-center gap-[12px]">
          <NavigationMenu className="h-[36px]">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-[14px] border border-[#E4E4E7]">
                  Genre
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-5 ">
                  <div className="flex flex-col" onClick={toFilter}>
                    <p className="text-[#09090B] text-[24px] font-[600] inter">
                      Genre
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
                        <NavigationMenuLink
                          asChild
                          className="rounded-full"
                          key={genre.id}
                        >
                          <a
                            className="flex h-[20px] w-fit justify-center items-center py-[2px] pr-1 pl-[10px] gap-2 border-1 border-[#E4E4E7] focus:shadow-md"
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
                        </NavigationMenuLink>
                      );
                    })}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="w-[539px] h-[36px] ">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full h-full border-1 border-[#E4E4E7] rounded-md flex items-center justify-start px-[12px] gap-[10px]"
                >
                  <CiSearch size={16} className="opacity-50" />
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search.."
                    className="text-[14px] outline-0 w-full"
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  />
                </Button>
              </PopoverTrigger>

              <PopoverContent className="w-[577px] mt-2 overflow-scroll max-h-[500px] h-fit">
                <div className="flex flex-col gap-1">
                  <div className="flex flex-col h-[420px] overflow-scroll">
                    {searchData.slice(0, 10).map(
                      (
                        movie: {
                          original_title: string;
                          vote_average: number;
                          poster_path: string;
                          id: number;
                          release_date: string;
                        },
                        idx
                      ) => {
                        return (
                          <div key={idx}>
                            <SearchItem
                              name={movie.original_title}
                              rate={movie.vote_average}
                              img_path={movie.poster_path}
                              date={movie.release_date.split("-")[0]}
                              onClick={() => {
                                handleClickDetail(movie.id);
                              }}
                            />
                            <div className="w-full h-[17px] flex justify-center items-center">
                              <div className="w-full bg-[#E4E4E7] h-[1px]"></div>
                            </div>
                          </div>
                        );
                      }
                    )}
                  </div>

                  <div
                    className="w-fit h-[40px] flex justify-center items-center py-[8px] px-[16px] "
                    onClick={() => handleClickSearch(searchQuery)}
                  >
                    <p className="inter font-[500] text-[14px] text-[#09090B]">
                      See all results for {searchQuery}
                    </p>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="w-[36px] h-[36px] flex justify-center items-center border-1 border-[#E4E4E7] shadow-sm rounded-md">
          <Moon size={20} strokeWidth="1" />
        </div>
      </div>
    </div>
  );
};
