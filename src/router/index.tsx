import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { RoutesPath } from "./routes";

const Home = lazy(() => import("src/pages/Home"));
const Error = lazy(() => import("src/pages/Error"));

export const Router = createBrowserRouter([
  { path: RoutesPath.HOME, element: <Home />, errorElement: <Error /> },
]);
