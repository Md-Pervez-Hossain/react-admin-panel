import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { FaRegUser } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { GoDot } from "react-icons/go";
import Logo from "../Logo/Logo";

const menuData = {
  menu: [
    {
      name: "Dashboard",
      icon: RxDashboard,
      path: "/dashboard",
      subItems: [],
    },
    {
      name: "Home",
      icon: GoHome,
      path: "/home",
      subItems: [],
    },
    {
      name: "Profile",
      icon: FaRegUser,
      path: "/",
      subItems: [
        {
          name: "User",
          path: "/user",
        },
        {
          name: "Product",
          path: "/product",
        },
      ],
    },
  ],
};

const Menu = ({ isMenuOpen }) => {
  const location = useLocation();
  const [expandedMenu, setExpandedMenu] = useState(null);
  const [activeMainItem, setActiveMainItem] = useState(null);
  const [activeSubItem, setActiveSubItem] = useState(null);

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

  const handleMainItemClick = (index) => {
    setExpandedMenu(expandedMenu === index ? null : index);
    setActiveMainItem(index);
    setActiveSubItem(null);
  };

  const handleSubItemClick = (mainIndex, subIndex) => {
    setActiveMainItem(mainIndex);
    setActiveSubItem(subIndex);
  };

  return (
    <>
      {isMenuOpen && (
        <div className="flex flex-col min-h-screen bg-white font-poppins font-normal text-[18px]">
          <div className="sticky top-0 z-10 bg-white py-6 px-10">
            <Logo />
          </div>
          <div className="flex-1 overflow-y-auto py-6 px-10">
            <div className="flex flex-col gap-8">
              {menuData.menu.map((item, index) => (
                <div key={index}>
                  <div
                    onClick={() => handleMainItemClick(index)}
                    className={`flex items-center gap-3 cursor-pointer ${
                      activeMainItem === index
                        ? "text-primary bg-zinc-50 p-3 font-semibold rounded-md"
                        : ""
                    }`}
                  >
                    <Link to={item.path} className="flex items-center gap-3">
                      <span>{<item.icon />}</span>
                      {item.name}
                    </Link>
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
                          onClick={() => handleSubItemClick(index, subIndex)}
                          className={`flex items-center gap-2 bg-zinc-50 p-3 rounded-md ${
                            activeMainItem === index &&
                            activeSubItem === subIndex
                              ? "text-primary bg-zinc-50 p-3 font-semibold"
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
      )}
    </>
  );
};

export default Menu;
