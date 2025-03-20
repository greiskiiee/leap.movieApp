import React from "react";
import { FaStar } from "react-icons/fa";

export const MovieInfo = () => {
  return (
    <div className="w-[1080px] h-fit flex flex-col justify-start items-center">
      <div className="w-full h-fit">
        <div className="w-full h-fit flex justify-between items-center">
          <div className="w-fit h-full flex flex-col gap-1">
            <p className="inter font-[700] text-[36px] text-[#09090B]">
              Wicked
            </p>
            <p className="inter font-[400] text-[18px] text-[#09090B]">
              2024.11.26 · PG · 2h 40m
            </p>
          </div>

          <div className="flex flex-col w-fit h-full ">
            <p className="inter font-[500] text-[12px] text-[#09090B]">
              Rating
            </p>

            <div className="w-full h-[48px] flex gap-[4px]">
              <FaStar size={28} fill="#FDE047" />
              <div className="flex flex-col justify-center items-center">
                <p className="inter font-[600] text-[18px] text-[#09090B]">
                  6.9{" "}
                  <span className="inter font-[400] text-[16px] text-[#71717A]">
                    /10
                  </span>
                </p>
                <p className="inter font-[400] text-[12px] text-[#71717A]">
                  37k
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
