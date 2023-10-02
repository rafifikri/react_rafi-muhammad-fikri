import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";

import LandingPage from "../pages/landingPage";
import CreateProduct from "../pages/products/createProduct";
import DetailCreateProduct from "../pages/products/detail";
import Login from "../pages/login";
import { useToken } from "../utils/states/contexts/token-context";

export default function Router() {
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
      element: token ? <CreateProduct /> : <Navigate to="/login" />,
    },
    {
      path: "/createProduct/:id",
      element: token ? <DetailCreateProduct /> : <Navigate to="/login" />,
    },
    {
      path: "*",
      element: <div>404 page not found</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}
