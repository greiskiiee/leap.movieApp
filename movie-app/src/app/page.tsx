"use client";
import { Navigation } from "@/components/ui/Navigation";
import { Scroll } from "@/components/ui/Scroll";
import { MovieList } from "@/components/ui/MovieList";

import { Footer } from "@/components/ui/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [upcomingData, setUpcomingData] = useState([]);
  const [popularData, setPopularData] = useState([]);
  const [topData, setTopData] = useState([]);
  const [nowPlayingData, setNowPlayingData] = useState([]);
  const [genreData, setGenre] = useState([]);

  const promise1 = axios.get(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=d67d8bebd0f4ff345f6505c99e9d0289"
  );
  const promise2 = axios.get(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=d67d8bebd0f4ff345f6505c99e9d0289"
  );
  const promise3 = axios.get(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=d67d8bebd0f4ff345f6505c99e9d0289"
  );
  const promise4 = axios.get(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=d67d8bebd0f4ff345f6505c99e9d0289"
  );
  const promise5 = axios.get(
    `https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=d67d8bebd0f4ff345f6505c99e9d0289`
  );

  useEffect(() => {
    Promise.all([promise1, promise2, promise3, promise4, promise5]).then(
      ([res1, res2, res3, res4, res5]) => {
        setUpcomingData(res1.data.results);
        setPopularData(res2.data.results);
        setTopData(res3.data.results);
        setNowPlayingData(res4.data.results);
        setGenre(res5.data.genres);
      }
    );
  }, []);

  return (
    <div className="w-screen h-[1600px] flex flex-col min-h-screen gap-[32px] items-center">
      <Navigation genreData={genreData} />
      <Scroll data={nowPlayingData} />
      <MovieList title="Upcoming" data={upcomingData} />
      <MovieList title="Popular" data={popularData} />
      <MovieList title="Top Rated" data={topData} />

      <Footer />
    </div>
  );
}
