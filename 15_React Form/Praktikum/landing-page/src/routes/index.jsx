import React, { useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import LandingPage from "../pages/landingPage";
import CreateProduct from "../pages/products/createProduct";
import DetailCreateProduct from "../pages/products/detail";
import Login from "../pages/login";
import { useToken } from "../utils/token-context";

export default function Router() {
  // TODO: change this when authentication learned
  const { token } = useToken();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/createProduct",
      element: token ? <CreateProduct /> : <Navigate to="/login" />,
    },
    {
      path: "/createProduct/:id",
      element: token ? <DetailCreateProduct /> : <Navigate to="/login" />,
    },
    {
      path: "/createProduct",
      element: <CreateProduct />,
    },
    {
      path: "/createProduct/:id",
      element: <DetailCreateProduct />,
    },
    {
      path: "*",
      element: <div>404 page not found</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}
