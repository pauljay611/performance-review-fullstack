import React from "react";
import styld from "styled-components";
import { renderRoutes } from "react-router-config";

import "../style/reset.css";
import "../style/global.css";
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

const App: React.FC = () => {
  return (
    <Layout>
      <Wrapper>{renderRoutes(routes)}</Wrapper>
    </Layout>
  );
};

export default App;
