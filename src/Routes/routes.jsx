// src/routes.js
import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home/Home";
import Product from "../page/Product/Product";
import Login from "../page/Login/Login";
import Registration from "../page/RegistrationPage/Registration";
import User from "../page/User/User";
import Dashboard from "../page/Dashboard/Dashboard";
import Settings from "../page/Settings/Settings";
import ProductDetails from "../page/Product/ProductDetails";
import EditProduct from "../page/Product/EditProduct";
import EditUser from "../page/User/EditUser";
import Profile from "../page/Profile/Profile";
import Layout from "../Layout/Layout";
import { AnimatePresence } from "framer-motion";
import Signup from "../page/Signup/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/home", element: <Home /> },
      { path: "/user", element: <User /> },
      {
        path: "/profile",
        element: (
          <AnimatePresence mode="wait">
            <Profile />
          </AnimatePresence>
        ),
      },
      { path: "/user/edit-user/:id", element: <EditUser /> },
      { path: "/product/product-details", element: <ProductDetails /> },
      { path: "/product/edit-product", element: <EditProduct /> },
      { path: "/settings", element: <Settings /> },
      { path: "/product", element: <Product /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/registration", element: <Registration /> },
]);

export default router;
