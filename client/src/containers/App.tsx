import * as React from "react";
import styld from "styled-components";
import { Provider } from "react-redux";

import Coupon from "./Coupon";
import Map from "./Map";

import store from "../store";

import "../style/reset.css";
import "../style/global.css";
import { renderRoutes } from "react-router-config";
import routes from "../router";

const Layout = styld.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  border: 1px solid black;
  overflow: scroll;
`;

const Wrapper = styld.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
`;

const App: React.FC = () => (
  <Layout>
    <div>header</div>
    <Wrapper>{renderRoutes(routes)}</Wrapper>
  </Layout>
);

export default App;
