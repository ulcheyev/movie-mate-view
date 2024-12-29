import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import Layout from "../layout/layout";
import ProtectedRoute from "./protected-route";
import { LoginPage, WatchlistPage, SignUpPage, HomePage } from "@/pages";

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
      </Route>
    </>
  )
);
