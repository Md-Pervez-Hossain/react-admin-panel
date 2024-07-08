import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./page/Home/Home";
import Product from "./page/Product/Product";
import Login from "./page/Login/Login";
import Registration from "./page/RegistrationPage/Registration";
import User from "./page/User/User";
import Dashboard from "./page/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Settings from "./page/Settings/Settings";
import ProductDetails from "./page/Product/ProductDetails";
import EditProduct from "./page/Product/EditProduct";
import EditUser from "./page/User/EditUser";
import "./index.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: "/",
          element: (
            <Layout setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
          ),
          children: [
            { path: "/dashboard", element: <Dashboard /> },
            { path: "/home", element: <Home /> },
            { path: "/user", element: <User /> },
            { path: "/user/edit-user/:id", element: <EditUser /> },
            { path: "/product/product-details", element: <ProductDetails /> },
            { path: "/product/edit-product", element: <EditProduct /> },
            { path: "/settings", element: <Settings /> },
            { path: "/product", element: <Product /> },
          ],
        },
        { path: "/login", element: <Login /> },
        { path: "/registration", element: <Registration /> },
      ])}
    />
  );
}

function Layout({ setIsMenuOpen, isMenuOpen }) {
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar for Desktop */}
      <div className="hidden lg:flex flex-col w-64 bg-white overflow-y-auto scrollbar-hide example">
        <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>

      {/* Sidebar for Mobile */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="flex flex-col w-64 bg-white overflow-y-auto example">
            <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          </div>
          <div
            className="flex-grow"
            onClick={toggleMenu}
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          />
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <div className="flex-1 bg-zinc-50 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
