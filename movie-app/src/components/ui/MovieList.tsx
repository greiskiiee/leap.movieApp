"use client";
import { SeeMoreButton } from "./SeeMoreButton";
import { MovieCard } from "./MovieCard";
import { useRouter } from "next/navigation";

interface MovieListProps {
  data?: any;
  className?: string;
  sliceMax?: number;
}
export const MovieList: React.FC<MovieListProps> = ({
  data,
  className,
  sliceMax,
}) => {
  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`/detail/${id}`);
  };

  return (
    <div
      className={`w-full h-fit flex flex-wrap gap-8 justify-between ${className}`}
    >
      {data.slice(0, sliceMax || data.lenght).map(
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
  );
};
