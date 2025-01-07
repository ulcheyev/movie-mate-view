import { useEffect, useState } from "react";
import { getMoviesByIds, MovieDetails } from "@/api/movieApi";
import MovieCard from "../components/movie-card/movie-card";

interface WatMovProps {
  ids?: string[];
}

const WatMovPage = ({ ids = [] }: WatMovProps) => {
  const [movies, setMovies] = useState<MovieDetails[]>();

  useEffect(() => {
    const fetch = async () => {
      const mov = await getMoviesByIds(ids);

      setMovies(mov.data);
    };

    fetch();
  }, []);

  return (
    <div className="grid grid-cols-5 gap-3">
      {movies?.map((mov, index) => <MovieCard key={index} movie={mov} />)}
    </div>
  );
};

export default WatMovPage;
