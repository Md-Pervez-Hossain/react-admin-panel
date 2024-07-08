import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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

// Define your menu data
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
      path: "/user",
      subItems: [
        { name: "User", path: "/user" },
        { name: "Product", path: "/product" },
      ],
    },
    {
      name: "Profile",
      icon: FaRegUser,
      path: "/user",
      subItems: [
        { name: "User", path: "/user" },
        { name: "Product", path: "/product" },
      ],
    },
    {
      name: "Profile",
      icon: FaRegUser,
      path: "/user",
      subItems: [
        { name: "User", path: "/user" },
        { name: "Product", path: "/product" },
      ],
    },
    {
      name: "Profile",
      icon: FaRegUser,
      path: "/user",
      subItems: [
        { name: "User", path: "/user" },
        { name: "Product", path: "/product" },
      ],
    },
    {
      name: "Profile",
      icon: FaRegUser,
      path: "/user",
      subItems: [
        { name: "User", path: "/user" },
        { name: "Product", path: "/product" },
      ],
    },
    {
      name: "Profile",
      icon: FaRegUser,
      path: "/user",
      subItems: [
        { name: "User", path: "/user" },
        { name: "Product", path: "/product" },
      ],
    },
    {
      name: "Profile",
      icon: FaRegUser,
      path: "/user",
      subItems: [
        { name: "User", path: "/user" },
        { name: "Product", path: "/product" },
      ],
    },
    {
      name: "Profile",
      icon: FaRegUser,
      path: "/user",
      subItems: [
        { name: "User", path: "/user" },
        { name: "Product", path: "/product" },
      ],
    },
    {
      name: "Profile",
      icon: FaRegUser,
      path: "/user",
      subItems: [
        { name: "User", path: "/user" },
        { name: "Product", path: "/product" },
      ],
    },
    {
      name: "Profile",
      icon: FaRegUser,
      path: "/user",
      subItems: [
        { name: "User", path: "/user" },
        { name: "Product", path: "/product" },
      ],
    },
    {
      name: "Profile",
      icon: FaRegUser,
      path: "/user",
      subItems: [
        { name: "User", path: "/user" },
        { name: "Product", path: "/product" },
      ],
    },
    {
      name: "Profile",
      icon: FaRegUser,
      path: "/user",
      subItems: [
        { name: "User", path: "/user" },
        { name: "Product", path: "/product" },
      ],
    },
    {
      name: "Profile",
      icon: FaRegUser,
      path: "/user",
      subItems: [
        { name: "User", path: "/user" },
        { name: "Product", path: "/product" },
      ],
    },
    {
      name: "Profile",
      icon: FaRegUser,
      path: "/user",
      subItems: [
        { name: "User", path: "/user" },
        { name: "Product", path: "/product" },
      ],
    },
    {
      name: "Profile",
      icon: FaRegUser,
      path: "/user",
      subItems: [
        { name: "User", path: "/user" },
        { name: "Product", path: "/product" },
      ],
    },
    {
      name: "Profile",
      icon: FaRegUser,
      path: "/user",
      subItems: [
        { name: "User", path: "/user" },
        { name: "Product", path: "/product" },
      ],
    },
    {
      name: "Profile",
      icon: FaRegUser,
      path: "/user",
      subItems: [
        { name: "User", path: "/user" },
        { name: "Product", path: "/product" },
      ],
    },
    {
      name: "Profile",
      icon: FaRegUser,
      path: "/user",
      subItems: [
        { name: "User", path: "/user" },
        { name: "Product", path: "/product" },
      ],
    },
    {
      name: "Profile",
      icon: FaRegUser,
      path: "/user",
      subItems: [
        { name: "User", path: "/user" },
        { name: "Product", path: "/product" },
      ],
    },
    {
      name: "Profile",
      icon: FaRegUser,
      path: "/user",
      subItems: [
        { name: "User", path: "/user" },
        { name: "Product", path: "/product" },
      ],
    },
    {
      name: "Profile",
      icon: FaRegUser,
      path: "/user",
      subItems: [
        { name: "User", path: "/user" },
        { name: "Product", path: "/product" },
      ],
    },
    {
      name: "Profile",
      icon: FaRegUser,
      path: "/user",
      subItems: [
        { name: "User", path: "/user" },
        { name: "Product", path: "/product" },
      ],
    },
    {
      name: "Profile",
      icon: FaRegUser,
      path: "/user",
      subItems: [
        { name: "User", path: "/user" },
        { name: "Product", path: "/product" },
      ],
    },
    {
      name: "Settings",
      icon: IoSettingsOutline,
      path: "/settings",
      subItems: [],
    },
    // Add more menu items as needed
  ],
};

const Menu = ({ isMenuOpen, setIsMenuOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();
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

  const handleMainItemClick = (index, path) => {
    if (menuData.menu[index].subItems.length === 0) {
      setIsMenuOpen(false); // Close sidebar if no sub-items
      navigate(path); // Navigate to the clicked menu item
    } else {
      // Check if clicking on the same main item to toggle expansion
      if (expandedMenu === index) {
        setExpandedMenu(null); // Collapse menu if already expanded
      } else {
        setExpandedMenu(index);
      }
      setActiveMainItem(index);
      setActiveSubItem(null);
      // Don't toggle the sidebar state here
    }
  };

  const handleSubItemClick = (mainIndex, subIndex, e) => {
    e.stopPropagation(); // Prevent event propagation to avoid closing the sidebar

    setActiveMainItem(mainIndex);
    setActiveSubItem(subIndex);
    setIsMenuOpen(false); // Close sidebar after clicking sub-item
  };

  return (
    <>
      {/* Desktop version sidebar */}
      <div className="hidden lg:flex flex-col min-h-screen bg-white font-poppins font-normal text-[18px] sticky top-0 z-50">
        <div className="flex-1 overflow-y-auto p-4 min-w-[250px]">
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
        <div className="lg:hidden flex flex-col min-h-screen overflow-y-auto bg-white font-poppins font-normal text-[18px] absolute z-50 w-72">
          <div className="flex flex-col gap-8 p-4 mt-[60px]">
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

export default Menu;
