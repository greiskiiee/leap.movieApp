"use client";
import { SeeMoreButton } from "./SeeMoreButton";
import { useRouter } from "next/navigation";
import { MovieList } from "./MovieList";

interface MoviebyCategoryProps {
  title: string;
  data?: any;
  className?: string;
  slice: number;
}
export const MoviebyCategory: React.FC<MoviebyCategoryProps> = ({
  title,
  data,
  slice,
}) => {
  return (
    <div
      className={`w-full h-fit flex flex-col gap-5 justify-center items-center p-5 md:w-[80%] md:p-0`}
    >
      <div className="w-full h-[36px] flex justify-between items-center ">
        <p className="inter text-[24px] font-[600] text-[#09090B]">{title}</p>
        <SeeMoreButton />
      </div>

      <MovieList data={data} className="" sliceMax={slice} />
    </div>
  );
};
