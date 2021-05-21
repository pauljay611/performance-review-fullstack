import React from "react";
import ReactDOM from "react-dom";

import App from "./containers/App";
import { BrowserRouter, Switch } from "react-router-dom";
import { Suspense } from "react";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Suspense fallback={<div>Loading... </div>}>
        <App />
      </Suspense>
    </Switch>
  </BrowserRouter>,
  document.getElementById("app")
);
