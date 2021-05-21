import React from "react";
import { renderRoutes, RouteConfigComponentProps } from "react-router-config";

const Admin: React.FC<RouteConfigComponentProps> = ({ route }) => {
  function renderPages() {
    if (!route) return null;
    return <div>{renderRoutes(route.routes)}</div>;
  }

  return (
    <div>
      admin
      {renderPages()}
    </div>
  );
};

export default Admin;
