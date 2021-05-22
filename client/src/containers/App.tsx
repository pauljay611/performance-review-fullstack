import * as React from "react";
import styld from "styled-components";
import { Provider } from "react-redux";

import store from "../store";

import "../style/reset.css";
import "../style/global.css";
import { renderRoutes } from "react-router-config";
import routes from "../router";

const Layout = styld.div`
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  position: relative;
`;

const Wrapper = styld.div`
  width: 100%;
  height: 100%;
`;

const App: React.FC = () => (
  <Provider store={store}>
    <Layout>
      <Wrapper>{renderRoutes(routes)}</Wrapper>
    </Layout>
  </Provider>
);

export default App;
