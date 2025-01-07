import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { RatingDto } from "@/api/movieApi";

interface RatingProps {
  className?: string;
  rating: RatingDto;
}

const Rating = ({ className, rating }: RatingProps) => {
  const fullStars = Math.floor(rating.average || 0);
  const hasHalfStar = rating.average % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={cn("flex items-center gap-0.5", className)}>
      <span>Rating:</span>
      {[...Array(fullStars)].map((_, index) => (
        <Star
          key={`full-${index}`}
          className="w-4 h-4 stroke-yellow-500 fill-yellow-500"
        />
      ))}
      {hasHalfStar && (
        <div className="relative w-4 h-4">
          <Star className="absolute w-4 h-4 stroke-yellow-500 fill-none" />
          <Star
            className="absolute w-4 h-4 stroke-yellow-500 fill-yellow-500"
            style={{ clipPath: "inset(0 50% 0 0)" }} // Show left half
          />
        </div>
      )}
      {[...Array(emptyStars)].map((_, index) => (
        <Star
          key={`empty-${index}`}
          className="w-4 h-4 stroke-yellow-500 fill-none"
        />
      ))}
      <div>(x{rating.count})</div>
    </div>
  );
};

export default Rating;
