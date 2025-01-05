import Rating from "@/components/movie-card/rating";
import { Review, Actors } from "@/components/movie";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useParams } from "react-router";

const MoviePage = () => {
  const { id } = useParams() || { id: "Unknown" };

  return (
    <div className="p-6">
      <div className="flex justify-between items-start mt-8">
        <h1 className="font-black text-4xl">
          Movie Name: <span className="text-primary">{id}</span>
        </h1>
        <Rating className="text-lg" rating={{ avg: 3.5, count: 421 }} />
      </div>

      <section className="flex justify-between">
        <p className="text-muted-foreground mt-2">11.02.2024 • English</p>
        <Button size="sm">Add to Watchlist</Button>
      </section>
      <Separator className="my-4" />

      <section className="max-w-[75%] mt-6 space-y-6">
        <div className="flex gap-2">
          <Badge>Action</Badge>
          <Badge>Thriller</Badge>
          <Badge>Horror</Badge>
        </div>

        <article className="space-y-2">
          <p>
            A thief who steals corporate secrets through the use of
            dream-sharing technology is given the inverse task of planting an
            idea into the mind of a CEO.
          </p>
          <p>
            <span className="font-bold">Director:</span> Christopher Nolan
          </p>
        </article>
        <Actors />
        <Review />
      </section>
    </div>
  );
};

export default MoviePage;
