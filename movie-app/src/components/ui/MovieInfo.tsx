import React from "react";
import { FaStar } from "react-icons/fa";
import { MovieGenre } from "./MovieGenre";
import { StaffInfo } from "./StaffInfo";
import { MovieList } from "./MovieList";

export const MovieInfo = () => {
  return (
    <div className="w-[75%] h-fit flex flex-col justify-start items-center border border-gray-300 gap-6">
      <div className="w-full h-fit flex flex-col justify-center items-center gap-6">
        {/* movie title */}
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

        {/* movie posters */}
        <div className="w-full h-[628px] md-[428px] flex justify-between items-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/f5e4/c1eb/84f6a4e2c66a0969068dc7b7d6463302?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Y2gNyHTGU~LRdRWRjIk8EvsnchUTQiJCDsGyRKrK4LEqGyeZ~SoaWRWKL~Ufcj5pZz7j7lPMhAoZ2n0uts13lHTRmQGs-RTOZbZel8n3B~7Mfq9Q4ylCnVRdvVBt67U~xCgvwFthmCR-g~ZSS2TyckmK0HvThX~YVPqR9HcGXqbBi3qnY3wwi4lk~oVNrPtmZVB3gQOrdhPyr1aAknRb~-5Ox~Yfn0uv4dm2TXx2HRdFQM4XiNSwlYAvMrLTF5BKqf9BV1ZCW2K79KZWUF-13y88Mn9~82vVBeOATIM1pcOmlMTN-WN2RcKDAvFYnhDDm9KLJoqV~T54WbL65ZGdqA__"
            alt="img1"
            className="rounded-sm h-full w-1/4"
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/4160/aecb/034291669d5251d1faae7fc5d45790ba?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KWtmLO-Az9JeYU6RlX8IP2O4OD~eml4jdTPu5tSgJHsV58BGh3D-mDBDrvBaOLCDiQpbg8c4u0lcOGxtSDMPE4tRju9Nuo9HIQreSiAo4I5K3aWe5P0ohGoSknXXaVwhp5-oMgECk3i4ZktXYMzNAyXkqQzavQOEOgcEkAj1u3qw26ouLB1I7hF7umY1ysVmZV7SO-1qPsrIPdbTEbQLKvKiWfbOvC6f9SSnuwz-uI3jWCBwVHawV6V~RKQDukmcxmHah-jj7j4gKyEiIVKXRrAs3c9rEd~uMBrqq9kTqfH5HHYv-h-iM2agtfh-LfeJhr3obiE63iSmAbe4NmtvJA__"
            alt="poster2"
            className="rounded-sm h-full w-3/5"
          />
        </div>
      </div>

      {/* movie description */}
      <div className="flex flex-col w-full h-fit gap-5 items-center justify-start">
        <div className="w-full h-fit flex gap-[10px] items-center justify-start">
          <MovieGenre genreName="Fairy Tale" />
          <MovieGenre genreName="Pop Musical" />
        </div>

        <p className="w-full text-[16px] font-[400] inter text-[#09090B]">
          Elphaba, a misunderstood young woman because of her green skin, and
          Glinda, a popular girl, become friends at Shiz University in the Land
          of Oz. After an encounter with the Wonderful Wizard of Oz, their
          friendship reaches a crossroads.
        </p>

        <div className="flex flex-col w-full h-fit justify-center items-center gap-5">
          <StaffInfo role="Director" who="Jon M. Chu" />
          <StaffInfo
            role="Writers"
            who="Winnie Holzman ·  Dana Fox · Gregory Maguire"
          />
          <StaffInfo
            role="Stars"
            who="Cynthia Erivo ·  Ariana Grande · Jeff Goldblum"
          />
        </div>

        {/* <MovieList title="More Like This" /> */}
      </div>
    </div>
  );
};
