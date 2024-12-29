import { Navigate } from "react-router";
import { useAuth } from "../context/auth-provider";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated } = useAuth();

  return !isAuthenticated() ? <Navigate to="login" replace /> : <>{children}</>;
};

export default ProtectedRoute;
