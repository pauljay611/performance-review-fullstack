import React from "react";

const routes = [
  {
    path: "/",
    exact: true,
    name: "Login",
    component: React.lazy(() => import("../containers/Login")),
  },
  {
    path: "/admin",
    component: React.lazy(() => import("../containers/Admin")),
    name: "Admin",
    routes: [
      {
        path: "/admin/",
        exact: true,
        name: "Main",
        component: React.lazy(() => import("../containers/Admin/Employees")),
      },
      {
        path: "/admin/employees",
        name: "Employees",
        component: React.lazy(() => import("../containers/Admin/Employees")),
      },
      {
        path: "/admin/reviews",
        name: "Reviews",
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
        name: "Feedbacks",
        component: React.lazy(() => import("../containers/Employee/Feedbacks")),
      },
      {
        path: "/employee/reviews",
        name: "Reviews",
        component: React.lazy(() => import("../containers/Employee/Reviews")),
      },
    ],
  },
];

export default routes;
