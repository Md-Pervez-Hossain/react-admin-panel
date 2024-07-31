// src/routes.js
import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../page/Login/Login";
import Dashboard from "../page/Dashboard/Dashboard";
import Layout from "../Layout/Layout";
import Signup from "../page/Signup/Signup";
// import Users from "../page/Users/Users";
// import Sms from "../page/Sms/Sms";
import History from "../page/History/History";
// import Status from "../page/Status/Status";
import Device from "../page/Device/Device";
import Sim from "../page/Sim/Sim";
import ApiClients from "../page/Clients/ApiClients/ApiClients";
import BulkSmsClients from "../page/Clients/BulkSmsClients/BulkSmsClients";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

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
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/clients/api-clients",
        element: (
          <PrivateRoute>
            <ApiClients />
          </PrivateRoute>
        ),
      },
      {
        path: "/clients/bulk-sms-clients",
        element: (
          <PrivateRoute>
            <BulkSmsClients />
          </PrivateRoute>
        ),
      },
      {
        path: "/device",
        element: (
          <PrivateRoute>
            <Device />
          </PrivateRoute>
        ),
      },
      {
        path: "/sim",
        element: (
          <PrivateRoute>
            <Sim />
          </PrivateRoute>
        ),
      },
      {
        path: "/history",
        element: (
          <PrivateRoute>
            <History />
          </PrivateRoute>
        ),
      },
      // { path: "/users", element: <PrivateRoute element={<Users />} /> },
      // { path: "/sms", element: <PrivateRoute element={<Sms />} /> },
      // { path: "/history", element: <PrivateRoute element={<History />} /> },
      // { path: "/status", element: <PrivateRoute element={<Status />} /> },
      // { path: "/device", element: <PrivateRoute element={} /> },
      // { path: "/sim", element: <PrivateRoute element={<Sim />} /> },
    ],
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: "/signup",
    element: (
      <PublicRoute>
        <Signup />
      </PublicRoute>
    ),
  },
  { path: "*", element: <Navigate to="/" /> },
]);

export default router;
