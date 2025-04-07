import { createBrowserRouter } from "react-router-dom";

/* */
import { AdminDashboardAsideMenu, StyleguideAsideMenu } from "@/constants";

const demo = createBrowserRouter(
  /* All Paths */
  [
    {
      path: "/superadmin",
      children: [
        {
          element: <DashboardLayout />,
          children: [
            {
              index: true,
              element: <SuperDashboard />,
            },
          ],
        },
        {
          /* Authentication Routes For Super Admin */
          element: <AuthLayout />,
          children: [{ path: "login", element: <Login /> }],
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

export default demo;
