import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowDown,
  MdLogout,
} from "react-icons/md";

import { GoDot } from "react-icons/go";
import { menuData } from "./Menu";
import { IoIosArrowForward } from "react-icons/io";
import useClickOutside from "../../../hooks/useClickOutside";
import { FaRegUser } from "react-icons/fa";

const SidebarMenu = ({ isMenuOpen, setIsMenuOpen }) => {
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

  const handleProfileLinkClick = () => {
    setIsMenuOpen(false); // Close sidebar
    setIsPopoverOpen(false); // Close profile popover
  };

  return (
    <>
      {/* Desktop version sidebar */}
      <div className="hidden lg:flex flex-col min-h-screen bg-white font-poppins font-normal text-[20px] sticky top-0 z-50 p-4 min-w-[250px]  border-r-2 border-r-primary/10">
        <div className="flex-1 overflow-y-auto scrollbar-hide p-4">
          <div className="flex flex-col gap-8">
            {menuData.menu.map((item, index) => (
              <div key={index}>
                <div
                  onClick={() => handleMainItemClick(index, item.path)}
                  className={`flex items-center gap-3 cursor-pointer ${
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

                {expandedMenu === index && item.subItems.length > 0 && (
                  <div className="flex flex-col gap-3 pl-8 mt-5">
                    {item.subItems.map((subItem, subIndex) => (
                      <Link
                        to={subItem.path}
                        key={subIndex}
                        onClick={(e) => handleSubItemClick(index, subIndex, e)}
                        className={`flex items-center gap-2 bg-primary/10 p-3 rounded-md ${
                          activeMainItem === index && activeSubItem === subIndex
                            ? "text-primary bg-primary/10 p-3 font-semibold"
                            : ""
                        }`}
                      >
                        <GoDot /> {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile version sidebar */}
      {isMenuOpen && (
        <div className="lg:hidden pt-[100px] flex flex-col min-h-screen overflow-y-auto bg-white font-poppins font-normal text-[18px] absolute z-50 min-w-[250px] p-4  ">
          <div
            className="flex items-center gap-3 mb-8"
            onClick={handleProfileClick}
          >
            <img
              src="../../../public/assets/avatar.png"
              alt=""
              className="w-[64px] h-[65px] rounded-full p-2 bg-primary/10"
            />
            <h2 className="font-poppins font-normal text-[20px] flex items-center gap-2">
              Admin{" "}
              <span>
                <IoIosArrowForward className="text-[16px]" />
              </span>
            </h2>
          </div>
          {isPopoverOpen && (
            <div
              className="absolute mt-[80px] w-48 bg-white border-2 right-[35px] border-primary/10 rounded-lg shadow-lg z-10"
              ref={popoverRef}
            >
              <div className="flex flex-col items-start gap-3 p-4 font-poppins font-normal text-base">
                <Link onClick={handleProfileLinkClick} to="./profile">
                  <button className="flex items-center gap-3">
                    <FaRegUser /> <span>Profile</span>
                  </button>
                </Link>
                <button className="flex items-center gap-3">
                  <MdLogout /> <span>Logout</span>
                </button>
              </div>
            </div>
          )}
          <div className="flex flex-col gap-8 ">
            {menuData.menu.map((item, index) => (
              <div key={index}>
                <div
                  onClick={() => handleMainItemClick(index, item.path)}
                  className={`flex items-center gap-3 cursor-pointer ${
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

                {expandedMenu === index && item.subItems.length > 0 && (
                  <div className="flex flex-col gap-3 pl-8 mt-5">
                    {item.subItems.map((subItem, subIndex) => (
                      <Link
                        to={subItem.path}
                        key={subIndex}
                        onClick={(e) => handleSubItemClick(index, subIndex, e)}
                        className={`flex items-center gap-2 bg-primary/10 p-3 rounded-md ${
                          activeMainItem === index && activeSubItem === subIndex
                            ? "text-primary bg-primary/10 p-3 font-semibold"
                            : ""
                        }`}
                      >
                        <GoDot /> {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SidebarMenu;