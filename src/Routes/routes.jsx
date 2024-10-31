import { createBrowserRouter, Navigate } from "react-router-dom";
import Dashboard from "../page/Dashboard/Dashboard";
import Layout from "../Layout/Layout";
import PublicRoute from "./PublicRoute";
import Auth from "../page/Login/Auth";
import Profile from "../page/Profile/Profile";
import PrivateRoute from "./PrivateRoute";
import ColorManage from "../page/ColorManage/ColorManage";
import HeaderManage from "../page/HeaderManage/HeaderManage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/color-manage",
        element: <ColorManage />,
      },
      {
        path: "/header-manage",
        element: <HeaderManage />,
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
