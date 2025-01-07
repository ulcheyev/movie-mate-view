import Rating from "@/components/movie-card/rating";
import { Review, Actors } from "@/components/movie";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useParams } from "react-router";
import { useEffect, useState, FormEvent } from "react";
import { getMovieDetails, MovieDetails } from "@/api/movieApi";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { createReview, getReviews, ReviewDtoActivity } from "@/api/activityApi";

const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [r, setR] = useState<ReviewDtoActivity[]>([]);
  const [form, setForm] = useState({
    rate: 0,
    reviewText: "",
    movieId: id || "",
  });
  const formattedDate = new Date(movie ? movie.releaseDate : "2022-01-01")
    .toISOString()
    .split("T")[0];

  useEffect(() => {
    const fetch = async (id: string) => {
      const res = await getMovieDetails(id);
      const revs = await getReviews(id);
      setMovie(res.data);
      setR(revs.data);
    };

    fetch(id || "1");
  }, [id]);

  const handleCreate = (e: FormEvent) => {
    e.preventDefault();

    createReview(form).then((res) => {
      setR((prev) => [...prev, res.data]);
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-start mt-8">
        <h1 className="font-black text-4xl">
          <span className="text-primary">{movie?.title}</span>
        </h1>
        <Rating
          className="text-lg"
          rating={movie ? movie.rating : { average: 0, count: 0 }}
        />
      </div>

      <section className="flex justify-between">
        <p className="text-muted-foreground mt-2">
          {formattedDate} • {movie?.language}
        </p>
        <Button size="sm">Add to Watchlist</Button>
      </section>
      <Separator className="my-4" />

      <section className="max-w-[75%] mt-6 space-y-6">
        <div className="flex gap-2">
          {movie?.genres.map((genre, index) => (
            <Badge key={index}>{genre.name}</Badge>
          ))}
        </div>

        <article className="space-y-2">
          <p>{movie?.synopsis}</p>
          <p>
            <span className="font-bold">Director:</span>{" "}
            {movie?.director.firstName} {movie?.director.lastName}
          </p>
        </article>
        <Actors casts={movie?.casts} />
        <form>
          <div className="grid gap-6">
            <div className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="reviewText">Text</Label>
                <Input
                  id="reviewText"
                  type="text"
                  placeholder="What do you think about this movie?"
                  onChange={handleInputChange}
                />
                <Label htmlFor="rate">Rating</Label>
                <Input id="rate" type="text" onChange={handleInputChange} />
                <Label hidden={true} htmlFor="movieId">
                  Movie
                </Label>
                <Input id="movieId" type="hidden" defaultValue={movie?.id} />
                <Button onClick={handleCreate}>Review</Button>
              </div>
            </div>
          </div>
        </form>
        <Review review={r} />
      </section>
    </div>
  );
};

export default MoviePage;
