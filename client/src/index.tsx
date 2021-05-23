import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./store";

import App from "./containers/App";
import { BrowserRouter, Switch } from "react-router-dom";
import { Suspense } from "react";
import Loading from "./component/Loading";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Suspense fallback={<Loading />}>
        <Provider store={store}>
          <App />
        </Provider>
      </Suspense>
    </Switch>
  </BrowserRouter>,
  document.getElementById("app")
);
