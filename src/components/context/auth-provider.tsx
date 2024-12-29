import { createContext, useContext } from "react";

interface AuthProviderProps {
  children: React.ReactNode;
}

interface AuthProviderState {
  isAuthenticated: () => boolean;
  login: () => void;
  signUp: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthProviderState | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const login = () => {
    console.log("Mocking login...");
    localStorage.setItem("token", "token");
  };

  const signUp = () => {
    console.log("Mocking sign up...");
  };

  const logout = () => {
    console.log("Mocking logout...");
    localStorage.removeItem("token");
  };

  const isAuthenticated = (): boolean => {
    return !!localStorage.getItem("token");
  };

  const authContextVals: AuthProviderState = {
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

export default AuthProvider;
