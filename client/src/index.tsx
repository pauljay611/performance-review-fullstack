import React from "react";
import ReactDOM from "react-dom";

import App from "./containers/App";
import { BrowserRouter, Switch } from "react-router-dom";
import { Suspense } from "react";
import Loading from "./component/Loading";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    </Switch>
  </BrowserRouter>,
  document.getElementById("app")
);
