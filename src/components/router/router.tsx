import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import Layout from "../layout/layout";
import ProtectedRoute from "./protected-route";
import { LoginPage, WatchlistPage, SignUpPage, HomePage } from "@/pages";
import MoviePage from "@/pages/MoviePage";
import WatMovPage from "@/pages/WatMovPage";

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignUpPage />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route index element={<HomePage />} />
        <Route path="watchlist" element={<WatchlistPage />} />
        <Route path="watchlist/:id" element={<WatMovPage />} />
        <Route path="movie/:id" element={<MoviePage />} />
      </Route>
    </>
  ),
  {
    basename: "/movie-mate-view",
  }
);
