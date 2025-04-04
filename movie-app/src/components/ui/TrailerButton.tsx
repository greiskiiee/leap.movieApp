import { Play } from "lucide-react";
import React from "react";

interface TrailerButtonProps {
  trailer: string;
}

export const TrailerButton: React.FC<TrailerButtonProps> = ({ trailer }) => {
  return (
    <a href={`https://www.youtube.com/watch?v=${trailer}`} target="_blank">
      <button className="w-[145px] h-[40px] bg-[#18181B] text-[#fafafa] sm:text-[#18181B] sm:bg-[#F4F4F5] flex justify-center items-center py-[8px] px-[16px] text-[14px] font-[500] inter rounded-md gap-[8px] ">
        <Play size={16} strokeWidth="1" />
        Watch Trailer
      </button>
    </a>
  );
};
