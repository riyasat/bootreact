import React from "react";
import ReactDOM from "react-dom";
import Main from "./Pages/Main";
import "./../node_modules/animate.css/source/animate.css";
import "./Assets/scss/bootstrap.scss";
import "./Utilities/SelectorEngine";
ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById("root")
);
