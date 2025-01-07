import { ThemeProvider } from "@/components/context/theme-provider";
import { RouterProvider } from "react-router";
import { Router } from "./components/router/router";
import { AuthProvider } from "./components/context/auth-provider";

const App = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="ui-theme">
      <AuthProvider>
        <RouterProvider router={Router} />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
