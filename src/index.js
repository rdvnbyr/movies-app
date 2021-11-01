import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MovieProvider } from "./context/MovieContext";
import { StyleProvider } from "./context/StyledContext";

import "./assets/css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <StyleProvider>
    <MovieProvider>
      <App />
    </MovieProvider>
  </StyleProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
