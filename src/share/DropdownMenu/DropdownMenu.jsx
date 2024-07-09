import React, { useRef } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { CgDetailsMore } from "react-icons/cg";
import { LuFolderEdit } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import useClickOutside from "../../../hooks/useClickOutside"; // Import useClickOutside hook

const DropdownMenu = ({
  id,
  isOpen,
  toggleDropdown,
  onEdit,
  onDelete,
  onDetails,
}) => {
  const dropdownRef = useRef(null); // Create a ref for the dropdown
  useClickOutside(dropdownRef, () => toggleDropdown(null)); // Hook to close dropdown when clicked outside

  return (
    <div className="relative">
      <label
        tabIndex={0}
        className="cursor-pointer"
        onClick={() => toggleDropdown(id)}
      >
        <HiOutlineDotsHorizontal />
      </label>
      {isOpen && (
        <ul
          ref={dropdownRef} // Assign ref to the dropdown menu
          className="dropdown-content z-50 menu p-4 shadow-lg bg-white rounded-box w-52 absolute top-full -left-[210px] -mt-[80px] rounded-lg border-2 border-primary/10 flex flex-col gap-3 font-poppins"
        >
          {onEdit && (
            <li>
              {typeof onEdit === "string" ? (
                <Link to={onEdit} className="flex items-center gap-3">
                  <LuFolderEdit />
                  <span>Edit</span>
                </Link>
              ) : (
                <button
                  onClick={() => onEdit(id)}
                  className="flex items-center gap-3 w-full"
                >
                  <LuFolderEdit />
                  <span>Edit</span>
                </button>
              )}
            </li>
          )}
          {onDelete && (
            <li>
              <button
                onClick={() => onDelete(id)}
                className="flex items-center gap-3 w-full"
              >
                <RiDeleteBinLine />
                <span>Delete</span>
              </button>
            </li>
          )}
          {onDetails && (
            <li>
              {typeof onDetails === "string" ? (
                <Link to={onDetails} className="flex items-center gap-3">
                  <CgDetailsMore />
                  <span>Details</span>
                </Link>
              ) : (
                <button
                  onClick={() => onDetails(id)}
                  className="flex items-center gap-3 w-full"
                >
                  <CgDetailsMore />
                  <span>Details</span>
                </button>
              )}
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
