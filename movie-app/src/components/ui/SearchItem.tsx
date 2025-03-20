import React from "react";
import { FaStar } from "react-icons/fa";
import { SeeMoreButton } from "./SeeMoreButton";

export const SearchItem = () => {
  return (
    <div className="w-full h-[116px] rounded-lg p-2 flex gap-4">
      <div className="w-[77px] h-full rounded-md">
        <img
          className="rounded-md h-full w-full"
          src="https://s3-alpha-sig.figma.com/img/f5e4/c1eb/84f6a4e2c66a0969068dc7b7d6463302?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Y2gNyHTGU~LRdRWRjIk8EvsnchUTQiJCDsGyRKrK4LEqGyeZ~SoaWRWKL~Ufcj5pZz7j7lPMhAoZ2n0uts13lHTRmQGs-RTOZbZel8n3B~7Mfq9Q4ylCnVRdvVBt67U~xCgvwFthmCR-g~ZSS2TyckmK0HvThX~YVPqR9HcGXqbBi3qnY3wwi4lk~oVNrPtmZVB3gQOrdhPyr1aAknRb~-5Ox~Yfn0uv4dm2TXx2HRdFQM4XiNSwlYAvMrLTF5BKqf9BV1ZCW2K79KZWUF-13y88Mn9~82vVBeOATIM1pcOmlMTN-WN2RcKDAvFYnhDDm9KLJoqV~T54WbL65ZGdqA__"
          alt=""
        />
      </div>

      <div className="w-full h-full flex flex-col gap-3">
        <div className="w-full h-fit flex flex-col justify-start ">
          <p className="text-[#09090B] inter text-[20px] font-[600]">Wicked</p>
          <div className="h-[23px] flex justify-start items-start gap-[4px]">
            <div className="flex w-fit h-fit justify-start items-center gap-[4px]">
              <FaStar size={16} fill="#FDE047" />
              <p className="inter text-black text-[14px] font-[500]">
                6.9
                <span className="inter text-[#71717A] text-[12px]  font-[400]">
                  /10
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className=" w-fit h-full flex justify-start items-start">
            2024
          </div>

          <SeeMoreButton />
        </div>
      </div>
    </div>
  );
};
