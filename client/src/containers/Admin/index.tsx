import React from "react";
import { renderRoutes, RouteConfigComponentProps } from "react-router-config";
import Header from "../../component/Header";

const Admin: React.FC<RouteConfigComponentProps> = ({ route }) => {
  const routes = route?.routes ?? [];

  const paths = routes.map((route) => ({
    name: route.name ?? "",
    path: route.path ?? "",
  }));

  function renderPages() {
    if (!route) return null;
    return <div>{renderRoutes(route.routes)}</div>;
  }

  return (
    <div>
      <Header paths={paths} />
      {renderPages()}
    </div>
  );
};

export default Admin;
