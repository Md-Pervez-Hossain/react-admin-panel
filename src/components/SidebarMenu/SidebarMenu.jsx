import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowDown,
  MdLogout,
} from "react-icons/md";
import { GoDot } from "react-icons/go";
import { menuData } from "./Menu";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const SidebarMenu = ({ isMenuOpen, setIsMenuOpen, isdesktopSidebarOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [expandedMenu, setExpandedMenu] = useState(null);
  const [activeMainItem, setActiveMainItem] = useState(null);
  const [activeSubItem, setActiveSubItem] = useState(null);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const popoverRef = useRef(null);

  useEffect(() => {
    // Set the active menu item based on the current path
    menuData.menu.forEach((item, index) => {
      if (item.path === location.pathname) {
        setActiveMainItem(index);
        setExpandedMenu(index);
        setActiveSubItem(null);
      } else if (item.subItems.length > 0) {
        item.subItems.forEach((subItem, subIndex) => {
          if (subItem.path === location.pathname) {
            setActiveMainItem(index);
            setExpandedMenu(index);
            setActiveSubItem(subIndex);
          }
        });
      }
    });
  }, [location.pathname]);

  const handleMainItemClick = (index, path) => {
    if (menuData.menu[index].subItems.length === 0) {
      setIsMenuOpen(false); // Close sidebar if no sub-items
      navigate(path); // Navigate to the clicked menu item
    } else {
      // Toggle the expansion of the menu
      setExpandedMenu((prev) => (prev === index ? null : index));
      setActiveMainItem(index);
      setActiveSubItem(null);

      // Navigate to the main item path if it exists, or the first sub-item
      if (path) {
        navigate(path);
      } else if (menuData.menu[index].subItems.length > 0) {
        navigate(menuData.menu[index].subItems[0].path);
      }
    }
  };

  const handleSubItemClick = (mainIndex, subIndex, e) => {
    e.stopPropagation(); // Prevent event propagation to avoid closing the sidebar
    setActiveMainItem(mainIndex);
    setActiveSubItem(subIndex);
    setIsMenuOpen(false);
  };

  const handleProfileClick = () => {
    setIsPopoverOpen((prev) => !prev);
  };

  const handleProfileLinkClick = (path) => {
    setIsMenuOpen(false); // Close sidebar
    setIsPopoverOpen(false); // Close profile popover
    navigate(path); // Navigate to the profile page
  };

  const sidebarVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      x: "-100%",
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const menuVariants = {
    initial: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.3,
        delay: 0.2,
      },
    },
    animate: {
      opacity: 1,
      x: 0,
      height: "auto",
      transition: {
        duration: 0.3,
        delay: 0.2,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      x: -20,
      transition: {
        duration: 0.3,
      },
    },
  };

  const submenuVariants = {
    initial: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
    animate: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
  };

  const profilePopoverVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      transition: {
        duration: 0.3,
      },
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <>
      {/* Desktop version sidebar */}
      <AnimatePresence>
        {isdesktopSidebarOpen && (
          <motion.div
            className="hidden lg:flex flex-col min-h-screen bg-white font-poppins font-normal text-[20px] sticky top-0 z-50 p-4 min-w-[250px] border-r-2 border-r-primary/10"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={sidebarVariants}
          >
            <div className="flex-1 overflow-y-auto scrollbar-hide p-4">
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={menuVariants}
                className="flex flex-col gap-8"
              >
                {menuData.menu.map((item, index) => (
                  <div key={index}>
                    <div
                      onClick={() => handleMainItemClick(index, item.path)}
                      className={`flex items-center gap-3 cursor-pointer text-base ${
                        activeMainItem === index
                          ? "text-primary bg-primary/10 p-3 font-semibold rounded-md"
                          : ""
                      }`}
                    >
                      <span>{<item.icon />}</span>
                      {item.name}
                      {item.subItems.length > 0 && (
                        <span>
                          {expandedMenu === index ? (
                            <MdOutlineKeyboardArrowDown className="text-[24px]" />
                          ) : (
                            <MdOutlineKeyboardArrowRight className="text-[24px]" />
                          )}
                        </span>
                      )}
                    </div>

                    <AnimatePresence>
                      {expandedMenu === index && item.subItems.length > 0 && (
                        <motion.div
                          className="flex flex-col gap-3 pl-8 mt-3"
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          variants={submenuVariants}
                        >
                          {item.subItems.map((subItem, subIndex) => (
                            <Link
                              to={subItem.path}
                              key={subIndex}
                              onClick={(e) =>
                                handleSubItemClick(index, subIndex, e)
                              }
                              className={`flex items-center gap-2 bg-primary/10 p-3 rounded-md text-base ${
                                activeMainItem === index &&
                                activeSubItem === subIndex
                                  ? "text-primary bg-primary/10 p-3 font-semibold"
                                  : ""
                              }`}
                            >
                              <GoDot /> {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile version sidebar */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={sidebarVariants}
            className="lg:hidden border-r-2 border-r-primary/10 pt-[90px] flex flex-col min-h-screen overflow-y-auto bg-white font-poppins font-normal text-[18px] absolute z-50 min-w-[250px] p-4"
          >
            <div
              className="flex items-center gap-3  mb-5"
              onClick={handleProfileClick}
            >
              <img
                src="../../../public/assets/avatar.png"
                alt=""
                className="w-[50px] h-[50px] rounded-full p-2 bg-primary/10"
              />
              <h2 className="font-poppins font-normal text-[20px] flex items-center gap-2">
                Admin{" "}
                <span>
                  <IoIosArrowForward className="text-[16px]" />
                </span>
              </h2>
            </div>

            <AnimatePresence>
              {isPopoverOpen && (
                <motion.div
                  ref={popoverRef}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={profilePopoverVariants}
                  className="absolute mt-[60px] w-48 bg-white border-2 right-[42px] border-primary/10 rounded-lg shadow-md"
                >
                  <Link
                    to="/profile"
                    onClick={() => handleProfileLinkClick("/profile")}
                    className="flex items-center gap-2 p-3"
                  >
                    <FaRegUser /> Profile
                  </Link>

                  <Link
                    to="/logout"
                    onClick={() => handleProfileLinkClick("/logout")}
                    className="flex items-center gap-2 p-3"
                  >
                    <MdLogout /> Logout
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex-1 overflow-y-auto scrollbar-hide ">
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={menuVariants}
                className="flex flex-col gap-3"
              >
                {menuData.menu.map((item, index) => (
                  <div key={index}>
                    <div
                      onClick={() => handleMainItemClick(index, item.path)}
                      className={`flex items-center gap-3 cursor-pointer text-base ${
                        activeMainItem === index
                          ? "text-primary bg-primary/10 px-[6px] py-[4px] font-semibold rounded-md"
                          : ""
                      }`}
                    >
                      <span>{<item.icon />}</span>
                      {item.name}
                      {item.subItems.length > 0 && (
                        <span>
                          {expandedMenu === index ? (
                            <MdOutlineKeyboardArrowDown className="text-[24px]" />
                          ) : (
                            <MdOutlineKeyboardArrowRight className="text-[24px]" />
                          )}
                        </span>
                      )}
                    </div>

                    <AnimatePresence>
                      {expandedMenu === index && item.subItems.length > 0 && (
                        <motion.div
                          className="flex flex-col gap-3 pl-8 mt-3"
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          variants={submenuVariants}
                        >
                          {item.subItems.map((subItem, subIndex) => (
                            <Link
                              to={subItem.path}
                              key={subIndex}
                              onClick={(e) =>
                                handleSubItemClick(index, subIndex, e)
                              }
                              className={`flex items-center gap-2 bg-primary/10 p-3 rounded-md text-base ${
                                activeMainItem === index &&
                                activeSubItem === subIndex
                                  ? "text-primary bg-primary/10 p-3 font-semibold"
                                  : ""
                              }`}
                            >
                              <GoDot /> {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SidebarMenu;
