import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import Layout from "../layout/layout";
import HomePage from "@/pages/HomePage";
import WatchlistPage from "@/pages/WatchlistPage";
import LoginPage from "@/pages/LoginPage";
import ProtectedRoute from "./protected-route";

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="login" element={<LoginPage />} />
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
      </Route>
    </>
  )
);
