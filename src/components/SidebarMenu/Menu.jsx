import { FaRegUser } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { RxDashboard } from "react-icons/rx";

export const menuData = {
  menu: [
    {
      name: "Dashboard",
      icon: RxDashboard,
      path: "/",
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
      path: "/profile",
      subItems: [
        { name: "Product", path: "/product" },
        { name: "User", path: "/user" },
      ],
    },
  ],
};
