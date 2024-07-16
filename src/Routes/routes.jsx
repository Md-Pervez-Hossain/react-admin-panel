// src/routes.js
import { createBrowserRouter } from "react-router-dom";
import Login from "../page/Login/Login";

import Dashboard from "../page/Dashboard/Dashboard";
import Layout from "../Layout/Layout";
import Signup from "../page/Signup/Signup";
import Users from "../page/Users/Users";
import Sms from "../page/Sms/Sms";
import History from "../page/History/History";
import Status from "../page/Status/Status";
import Device from "../page/Device/Device";
import Sim from "../page/Sim/Sim";
import ApiClients from "../page/Clients/ApiClients/ApiClients";
import BulkSmsClients from "../page/Clients/BulkSmsClients/BulkSmsClients";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/clients/api-clients", element: <ApiClients /> },
      { path: "/clients/bulk-sms-clients", element: <BulkSmsClients /> },
      { path: "/users", element: <Users /> },
      { path: "/sms", element: <Sms /> },
      { path: "/history", element: <History /> },
      { path: "/status", element: <Status /> },
      { path: "/device", element: <Device /> },
      { path: "/sim", element: <Sim /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
]);

export default router;
