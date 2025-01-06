/* eslint-disable */

import { createContext, useContext, useEffect, useState } from "react";
import {
  AppUser,
  AuthResponse,
  LoginRequest,
  loginUser,
  RegisterRequest,
  registerUser,
} from "@/api/authApi.ts";
import { AxiosResponse } from "axios";

interface AuthProviderProps {
  children: React.ReactNode;
}

interface AuthProviderState {
  user: AppUser | null;
  isAuthenticated: () => boolean;
  login: (req: LoginRequest) => Promise<void>;
  signUp: (req: RegisterRequest) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthProviderState | undefined>(undefined);

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<AppUser | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const setup = (res: AxiosResponse<AuthResponse, any>) => {
    localStorage.setItem("token", res.data.accessToken);
    localStorage.setItem("user", JSON.stringify(res.data.userDetails));
    setUser(res.data.userDetails);
  };

  const signUp = async (req: RegisterRequest) => {
    await registerUser(req).then((res) => {
      setup(res);
    });
  };

  const login = async (req: LoginRequest) => {
    await loginUser(req).then((res) => {
      setup(res);
    });
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  const isAuthenticated = (): boolean => {
    return !!localStorage.getItem("token");
  };

  const authContextVals: AuthProviderState = {
    user: user,
    isAuthenticated: isAuthenticated,
    login: login,
    signUp: signUp,
    logout: logout,
  };

  return (
    <AuthContext.Provider value={authContextVals}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
