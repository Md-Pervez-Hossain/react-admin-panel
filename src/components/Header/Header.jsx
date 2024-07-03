import { FaBars, FaTimes } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";

const Header = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div className="bg-white py-4  flex items-center justify-between sticky top-0 z-50">
      <div>
        {isMenuOpen ? (
          <FaBars className="text-[18px] cursor-pointer" onClick={toggleMenu} />
        ) : (
          <div
            onClick={toggleMenu}
            className="flex items-center gap-2 cursor-pointer px-6"
          >
            <FaTimes className="text-[24px] ps-2" />
            <h2 className="font-poppins font-semibold text-[18px]">
              Click For Sidebar
            </h2>
          </div>
        )}
      </div>
      <div className="flex items-center gap-5 pe-8">
        <LuShoppingCart className="text-xl" />
        <IoNotificationsOutline className="text-xl" />
        <div className="flex items-center gap-4">
          <img
            src="../../../public/assets/avatar.png"
            alt=""
            className="w-[50px] h-[50px] rounded-full bg-zinc-50 p-2"
          />
          <h2 className="font-poppins font-normal text-[16px] flex items-center gap-2">
            Admin{" "}
            <span>
              <IoIosArrowForward className="text-[16px]" />
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
