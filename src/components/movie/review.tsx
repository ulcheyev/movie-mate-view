import { ReviewDtoActivity } from "@/api/activityApi";
import { Star } from "lucide-react";

interface ReviewProp {
  review?: ReviewDtoActivity[];
}

const Review = ({ review }: ReviewProp) => {
  return (
    <section className="mt-8">
      <h2 className="font-bold text-2xl mb-4">| Reviews:</h2>
      <div className="space-y-6">
        {review?.map((rev, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-sm bg-muted">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-1 text-primary font-semibold">
                <Star className="w-4 h-4 fill-yellow-500 stroke-yellow-500" />
                {rev.rate}
              </div>
            </div>
            <p className="text-muted-foreground">{rev.reviewText}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;
