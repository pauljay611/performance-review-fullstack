import React from "react";

const routes = [
  {
    path: "/",
    exact: true,
    component: React.lazy(() => import("../containers/Login")),
  },
  {
    path: "/admin",
    component: React.lazy(() => import("../containers/Admin")),
    routes: [
      {
        path: "/admin/employees",
        component: React.lazy(() => import("../containers/Admin/Employees")),
      },
      {
        path: "/admin/reviews",
        component: React.lazy(() => import("../containers/Admin/Reviews")),
      },
    ],
  },
  {
    path: "/employee",
    component: React.lazy(() => import("../containers/Employee")),
    routes: [
      {
        path: "/employee/feedbacks",
        component: React.lazy(() => import("../containers/Employee/Feedbacks")),
      },
      {
        path: "/employee/reviews",
        component: React.lazy(() => import("../containers/Employee/Reviews")),
      },
    ],
  },
];

export default routes;
