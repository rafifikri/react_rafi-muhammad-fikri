import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import { ThemeProvider } from "../utils/states/contexts/theme";
import store from "../utils/states/redux/store/store";
import { TokenProvider } from "../utils/states/contexts/token-context";

const Providers = ({ children }) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <TokenProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </TokenProvider>
      </Provider>
    </BrowserRouter>
  );
};

const customRender = (component) => {
  return render(component, {
    wrapper: Providers,
  });
};

export * from "@testing-library/react";
export { customRender as Render };
