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
  const router = useRouter();

  return (
    <div
      className={`w-full h-fit px-[80px] flex flex-col gap-[32px] justify-center items-center`}
    >
      <div className="w-full h-[36px] flex justify-between items-center px-20">
        <p className="inter text-[24px] font-[600] text-[#09090B]">{title}</p>
        <SeeMoreButton />
      </div>

      <MovieList data={data} className="px-20" sliceMax={slice} />
    </div>
  );
};
