import { Navigation } from "@/components/ui/Navigation";
import { Scroll } from "@/components/ui/Scroll";
import { MovieList } from "@/components/ui/MovieList";
import Image from "next/image";
import { Footer } from "@/components/ui/Footer";

export default function Home() {
  return (
    <div className="w-screen h-[1200px] flex flex-col min-h-screen gap-[32px] items-center">
      <Navigation />
      <Scroll />
      <MovieList
        title="Upcoming"
        api="https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=d67d8bebd0f4ff345f6505c99e9d0289"
      />
      <MovieList
        title="Popular"
        api="https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=d67d8bebd0f4ff345f6505c99e9d0289"
      />
      <MovieList
        title="Top Rated"
        api="https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=d67d8bebd0f4ff345f6505c99e9d0289"
      />
      <Footer />
    </div>
  );
}
