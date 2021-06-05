import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>,
  document.getElementById("root")
);

reportWebVitals();
