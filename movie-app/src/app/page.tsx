"use client";
import { Navigation } from "@/components/ui/Navigation";
import { Scroll } from "@/components/ui/Scroll";
import { MovieList } from "@/components/ui/MovieList";

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

  const [nowPlayingData, setNowPlayingData] = useState<{ results: any[] }>({
    results: [],
  });

  const [genreData, setGenre] = useState<{ genres: any[] }>({ genres: [] });

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
        setUpcomingData(res1.data);
        setPopularData(res2.data);
        setTopData(res3.data);
        setNowPlayingData(res4.data);
        setGenre(res5.data);
      }
    );
  }, []);

  return (
    <div className="w-screen h-[1600px] flex flex-col min-h-screen gap-[32px] items-center">
      <Navigation genreData={genreData.genres} />
      <Scroll data={nowPlayingData.results} />
      <MovieList title="Upcoming" data={upcomingData.results} />
      <MovieList title="Popular" data={popularData.results} />
      <MovieList title="Top Rated" data={topData.results} />

      <Footer />
    </div>
  );
}
