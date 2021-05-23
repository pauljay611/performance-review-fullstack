import React from "react";
import { renderRoutes, RouteConfigComponentProps } from "react-router-config";
import Header from "../../component/Header";
import styled from "styled-components";
import { usePageGuard } from "../../hooks/usePageGuard";

const Container = styled.div`
  height: 90%;
`;

const Wrapper = styled.div`
  height: 100%;
`;

const Employee: React.FC<RouteConfigComponentProps> = ({ route }) => {
  const routes = route?.routes ?? [];
  usePageGuard();
  const paths = routes.map((route) => ({
    name: route.name ?? "",
    path: route.path ?? "",
  }));

  function renderPages() {
    if (!route) return null;
    return <Container>{renderRoutes(route.routes)}</Container>;
  }

  return (
    <Wrapper>
      <Header paths={paths} />
      {renderPages()}
    </Wrapper>
  );
};

export default Employee;
