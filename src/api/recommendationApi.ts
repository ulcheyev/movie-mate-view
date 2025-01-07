import apiClient from ".";

export interface RecommendationDto {
  userId: string;
  recommendedMovieIds: string[];
}

const url = "/recommendation";

export const getRecommendation = async (userId: string) => {
  return await apiClient.get<RecommendationDto>(`${url}/${userId}`);
};
