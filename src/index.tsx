import React from "react";
import ReactDOM from "react-dom/client";
import router from "./app/router";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { store } from "./shared/store";
import "./app/global.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
