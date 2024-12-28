import { useAuth } from "@/components/context/auth-provider";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/", { replace: true });
  };

  return <Button onClick={handleLogin}>Login</Button>;
};

export default LoginPage;
