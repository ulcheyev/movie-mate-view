import { Link } from "react-router";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Rating from "./rating";
import { MoviePreview } from "@/api/movieApi";

interface MovieCardProps {
  movie: MoviePreview;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const formattedDate = new Date(movie.releaseDate).toISOString().split("T")[0];

  return (
    <Link to={`/movie/${movie.id}`}>
      <Card className="hover:shadow-lg hover:shadow-foreground/25 transition-all duration-300 ease-in-out">
        <CardHeader className="p-4 pt-6 text-xl">
          <CardTitle className="truncate">{movie.title}</CardTitle>
        </CardHeader>
        <CardContent className="p-4 text-sm text-muted-foreground grid grid-rows-3 gap-1">
          <div className="truncate">
            Genres: {movie.genres.map((genre) => genre.name).join(", ")}
          </div>
          <div className="truncate">Release date: {formattedDate}</div>
          <Rating rating={movie.rating} />
        </CardContent>
      </Card>
    </Link>
  );
};

export default MovieCard;
