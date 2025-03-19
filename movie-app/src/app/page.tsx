"use client";
import { Navigation } from "@/components/ui/Navigation";
import { Scroll } from "@/components/ui/Scroll";
import { MovieList } from "@/components/ui/MovieList";
import Image from "next/image";
import { Footer } from "@/components/ui/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [upcomingData, setUpcomingData] = useState<{ results: any[] }>({
    results: [],
  });

  const [popularData, setPopularData] = useState<{ results: any[] }>({
    results: [],
  });

  const [topData, setTopData] = useState<{ results: any[] }>({
    results: [],
  });

  const promise1 = axios.get(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=d67d8bebd0f4ff345f6505c99e9d0289"
  );
  const promise2 = axios.get(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=d67d8bebd0f4ff345f6505c99e9d0289"
  );
  const promise3 = axios.get(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=d67d8bebd0f4ff345f6505c99e9d0289"
  );

  Promise.all([promise1, promise2, promise3]).then(([res1, res2, res3]) => {
    setUpcomingData(res1.data);
    setPopularData(res2.data);
    setTopData(res3.data);
  });

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=d67d8bebd0f4ff345f6505c99e9d0289"
  //     )
  //     .then((res) => {
  //       setUpcomingData(res.data);
  //     });
  //   axios
  //     .get(
  //       "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=d67d8bebd0f4ff345f6505c99e9d0289"
  //     )
  //     .then((res) => {
  //       setPopularData(res.data);
  //     });
  // });

  return (
    <div className="w-screen h-[1200px] flex flex-col min-h-screen gap-[32px] items-center">
      <Navigation />
      <Scroll />
      <MovieList title="Upcoming" data={upcomingData.results} />
      <MovieList title="Popular" data={popularData.results} />
      <MovieList title="Top Rated" data={topData.results} />
      {/* <MovieList
        title="Top Rated"
        api="https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=d67d8bebd0f4ff345f6505c99e9d0289"
      /> */}
      <Footer />
    </div>
  );
}
