import React from "react";
import { CiSearch } from "react-icons/ci";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Film, Moon } from "lucide-react";

export const Navigation = () => {
  return (
    <div className="w-screen h-[59px] flex items-center justify-center mb-[1px]">
      <div className="w-[1280px] h-[36px] flex justify-between items-center ">
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
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            shadcn/ui
                          </div>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <a href="/docs" title="Introduction">
                      Re-usable components built using Radix UI and Tailwind
                      CSS.
                    </a>
                  </ul>
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
