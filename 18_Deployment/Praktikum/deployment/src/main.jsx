import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import React from "react";

import App from "./routes";
import "./styles/index.css";
import { TokenProvider } from "./utils/states/contexts/token-context";
import { ThemeProvider } from "./utils/states/contexts/theme";
import store from "./utils/states/redux/store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <TokenProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </TokenProvider>
    </Provider>
  </React.StrictMode>
);
