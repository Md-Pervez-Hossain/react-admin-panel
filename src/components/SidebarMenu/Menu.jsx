import { RxDashboard } from "react-icons/rx";
import { GoHistory } from "react-icons/go";
import { PiDeviceRotate } from "react-icons/pi";
import { FiUsers } from "react-icons/fi";
import { MdOutlineSignalWifiStatusbarNull } from "react-icons/md";

export const menuData = {
  menu: [
    {
      name: "Dashboard",
      icon: RxDashboard,
      path: "/dashboard",
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

    // {
    //   name: "Sms",
    //   icon: MdOutlineSms,
    //   path: "/sms",
    //   subItems: [],
    // },

    // {
    //   name: "Status",
    //   icon: MdOutlineSignalWifiStatusbarNull,
    //   path: "/status",
    //   subItems: [],
    // },
    {
      name: "Device",
      icon: PiDeviceRotate,
      path: "/device",
      subItems: [],
    },
    {
      name: "Status",
      icon: MdOutlineSignalWifiStatusbarNull,
      path: "/status",
      subItems: [],
    },
    {
      name: "History",
      icon: GoHistory,
      path: "",
      subItems: [
        { name: "Api Clients History", path: "/api-clients-history" },
        { name: "Bulk SMS History", path: "/bulk-sms-clients-history" },
      ],
    },
    // {
    //   name: "Sim",
    //   icon: PiRssSimple,
    //   path: "/sim",
    //   subItems: [],
    // },
  ],
};
