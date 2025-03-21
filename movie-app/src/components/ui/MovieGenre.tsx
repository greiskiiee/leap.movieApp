import React from "react";

interface MovieGenreProps {
  genreName: string;
}
export const MovieGenre: React.FC<MovieGenreProps> = ({ genreName }) => {
  return (
    <div className="w-fit h-[20px] py-[2px] px-[10px] rounded-full border border-[#E4E4E7] text-[12px] font-[600] inter flex justify-center items-center">
      {genreName}
    </div>
  );
};
