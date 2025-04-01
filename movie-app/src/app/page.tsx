"use client";
import { Navigation } from "@/components/ui/Navigation";
import { Scroll } from "@/components/ui/Scroll";
import { MovieList } from "@/components/ui/MovieList";
import { Footer } from "@/components/ui/Footer";
import { Suspense, useEffect, useState } from "react";
import { HomeSkeleton } from "@/components/ui/skeletons/HomeSkeleton";
import { axiosInstance } from "@/lib/utils";
import { MoviebyCategory } from "@/components/ui/MoviebyCategory";

const API_KEY = "d67d8bebd0f4ff345f6505c99e9d0289";
const BASE_URL = "https://api.themoviedb.org/3";

const fetchMovies = async () => {
  try {
    const endpoints = [
      `/movie/upcoming?language=en-US&page=1&`,
      `/movie/popular?language=en-US&page=1&`,
      `/movie/top_rated?language=en-US&page=1&`,
      `/movie/now_playing?language=en-US&page=1&`,
      `/genre/movie/list?language=en&`,
    ];

    const [upcoming, popular, topRated, nowPlaying, genres] = await Promise.all(
      endpoints.map((url) => axiosInstance.get(url))
    );

    return {
      upcoming: upcoming.data.results,
      popular: popular.data.results,
      topRated: topRated.data.results,
      nowPlaying: nowPlaying.data.results,
      genres: genres.data.genres,
    };
  } catch (error) {
    console.error("Error fetching movies:", error);
    return {};
  }
};

export default function Home() {
  const [upcomingData, setUpcomingData] = useState([]);
  const [popularData, setPopularData] = useState([]);
  const [topData, setTopData] = useState([]);
  const [nowPlayingData, setNowPlayingData] = useState([]);
  const [genreData, setGenre] = useState([]);

  useEffect(() => {
    fetchMovies().then((data) => {
      if (data) {
        setUpcomingData(data.upcoming);
        setPopularData(data.popular);
        setTopData(data.topRated);
        setNowPlayingData(data.nowPlaying);
        setGenre(data.genres);
      }
    });
  }, []);

  return (
    <Suspense fallback={<HomeSkeleton />}>
      {" "}
      <div className="w-screen h-[1600px] flex flex-col min-h-screen gap-[32px] items-center">
        <Navigation genreData={genreData} />
        <Scroll data={nowPlayingData} />
        <MoviebyCategory title="Upcoming" data={upcomingData} />
        <MoviebyCategory title="Popular" data={popularData} />
        <MoviebyCategory title="Top Rated" data={topData} />
        <Footer />
      </div>
    </Suspense>
    // <div className="w-[1000px] h-fit p-10 flex flex-wrap gap-4">
    //   {/* 1.counter increment */}
    //   <Task1 />
    //   {/* 2.input field control */}
    //   <Task2 />
    //   {/* 3.toggle */}
    //   <Task3 />
    //   {/* 4.input length */}
    //   <Task4 />
    //   {/*5. to do list*/}
    //   <Task5 />

    //   <Task6 />
    // </div>
  );
}
