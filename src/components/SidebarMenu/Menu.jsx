import { RxDashboard } from "react-icons/rx";

import { FiUsers } from "react-icons/fi";

export const menuData = {
  menu: [
    {
      name: "Dashboard",
      icon: RxDashboard,
      path: "/dashboard",
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
