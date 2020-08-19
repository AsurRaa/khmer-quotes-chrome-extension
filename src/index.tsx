import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./app/App";
// import "antd/dist/antd.css";
import * as serviceWorker from "./others/serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorker.unregister();
