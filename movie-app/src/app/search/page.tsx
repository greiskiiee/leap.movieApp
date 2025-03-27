"use client";
import { MovieGenre } from "@/components/ui/MovieGenre";
import { Navigation } from "@/components/ui/Navigation";
import { StaffInfo } from "@/components/ui/StaffInfo";
import axios from "axios";
import { log } from "console";
import { useParams } from "next/navigation";
import React, { Key, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

export default function Detail() {
  const { movieId } = useParams();
  const [genreData, setGenre] = useState([]);

  const promiseGenre = axios.get(
    `https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=d67d8bebd0f4ff345f6505c99e9d0289`
  );

  useEffect(() => {
    Promise.all([promiseGenre]).then(([res1]) => {
      setGenre(res1.data.genres);
    });
  }, [movieId]);

  return (
    <div className="w-screen h-[1600px] flex flex-col min-h-screen gap-[32px] items-center">
      <Navigation genreData={genreData} />

      <div className="w-[1080px] h-fit flex flex-col justify-start items-center  gap-6">
        <div className="w-full h-fit flex flex-col justify-center items-center gap-6"></div>
      </div>
    </div>
  );
}
