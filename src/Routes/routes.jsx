import { createBrowserRouter, Navigate } from "react-router-dom";
import Dashboard from "../page/Dashboard/Dashboard";
import Layout from "../Layout/Layout";
import ApiClients from "../page/Clients/ApiClients/ApiClients";
import PublicRoute from "./PublicRoute";
import Auth from "../page/Login/Auth";
import Profile from "../page/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      // <PrivateRoute>
      <Layout />
      // </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/employ/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <Auth />
      </PublicRoute>
    ),
  },

  { path: "*", element: <Navigate to="/" /> },
]);

export default router;
