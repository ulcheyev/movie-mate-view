import apiClient from ".";

export interface ReviewDtoActivity {
  key: {
    movieId: string;
    userId: string;
    timestamp: Date;
  };
  rate: number;
  reviewText: string;
  tags: string[];
  metadata: {
    additionalProp1: string;
    additionalProp2: string;
    additionalProp3: string;
  };
}

const url = "/activity/reviews";

export const createReview = async (review: {
  rate: number;
  reviewText: string;
  movieId: string;
}) => {
  return await apiClient.post(url, review);
};

export const getReviews = async (movieId: string) => {
  return await apiClient.get<ReviewDtoActivity[]>(`${url}/${movieId}`);
};
