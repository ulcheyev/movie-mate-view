import apiClient from ".";

export interface GenreDto {
  name: string;
}

export interface RatingDto {
  average: number;
  count: number;
}

export interface ReviewDto {
  user: string;
  comment: string;
  rating: number;
}

export interface MoviePreview {
  id: string;
  title: string;
  genres: GenreDto[];
  releaseDate: Date;
  rating: RatingDto;
}

export interface MovieDetails {
  id: string;
  title: string;
  genres: GenreDto[];
  director: {
    firstName: string;
    lastName: string;
  };
  casts: {
    firstName: string;
    lastName: string;
    role: string;
  };
  synopsis: string;
  releaseDate: Date;
  language: string;
  rating: RatingDto;
  reviews: ReviewDto[];
}

export interface PageDto<T> {
  elements: T[];
  pageNo: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  isLast: boolean;
}

type MoviePageParams = {
  page?: number;
  size?: number;
  sortBy?: string;
  order?: "ASC" | "DESC";
};

const url = "/movies";

export const getMovieDetails = async (id: number) => {
  return await apiClient.get<MovieDetails>(`${url}/${id}`);
};

export const getMoviePage = async ({
  page = 0,
  size = 10,
  sortBy = "title",
  order = "ASC",
}: MoviePageParams) => {
  return await apiClient.get<PageDto<MoviePreview>>(url, {
    params: { page, size, sortBy, order },
  });
};
