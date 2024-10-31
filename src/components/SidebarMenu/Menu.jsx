import { RxDashboard } from "react-icons/rx";

import { FiUsers } from "react-icons/fi";
import { IoColorFillSharp } from "react-icons/io5";
export const menuData = {
  menu: [
    {
      name: "Dashboard",
      icon: RxDashboard,
      path: "/",
      subItems: [],
    },
    {
      name: "Color Manage",
      icon: IoColorFillSharp,
      path: "/color-manage",
      subItems: [],
    },
    {
      name: "Header Manage",
      icon: IoColorFillSharp,
      path: "/header-manage",
      subItems: [],
    },

    {
      name: "Employ Manage",
      icon: FiUsers,
      path: "",
      subItems: [
        { name: "Profile", path: "/employ/profile" },
        // { name: "Attendance ", path: "/employ/attendance" },
        // { name: "Application ", path: "/employ/application" },
      ],
    },
  ],
};
