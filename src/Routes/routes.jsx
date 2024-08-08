import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../page/Login/Login";
import Dashboard from "../page/Dashboard/Dashboard";
import Layout from "../Layout/Layout";
import Signup from "../page/Signup/Signup";
import Device from "../page/Device/Device";
import Sim from "../page/Sim/Sim";
import ApiClients from "../page/Clients/ApiClients/ApiClients";
import BulkSmsClients from "../page/Clients/BulkSmsClients/BulkSmsClients";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Profile from "../page/Profile/Profile";
import ApiClientsHistory from "../page/History/ApiClientsHistory/ApiClientsHistory";
import BulkSmsClientHistory from "../page/History/BulkSmsClientHistory/BulkSmsClientHistory";
import BulkSmsClientsHistoryDetails from "../page/History/BulkSmsClientHistory/BulkSmsClientsHistoryDetails";
import Status from "../page/Status/BulkSmsStatus/BulkSmsStatus";
import BulkSmsStatus from "../page/Status/BulkSmsStatus/BulkSmsStatus";
import BulkSmsStatusDetails from "../page/Status/BulkSmsStatus/BulkSmsStatusDetails";

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
        element: <Dashboard />,
      },
      {
        path: "/clients/api-clients",
        element: <ApiClients />,
      },
      {
        path: "/clients/bulk-sms-clients",
        element: <BulkSmsClients />,
      },
      {
        path: "/device",
        element: <Device />,
      },
      {
        path: "/sim",
        element: <Sim />,
      },
      {
        path: "/api-clients-history",
        element: <ApiClientsHistory />,
      },
      {
        path: "/bulk-sms-clients-history",
        element: <BulkSmsClientHistory />,
      },
      {
        path: `/bulk-sms-clients-history/:id`,
        element: <BulkSmsClientsHistoryDetails />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/status",
        element: <BulkSmsStatus />,
      },
      {
        path: "/status/:id",
        element: <BulkSmsStatusDetails />,
      },
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
