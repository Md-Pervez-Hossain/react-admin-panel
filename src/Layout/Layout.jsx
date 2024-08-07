// src/Layout.jsx
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import SidebarMenu from "../components/SidebarMenu/SidebarMenu";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isdesktopSidebarOpen, setIsdesktopSidebarOpen] = useState(true);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toogleDesktopSidebar = () => {
    setIsdesktopSidebarOpen(!isdesktopSidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar for Desktop */}
      <motion.div
        className="hidden lg:flex overflow-y-auto scrollbar-hide"
        initial={{ width: "250px" }}
        animate={{ width: isdesktopSidebarOpen ? "250px" : "0px" }}
        transition={{ duration: 0.3 }}
      >
        <SidebarMenu
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          isdesktopSidebarOpen={isdesktopSidebarOpen}
          setIsdesktopSidebarOpen={setIsdesktopSidebarOpen}
        />
      </motion.div>

      {/* Sidebar for Mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 z-50 overflow-y-auto"
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.3 }}
          >
            <SidebarMenu
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <motion.div
        className="flex-1 flex flex-col overflow-hidden"
        initial={{ width: "calc(100% - 250px)" }}
        animate={{
          width: isdesktopSidebarOpen ? "calc(100% - 250px)" : "100%",
        }}
        transition={{ duration: 0.3 }}
      >
        <Header
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          isdesktopSidebarOpen={isdesktopSidebarOpen}
          toogleDesktopSidebar={toogleDesktopSidebar}
        />
        <div className="flex-1 bg-zinc-50 overflow-auto">
          <Outlet />
        </div>
      </motion.div>
    </div>
  );
};

export default Layout;
