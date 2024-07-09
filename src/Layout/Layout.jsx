// src/Layout.jsx
import { Outlet } from "react-router-dom";

import { useState } from "react";
import Header from "../components/Header/Header";
import SidebarMenu from "../components/SidebarMenu/SidebarMenu";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar for Desktop */}
      <div className="hidden lg:flex overflow-y-auto scrollbar-hide">
        <SidebarMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>

      {/* Sidebar for Mobile */}
      {isMenuOpen && (
        <div>
          <div className="lg:hidden fixed inset-0 z-50 overflow-y-auto">
            <SidebarMenu
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
            />
          </div>
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
};

export default Layout;
