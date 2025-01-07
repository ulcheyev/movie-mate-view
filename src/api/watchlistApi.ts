import apiClient from ".";

export interface WatchlistDto {
  id: string;
  name: string;
  moviesId: string[];
  dateCreated: Date;
}

export interface WatchlistParams {
  page?: number;
  size?: number;
}

const url = "/watchlists/manage";

export const getWatchlistById = async (id: string) => {
  return await apiClient.get<WatchlistDto>(`${url}/${id}`);
};

export const getAllWatchlists = async ({
  page = 0,
  size = 10,
}: WatchlistParams) => {
  return await apiClient.get<WatchlistDto[]>(`${url}/all-by-user`, {
    params: { page, size },
  });
};

export const createWatchlist = async (w: {
  name: string;
  moviesId: string[];
}) => {
  return await apiClient.post<WatchlistDto>(url, w);
};
