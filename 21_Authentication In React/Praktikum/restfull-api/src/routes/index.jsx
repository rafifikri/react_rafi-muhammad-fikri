import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
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
  const { token } = useToken();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/login",
      element: token === "" ? <Login /> : <Navigate to="/" />,
    },
    {
      path: "/createProduct",
      element: token === "" ? <Navigate to="/login" /> : <CreateProduct />,
    },
    {
      path: "/createProduct/:id",
      element:
        token === "" ? <Navigate to="/login" /> : <DetailCreateProduct />,
    },
    {
      path: "*",
      element: <div>404 page not found</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}
