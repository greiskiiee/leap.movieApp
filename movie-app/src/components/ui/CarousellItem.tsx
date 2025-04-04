import React from "react";
import { FaStar } from "react-icons/fa";
import { TrailerButton } from "./TrailerButton";
interface CarousellItemProps {
  name: string;
  imdb: number;
  desc: string;
  img: string;
  trailer: string;
}

export const CarousellItem: React.FC<CarousellItemProps> = ({
  name,
  imdb,
  desc,
  img,
  trailer,
}) => {
  return (
    <div className="w-full h-fit flex flex-col sm:absolute sm:bottom-0 sm:justify-end sm:h-full ">
      <img
        src={img}
        className="h-[246px] sm:w-full sm:h-full relative z-20 object-cover "
      />

      <div className="h-fit max-w-[404px] sm:max-h-[206px] sm:relative sm:z-90 sm:left-1/8 sm:top-[-60%] bg-transparent flex flex-col gap-[16px] p-4 sm:p-0">
        <div className="flex sm:flex-col justify-between items-center sm:items-start">
          <div className="flex flex-col">
            <p className=" text-[14px] sm:text-[16px] font-[400] inter text-[#09090B] sm:text-white">
              Now Playing:
            </p>
            <p className="inter text-[24px] sm:text-[36px] font-[700] text-[#09090B] sm:text-white ">
              {name}
            </p>
          </div>

          <div className="flex w-fit h-fit justify-start items-center gap-[4px]">
            <FaStar size={28} fill="#FDE047" />
            <p className="inter text-[#09090B] sm:text-white text-[18px] font-[600]">
              {imdb}
              <span className="inter text-[#71717A] text-[16px]  font-[400]">
                /10
              </span>
            </p>
          </div>
        </div>

        <p className="max-w-[300px] text-[#09090B] sm:text-[#FAFAFA] inter text-[14px] sm:text-[12px] font-[400] text-start ">
          {desc}
        </p>
        <TrailerButton trailer={trailer} />
      </div>
    </div>
  );
};
