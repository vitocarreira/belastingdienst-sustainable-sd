import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home.tsx";
import NotFound from "./pages/NotFound.tsx";
import "./index.css";

const BASE_URL = import.meta.env.BASE_URL;

const router = createBrowserRouter([
  { path: BASE_URL + "/", element: <Home /> },
  { path: BASE_URL + "*", element: <NotFound /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
