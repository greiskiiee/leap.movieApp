import React from "react";
import { Skeleton } from "../skeleton";

export const DetailSkeleton = () => {
  return (
    <div className="w-screen flex flex-col min-h-screen gap-[32px] items-center pb-16">
      <div className="w-[80%] h-fit flex flex-col justify-start items-center gap-6">
        <div className="w-full h-fit flex flex-col justify-center items-center gap-6">
          {/* movie title and rating */}
          <div className="w-full h-fit flex justify-between items-center">
            <div className="w-fit h-fit flex flex-col justify-start items-start gap-1">
              <Skeleton className="w-[211px] h-[40px] bg-[#F4F4F5] rounded-full"></Skeleton>
              <Skeleton className="w-[237px] h-[28px] bg-[#F4F4F5] rounded-full"></Skeleton>
            </div>

            <div className="flex flex-col w-fit h-full justify-start items-start gap-1">
              <p className="inter font-[500] text-[12px] text-[#09090B]">
                Rating
              </p>

              <div className="w-full h-[48px] flex flex-col gap-[4px] pt-1">
                <Skeleton className="w-[83px] h-[20px] bg-[#F4F4F5] rounded-full"></Skeleton>
                <Skeleton className="w-[83px] h-[20px] bg-[#F4F4F5] rounded-full"></Skeleton>
              </div>
            </div>
          </div>

          {/* movie posters */}
          <div className="w-full h-fit md:h-[428px] flex justify-between ">
            <Skeleton className="w-[290px] h-[428px] bg-[#F4F4F5] rounded-sm"></Skeleton>
            <Skeleton className="w-[760px] h-[428px] bg-[#F4F4F5] rounded-sm"></Skeleton>
          </div>
        </div>

        {/* movie description */}
        <div className="flex flex-col w-full h-fit gap-5 items-start justify-start text-justify">
          <div className="flex gap-3 justify-start items-center h-fit">
            <Skeleton className="w-[77px] h-[20px] bg-[#F4F4F5] rounded-full"></Skeleton>
            <Skeleton className="w-[77px] h-[20px] bg-[#F4F4F5] rounded-full"></Skeleton>
            <Skeleton className="w-[77px] h-[20px] bg-[#F4F4F5] rounded-full"></Skeleton>
          </div>

          <div className="w-full flex flex-col gap-1">
            <Skeleton className="w-full h-[22px] bg-[#F4F4F5] rounded-full"></Skeleton>
            <Skeleton className="w-1/2 h-[22px] bg-[#F4F4F5] rounded-full"></Skeleton>
          </div>

          <div className="flex flex-col w-full h-fit gap-5">
            <div className="w-full flex flex-col gap-2">
              <div className="w-full flex gap-[53px]">
                <Skeleton className="w-[64px] h-[28px] bg-[#F4F4F5] rounded-full"></Skeleton>
                <Skeleton className="w-[137px] h-[28px] bg-[#F4F4F5] rounded-full"></Skeleton>
              </div>
              <Skeleton className="w-full h-[2px] bg-[#F4F4F5] py-1"></Skeleton>
            </div>

            <div className="w-full flex flex-col gap-2">
              <div className="w-full flex gap-[53px]">
                <Skeleton className="w-[64px] h-[28px] bg-[#F4F4F5] rounded-full"></Skeleton>
                <Skeleton className="w-[360px] h-[28px] bg-[#F4F4F5] rounded-full"></Skeleton>
              </div>
              <Skeleton className="w-full h-[2px] bg-[#F4F4F5] py-1"></Skeleton>
            </div>

            <div className="w-full flex flex-col gap-2">
              <div className="w-full flex gap-[53px]">
                <Skeleton className="w-[64px] h-[28px] bg-[#F4F4F5] rounded-full"></Skeleton>
                <Skeleton className="w-[355px] h-[28px] bg-[#F4F4F5] rounded-full"></Skeleton>
              </div>
              <Skeleton className="w-full h-[2px] bg-[#F4F4F5] py-1"></Skeleton>
            </div>
          </div>

          <div className="flex flex-col w-full h-fit gap-8">
            <div className="w-full flex justify-between items-start">
              <Skeleton className="w-[250px] h-[32px] bg-[#F4F4F5] rounded-full"></Skeleton>
              <Skeleton className="w-[165px] h-[36px] bg-[#F4F4F5] rounded-full"></Skeleton>
            </div>
            <div className="w-full flex justify-between">
              <Skeleton className="w-[190px] h-[372px] bg-[#F4F4F5] rounded-md"></Skeleton>
              <Skeleton className="w-[190px] h-[372px] bg-[#F4F4F5] rounded-md"></Skeleton>
              <Skeleton className="w-[190px] h-[372px] bg-[#F4F4F5] rounded-md"></Skeleton>
              <Skeleton className="w-[190px] h-[372px] bg-[#F4F4F5] rounded-md"></Skeleton>
              <Skeleton className="w-[190px] h-[372px] bg-[#F4F4F5] rounded-md"></Skeleton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
