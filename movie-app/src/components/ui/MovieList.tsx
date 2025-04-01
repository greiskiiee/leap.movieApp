"use client";
import { SeeMoreButton } from "./SeeMoreButton";
import { MovieCard } from "./MovieCard";
import { useRouter } from "next/navigation";

interface MovieListProps {
  data?: any;
  // className?: string;
}
export const MovieList: React.FC<MovieListProps> = ({ data }) => {
  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`/detail/${id}`);
  };
  return (
    <div
      className={`w-full h-fit px-[80px] flex flex-col gap-[32px] justify-center`}
    >
      <div className="w-full flex flex-wrap justify-center items-center gap-20 ">
        {data.slice(0, 10).map(
          (
            movie: {
              original_title: string;
              vote_average: number;
              poster_path: any;
              id: number;
            },
            index: React.Key | null | undefined
          ) => (
            <MovieCard
              key={index}
              title={movie.original_title}
              imdb={movie.vote_average}
              img={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              onClick={() => {
                handleClick(movie.id);
              }}
            />
          )
        )}
      </div>
    </div>
  );
};
