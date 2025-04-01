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
    <div className="w-full h-full absolute">
      <img src={img} className="w-full h-full relative z-20 " />
      <div className="max-w-[404px] max-h-[206px] relative z-90 left-1/8 top-[-60%] bg-transparent flex flex-col gap-[16px]">
        <div className="flex flex-col">
          <p className="text-[16px] font-[400] inter text-white">
            Now Playing:
          </p>
          <p className="inter text-[36px] font-[700] text-white ">{name}</p>

          <div className="flex w-fit h-fit justify-start items-center gap-[4px]">
            <FaStar size={28} fill="#FDE047" />
            <p className="inter text-white text-[18px] font-[600]">
              {imdb}
              <span className="inter text-[#71717A] text-[16px]  font-[400]">
                /10
              </span>
            </p>
          </div>
        </div>

        <p className="w-[300px] text-[#FAFAFA] inter text-[12px] font-[400] text-start ">
          {desc}
        </p>
        <TrailerButton trailer={trailer} />
      </div>
    </div>
  );
};
