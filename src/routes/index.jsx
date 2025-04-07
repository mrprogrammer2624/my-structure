import React from "react";
import { createBrowserRouter, NavLink, Outlet } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { AuthLayout, WebLayout } from "@/layouts";
import { Home, Login } from "@/pages";

const BoilerPlateRoute = createBrowserRouter(
  /* All Paths */
  [
    {
      path: "/",
      children: [
        /* Website */
        {
          element: <WebLayout />,
          children: [
            {
              index: true,
              element: <Home />,
            },
          ],
        },
        /* AuthCation */
        {
          element: (
            <ProtectedRoute>
              <AuthLayout />
            </ProtectedRoute>
          ),
          children: [
            {
              path: "login",
              element: <Login />,
            },
          ],
        },
        /* Admin */
        {
          path: "admin",
          element: (
            <ProtectedRoute>
              <Outlet />
            </ProtectedRoute>
          ),
          children: [
            {
              index: true,
              element: " <AdminDashboard />",
            },
          ],
        },
      ],
    },
    {
      /* Default Route (404) */
      path: "*",
      element: <>404 - Page Not Found</>,
    },
  ],
  {
    /* Base URL */
    basename: "/",
  }
);

export default BoilerPlateRoute;
