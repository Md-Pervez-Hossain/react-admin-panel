import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import Logo from "../Logo/Logo";
import { Link, useNavigate } from "react-router-dom";
import useClickOutside from "../../../hooks/useClickOutside";

const Header = ({ isMenuOpen, toggleMenu }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const headerRef = useRef(null);
  const popoverRef = useRef(null);
  const navigate = useNavigate();

  console.log(headerRef);

  useClickOutside(popoverRef, () => {
    setIsPopoverOpen(false);
  });

  const togglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  const handleProfileLinkClick = () => {
    setIsPopoverOpen(false);
    navigate("/profile");
  };

  return (
    <div className=" bg-white border-b-2 border-b-primary/10 py-4 flex items-center justify-between sticky top-0 z-50 lg:px-8 px-3 transition-shadow duration-300">
      <div className="flex items-center gap-2">
        {/* {isMenuOpen ? (
          <IoClose
            className="text-[30px] cursor-pointer font-semibold"
            onClick={toggleMenu}
          />
        ) : (
          <FaBars className="text-[24px] cursor-pointer" onClick={toggleMenu} />
        )} */}
        <Logo />
      </div>
      <div className="lg:hidden flex items-center gap-4">
        {isMenuOpen ? (
          <IoClose
            className="text-[30px] cursor-pointer font-semibold"
            onClick={toggleMenu}
          />
        ) : (
          <FaBars className="text-[24px] cursor-pointer" onClick={toggleMenu} />
        )}
      </div>
      <div className="hidden lg:flex items-center gap-4">
        <LuShoppingCart className="text-xl" />
        <IoNotificationsOutline className="text-xl" />
        <div
          className="flex items-center gap-4 cursor-pointer relative"
          onClick={togglePopover}
        >
          <img
            src="../../../public/assets/avatar.png"
            alt=""
            className="w-[50px] h-[50px] rounded-full p-2 bg-primary/10"
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
        <div
          ref={popoverRef}
          className="absolute mt-[175px] w-48 bg-white border-2 right-[35px] border-primary/10 rounded-lg shadow-lg z-10"
        >
          <div className="flex flex-col items-start gap-3 p-4 font-poppins font-normal text-base">
            <button
              className="flex items-center gap-3"
              onClick={handleProfileLinkClick}
            >
              <FaRegUser /> <span>Profile</span>
            </button>
            <button className="flex items-center gap-3">
              <MdLogout /> <span>Logout</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
