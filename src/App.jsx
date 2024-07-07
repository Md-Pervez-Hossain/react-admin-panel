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
import AddUser from "./page/User/AddUser";
import ProductDetails from "./page/Product/ProductDetails";
import EditProduct from "./page/Product/EditProduct";
import EditUser from "./page/User/EditUser";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(
    localStorage.getItem("isMenuOpen") === "true"
  );

  useEffect(() => {
    localStorage.setItem("isMenuOpen", isMenuOpen);
  }, [isMenuOpen]);

  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: "/",
          element: <Layout />,
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

  function Layout() {
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
      <div className="flex">
        <div className=" sticky top-0">
          <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
        <div className="flex-1">
          <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          <div className="min-h-[calc(100vh-92px)]   bg-zinc-50 p-8">
            <Outlet />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
