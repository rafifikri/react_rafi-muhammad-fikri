import ReactDOM from "react-dom/client";
import React from "react";

// import App from "./routes";
import "./styles/index.css";
// import { TokenProvider } from "./utils/states/contexts/token-context";
import WelcomePage from "./pages/welcomePage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WelcomePage />
  </React.StrictMode>
);
