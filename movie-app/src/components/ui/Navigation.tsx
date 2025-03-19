"use client";
import React, { useEffect, useState } from "react";
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
import axios from "axios";

export const Navigation = () => {
  const [genreData, setGenre] = useState<{ genres: any[] }>({ genres: [] });

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=d67d8bebd0f4ff345f6505c99e9d0289`
      )
      .then((res) => setGenre(res.data));
  }, []);

  console.log(genreData);

  genreData.genres.map((value) => {
    console.log(value);
  });

  return (
    <div className="w-[80%] h-[59px] flex items-center justify-center mb-[1px] mt-4">
      <div className="w-full h-[36px] flex justify-between items-center ">
        <div className="w-[92px] h-[36px] flex gap-[8px] justify-center items-center">
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
                <NavigationMenuTrigger className="text-[14px] border-1 border-[#E4E4E7]">
                  Genre
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-5 ">
                  <div className="flex flex-col">
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
                    {genreData.genres.map((value) => {
                      return (
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-[20px] w-fit justify-center items-center py-[2px] pr-1 pl-[10px] gap-2 rounded-full border-1 border-[#E4E4E7] focus:shadow-md"
                            href="/"
                          >
                            <div className=" flex justify-center items-center text-[12px] inter font-[600] rounded-full text-[#09090B]">
                              {value.name}

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
          <div className="w-[379px] h-[36px] border-1 border-[#E4E4E7] rounded-md flex items-center justify-start px-[12px] gap-[10px]">
            <CiSearch size={16} className="opacity-50" />
            <input type="text" placeholder="Search.." className="text-[14px]" />
          </div>
        </div>

        <div className="w-[36px] h-[36px] flex justify-center items-center border-1 border-[#E4E4E7] shadow-sm rounded-md">
          <Moon size={20} strokeWidth="1" />
        </div>
      </div>
    </div>
  );
};
