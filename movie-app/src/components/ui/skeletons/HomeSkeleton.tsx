import React from "react";
import { Skeleton } from "../skeleton";
import { Navigation } from "../Navigation";

export const HomeSkeleton = () => {
  const genreData: unknown = [];
  return (
    <div className="w-screen h-[1600px] flex flex-col min-h-screen gap-[32px] items-center">
      <Navigation genreData={genreData} />
      <Skeleton className="w-full h-[600px] rounded-full" />

      <div className="w-full h-[2000px] flex flex-wrap">
        <Skeleton className="w-[230px] h-[440px]" />
        <Skeleton className="w-[230px] h-[440px]" />
        <Skeleton className="w-[230px] h-[440px]" />
        <Skeleton className="w-[230px] h-[440px]" />
        <Skeleton className="w-[230px] h-[440px]" />
        <Skeleton className="w-[230px] h-[440px]" />
        <Skeleton className="w-[230px] h-[440px]" />
        <Skeleton className="w-[230px] h-[440px]" />
        <Skeleton className="w-[230px] h-[440px]" />
        <Skeleton className="w-[230px] h-[440px]" />
      </div>
    </div>
  );
};
