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

interface NavProps {
  genreData: any;
}

export const Navigation: React.FC<NavProps> = ({ genreData }) => {
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
                <NavigationMenuTrigger className="text-[14px] border border-[#E4E4E7]">
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
          <div className="w-[379px] h-[36px] border-1 border-[#E4E4E7] rounded-md flex items-center justify-start px-[12px] gap-[10px]">
            <CiSearch size={16} className="opacity-50" />
            <input
              type="text"
              placeholder="Search.."
              className="text-[14px] outline-0 w-full"
            />
          </div>
        </div>

        <div className="w-[36px] h-[36px] flex justify-center items-center border-1 border-[#E4E4E7] shadow-sm rounded-md">
          <Moon size={20} strokeWidth="1" />
        </div>
      </div>
    </div>
  );
};
