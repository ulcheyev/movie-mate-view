import { useEffect, useState } from "react";
import MovieCard from "../movie-card/movie-card";
import { getMoviesByIds, MovieDetails } from "@/api/movieApi";
import { useAuth } from "../context/auth-provider";
import { getRecommendation } from "@/api/recommendation";

const Recommendation = () => {
  const [movies, setMovies] = useState<MovieDetails[]>();
  const { user } = useAuth();
  const strId: string = user ? user.id.toString() : "";

  useEffect(() => {
    const fetch = async (userId: string) => {
      const res = await getRecommendation(userId);
      const mov = await getMoviesByIds(res.data.recommendedMovieIds);

      setMovies(mov.data);
    };

    fetch(strId);
  }, []);

  return (
    <div className="grid grid-cols-5 gap-3">
      {movies?.map((mov, index) => <MovieCard key={index} movie={mov} />)}
    </div>
  );
};

export default Recommendation;
