import React from "react";
import ReactDOM from "react-dom/client";
import { CreateProduct1 } from "./pages/create-product";
// import { CreateProduct1 } from "./pages/create-account";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CreateProduct1 />
  </React.StrictMode>
);
