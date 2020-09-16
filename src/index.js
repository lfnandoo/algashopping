import React from "react";
import ReactDOM from "react-dom";
import HomeView from "./views/Home.view";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HomeView />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
