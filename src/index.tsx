import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./common/style/style";
import { Provider } from "react-redux";
import { usernameStore } from "./store/usernameStore";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={usernameStore}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>
);
