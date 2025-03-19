import React from "react";
import { FaStar } from "react-icons/fa";

interface MovieCardProps {
  title: string;
  imdb: number;
  img: string;
}

export const MovieCard: React.FC<MovieCardProps> = ({ title, imdb, img }) => {
  return (
    <div className="w-[230px] h-[440px] flex flex-col gap-1 justify-center items-start">
      <img src={img} className="w-[230px] h-[340px]" />

      <div className="w-full flex flex-col p-2">
        <div className="flex w-fit h-fit justify-start items-center gap-[4px]">
          <FaStar size={18} fill="#FDE047" />
          <p className="inter text-black text-[14px] font-[500]">
            {imdb}
            <span className="inter text-[#71717A] text-[12px]  font-[400]">
              /10
            </span>
          </p>
        </div>

        <p className="inter text-[#09090B] text-[18px]  font-[400]"> {title}</p>
      </div>
    </div>
  );
};
