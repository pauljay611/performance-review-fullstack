import * as React from "react";
import styld from "styled-components";
import { Provider } from "react-redux";

import Coupon from "./Coupon";
import Map from "./Map";

import store from "../store";

import "../style/reset.css";
import "../style/global.css";

const Layout = styld.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  border: 1px solid black;
`;

const Wrapper = styld.div`
  width: 375px;
  height: 100%;
  padding: 1%;
  border: 1px solid black;
`;

const App: React.FC = () => (
  <Layout>
    <Wrapper>
      <Provider store={store}>
        <Coupon></Coupon>
        <Map></Map>
      </Provider>
    </Wrapper>
  </Layout>
);

export default App;
