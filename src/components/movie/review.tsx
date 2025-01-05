import { Star } from "lucide-react";

// interface ReviewProp {
//   review: {
//     username: string;
//     comment: string;
//     rating: number;
//   };
// }

const Review = () => {
  return (
    <section className="mt-8">
      <h2 className="font-bold text-2xl mb-4">| Reviews:</h2>
      <div className="space-y-6">
        <div className="p-4 border rounded-lg shadow-sm bg-muted">
          <div className="flex justify-between items-center mb-2">
            <span className="font-bold text-lg">Username</span>
            <div className="flex items-center gap-1 text-primary font-semibold">
              <Star className="w-4 h-4 fill-yellow-500 stroke-yellow-500" />
              3.5
            </div>
          </div>
          <p className="text-muted-foreground">
            This is an example review. The movie had great visuals and an
            engaging storyline, but the pacing felt a bit off at times.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Review;
