import { GoHome } from "react-icons/go";
import { RxDashboard } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineSms } from "react-icons/md";
import { GoHistory } from "react-icons/go";
import { MdOutlineSignalWifiStatusbarNull } from "react-icons/md";
import { PiDeviceRotate } from "react-icons/pi";
import { PiRssSimple } from "react-icons/pi";
import { FiUsers } from "react-icons/fi";
export const menuData = {
  menu: [
    {
      name: "Dashboard",
      icon: RxDashboard,
      path: "/",
      subItems: [],
    },
    // {
    //   name: "Users",
    //   icon: FaRegUser,
    //   path: "/users",
    //   subItems: [],
    // },
    {
      name: "Clients",
      icon: FiUsers,
      path: "",
      subItems: [
        { name: "Api Clients", path: "/clients/api-clients" },
        { name: "Bulk SMS Clients", path: "/clients/bulk-sms-clients" },
      ],
    },

    {
      name: "Sms",
      icon: MdOutlineSms,
      path: "/sms",
      subItems: [],
    },
    {
      name: "History",
      icon: GoHistory,
      path: "/history",
      subItems: [],
    },
    {
      name: "Status",
      icon: MdOutlineSignalWifiStatusbarNull,
      path: "/status",
      subItems: [],
    },
    {
      name: "Device",
      icon: PiDeviceRotate,
      path: "/device",
      subItems: [],
    },
    {
      name: "Sim",
      icon: PiRssSimple,
      path: "/sim",
      subItems: [],
    },
  ],
};
