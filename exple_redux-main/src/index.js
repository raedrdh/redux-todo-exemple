import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// Connect React to redux
import { Provider } from "react-redux";
// store as a props for each component
import store from "./JS/store/store";
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
