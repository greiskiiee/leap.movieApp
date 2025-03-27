import React from "react";
import { FaStar } from "react-icons/fa";
import { SeeMoreButton } from "./SeeMoreButton";

interface MovieProps {
  name: string;
  rate: number;
  img_path: string;
  onClick: () => void;
  date: string;
}
export const SearchItem: React.FC<MovieProps> = ({
  name,
  rate,
  img_path,
  date,
  onClick,
}) => {
  return (
    <div
      className="w-full h-[116px] rounded-lg p-2 flex gap-4 hover:bg-[#d5d5d5] hover:opacity-85"
      onClick={onClick}
    >
      <div className="w-[77px] h-full rounded-md">
        <img
          className="rounded-md h-full w-full"
          src={`https://image.tmdb.org/t/p/original${img_path}`}
          alt="movie poster"
        />
      </div>

      <div className="w-full h-full flex flex-col gap-3">
        <div className="w-full h-fit flex flex-col justify-start ">
          <p className="text-[#09090B] inter text-[20px] font-[600]">{name}</p>
          <div className="h-[23px] flex justify-start items-start gap-[4px]">
            <div className="flex w-fit h-fit justify-start items-center gap-[4px]">
              <FaStar size={16} fill="#FDE047" />
              <p className="inter text-black text-[14px] font-[500]">
                {rate}
                <span className="inter text-[#71717A] text-[12px]  font-[400]">
                  /10
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className=" w-fit h-full flex justify-start items-start">
            {date}
          </div>

          <SeeMoreButton />
        </div>
      </div>
    </div>
  );
};
