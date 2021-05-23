import * as React from "react";
import styld from "styled-components";

import "../style/reset.css";
import "../style/global.css";
import { renderRoutes } from "react-router-config";
import routes from "../router";

import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useUser } from "../hooks/user";

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
  const history = useHistory();
  const { currentUser, loading, error } = useUser();
  useEffect(() => {
    if (loading) return;
    if (currentUser && currentUser.is_admin) {
      history.push("/admin");
      return;
    }
    if (currentUser && !currentUser.is_admin) {
      history.push("/employee");
      return;
    }
    history.push("/");
  }, [currentUser, error, loading, history]);

  return (
    <Layout>
      <Wrapper>{renderRoutes(routes)}</Wrapper>
    </Layout>
  );
};

export default App;
