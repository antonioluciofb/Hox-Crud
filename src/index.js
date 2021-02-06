import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";

import { Provider } from "react-redux";
import configStore from "./store/storeConfig";

const store = configStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
