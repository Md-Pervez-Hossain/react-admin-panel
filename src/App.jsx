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
        <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
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
