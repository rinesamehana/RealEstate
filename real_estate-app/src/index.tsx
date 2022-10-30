import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { store, StoreContext } from "./app/stores/store";
import "react-toastify/dist/ReactToastify.min.css";
import { Router } from "react-router-dom";
import App from "./App";
import "react-toastify/dist/ReactToastify.min.css";
import { createBrowserHistory } from "history";
import ScrollToTop from "./app/axios/ScrollToTop";
export const history = createBrowserHistory();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StoreContext.Provider value={store}>
    <Router history={history}>
      {/* <ScrollToTop /> */}
      <App />
    </Router>
  </StoreContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
