import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import LandingPage from "../pages/landingPage";
import CreateProduct from "../pages/products/createProduct";
import DetailCreateProduct from "../pages/products/detail";
import Login from "../pages/login";
import { setAxiosConfig } from "../utils/api/axiosWithConfig";
import { useToken } from "../utils/states/contexts/token-context";

export default function Router() {
  useEffect(() => {
    setAxiosConfig("", "https://651a7c39340309952f0d5e9d.mockapi.io/api/v1");
  }, []);
  // TODO: change this when authentication learned
  const { token } = useSelector((state) => state.data);

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
