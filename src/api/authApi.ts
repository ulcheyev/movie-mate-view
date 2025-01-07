import apiClient from "@/api/index.ts";

export interface AppUser {
  id: number;
  username: string;
  email: string;
  fullName: string;
  roles: string[];
  enabled: boolean;
  notBanned: boolean;
}

export interface AuthResponse {
  userDetails: AppUser;
  accessToken: string;
  refreshToken: string;
}

export interface RegisterRequest {
  username: string;
  email: string;
  fullName: string;
  password: string;
}

export interface LoginRequest {
  identifier: string;
  password: string;
}

const url = "/users/auth";

export const registerUser = (req: RegisterRequest) => {
  return apiClient.post<AuthResponse>(`${url}/register`, req);
};

export const loginUser = (req: LoginRequest) => {
  return apiClient.post<AuthResponse>(`${url}/login`, req);
};
