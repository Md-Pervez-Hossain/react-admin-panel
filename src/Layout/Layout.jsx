// src/Layout.jsx
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header/Header";
import SidebarMenu from "../components/SidebarMenu/SidebarMenu";
import { AnimatePresence, motion } from "framer-motion";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isdesktopSidebarOpen, setIsdesktopSidebarOpen] = useState(true);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toogleDesktopSidebar = () => {
    setIsdesktopSidebarOpen(!isdesktopSidebarOpen);
  };

  return (
    <AnimatePresence>
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
    </AnimatePresence>
  );
};

export default Layout;
