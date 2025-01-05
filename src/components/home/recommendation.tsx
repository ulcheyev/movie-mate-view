import MovieCard from "../movie-card/movie-card";
import { movies } from "@/mock/movie";

const Recommendation = () => {
  return (
    <div className="grid grid-cols-5 gap-3">
      {movies.slice(0, 5).map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Recommendation;
