"use client";
import React, { useEffect, useState } from "react";
import { SeeMoreButton } from "./SeeMoreButton";
import { MovieCard } from "./MovieCard";

import axios from "axios";

export const Upcoming = () => {
  //   const [data, setData] = useState("");
  //   useEffect(() => {
  //     axios
  //       .get(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`)
  //       .then((res) => setData(res.data));
  //   }, []);

  //   console.log(data);

  return (
    <div className="w-full h-[978px] px-[80px] flex flex-col gap-[32px]">
      <div className="w-full h-[36px] flex justify-between items-center">
        <p className="inter text-[24px] font-[600] text-[#09090B]">Upcoming</p>
        <SeeMoreButton />
      </div>

      <div className="grid grid-cols-5 grid-rows-2 gap-8">
        <MovieCard
          title="Dear Santa"
          imdb={6.9}
          img="https://s3-alpha-sig.figma.com/img/6415/2808/0ffbeccc1a7cdd3a5199e0755d66e253?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fCQufcR3am1qiooLQaqM9Q41NfwFPOLbPAZzQ3vVA3ubkL8vXYVlOARoxW3mVGAKW10Or4rEsgbn1We-Uv7tTuXNoCKZySv1bpIdwl683L-HGFQCh2aolanzjTygbJRG8oxQTaOW~juemQwUKxKlVfDrku7eyKv7kCfb8GjtOtzOXMjPUGfQ1cPuDBT-lQ66x3KsLKXsEsvNyS04Nl-XgtKjiFq3J8vWz--Y7SKpB16xhs5medKqDLyR2gKclKWDTQHp2j3nb5xDgNcjumvVKF8BAMHiDyS~EKQBNdHZif7FuEWg4eIGY97oHzVI0GbCsUbWHh0mcj~FV-FZhmU~fQ__"
        />
      </div>
    </div>
  );
};
