import React from "react";
import { FaStar } from "react-icons/fa";

interface MovieCardProps {
  title: string;
  imdb: number;
  img: string;
  onClick: () => void;
}

export const MovieCard: React.FC<MovieCardProps> = ({
  title,
  imdb,
  img,
  onClick,
}) => {
  return (
    <div
      className="max-w-[260px] h-[440px] min-h-[440px] flex flex-col gap-1 justify-start items-start bg-[#F4F4F5] rounded-md hover:opacity-70"
      onClick={onClick}
    >
      <img src={img} className="w-[260px] h-[80%] rounded-t-md" />

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

        <p className="inter text-[#09090B] text-[16px] font-[400] text-start ">
          {" "}
          {title}
        </p>
      </div>
    </div>
  );
};
