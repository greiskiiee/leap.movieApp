import React from "react";
import { FaStar } from "react-icons/fa";

interface MovieCardProps {
  title: string;
  imdb: number;
  img: string;
}

export const MovieCard: React.FC<MovieCardProps> = ({ title, imdb, img }) => {
  return (
    <button className="max-w-[260px] max-h-[440px] flex flex-col gap-1 justify-start items-start bg-[#F4F4F5] rounded-md hover:opacity-70">
      <img src={img} className="w-full max-h-[340px] rounded-t-md" />

      <div className="w-full flex flex-col justify-start items-start p-2">
        <div className="flex w-fit h-fit justify-start items-center gap-[4px]">
          <FaStar size={18} fill="#FDE047" />
          <p className="inter text-black text-[14px] font-[500]">
            {imdb}
            <span className="inter text-[#71717A] text-[12px]  font-[400]">
              /10
            </span>
          </p>
        </div>

        <p className="inter text-[#09090B] text-[18px] font-[400] text-start md:text-[10px]">
          {" "}
          {title}
        </p>
      </div>
    </button>
  );
};
