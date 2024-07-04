import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";

const Header = ({ isMenuOpen, toggleMenu }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const popoverRef = useRef(null);

  const togglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  const handleClickOutside = (event) => {
    if (popoverRef.current && !popoverRef.current.contains(event.target)) {
      setIsPopoverOpen(false);
    }
  };

  useEffect(() => {
    if (isPopoverOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPopoverOpen]);

  return (
    <div className="bg-white py-4 flex items-center justify-between sticky top-0 z-50">
      <div>
        {isMenuOpen ? (
          <FaBars
            className="text-[18px] cursor-pointer "
            onClick={toggleMenu}
          />
        ) : (
          <div
            onClick={toggleMenu}
            className="flex items-center gap-2 cursor-pointer px-6"
          >
            <FaTimes className="text-[24px] ps-2" />
            <h2 className="font-poppins font-semibold text-[18px] text-primary">
              Click For Sidebar
            </h2>
          </div>
        )}
      </div>
      <div className=" pe-8">
        <div className="flex items-center gap-5">
          <LuShoppingCart className="text-xl" />
          <IoNotificationsOutline className="text-xl" />
          <div
            className="flex items-center gap-4 cursor-pointer relative "
            onClick={togglePopover}
            ref={popoverRef}
          >
            <img
              src="../../../public/assets/avatar.png"
              alt=""
              className="w-[50px] h-[50px] rounded-full  p-2  bg-primary/10"
            />
            <h2 className="font-poppins font-normal text-[16px] flex items-center gap-2">
              Admin{" "}
              <span>
                <IoIosArrowForward className="text-[16px]" />
              </span>
            </h2>
          </div>
        </div>
        {isPopoverOpen && (
          <div className="absolute  mt-4 w-48  bg-white border  right-[35px] border-gray-300 rounded-lg shadow-lg z-10">
            <div className="flex flex-col  items-start gap-3 p-4 font-poppins font-normal text-base">
              <button className=" flex items-center gap-3 ">
                <FaRegUser /> <span>Profile</span>
              </button>
              <button className="flex items-center gap-3 ">
                {" "}
                <MdLogout /> <span>Logout</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
