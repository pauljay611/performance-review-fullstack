import React from "react";
import { renderRoutes, RouteConfigComponentProps } from "react-router-config";

const Employee: React.FC<RouteConfigComponentProps> = ({ route }) => {
  function renderPages() {
    if (!route) return null;
    return <div>{renderRoutes(route.routes)}</div>;
  }

  return (
    <div>
      employee
      {renderPages()}
    </div>
  );
};

export default Employee;
