import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { CgDetailsMore } from "react-icons/cg";
import { LuFolderEdit } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import useClickOutside from "../../../hooks/useClickOutside";

const DropdownMenu = ({
  id,
  isOpen,
  toggleDropdown,
  onEdit,
  onDelete,
  onDetails,
}) => {
  const dropdownRef = useRef(null);

  // Hook to handle click outside of the dropdown
  useClickOutside(dropdownRef, () => {
    toggleDropdown(null); // Close the dropdown when clicking outside
  });

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
          ref={dropdownRef}
          className="dropdown-content z-50 menu p-4 shadow-lg bg-white rounded-box w-52 absolute top-full -left-[220px] -mt-[100px] rounded-lg border-2 border-primary/10 flex flex-col gap-3 font-poppins"
        >
          {onEdit && (
            <li>
              <button
                onClick={() => {
                  onEdit(id);
                  toggleDropdown(null);
                }}
                className="flex items-center gap-3"
              >
                <LuFolderEdit />
                <span>Edit</span>
              </button>
            </li>
          )}
          {onDelete && (
            <li>
              <button
                onClick={() => {
                  onDelete(id);
                  toggleDropdown(null);
                }}
                className="flex items-center gap-3"
              >
                <RiDeleteBinLine />
                <span>Delete</span>
              </button>
            </li>
          )}
          {onDetails && (
            <li>
              <button
                onClick={() => {
                  onDetails(id);
                  toggleDropdown(null);
                }}
                className="flex items-center gap-3"
              >
                <CgDetailsMore />
                <span>Details</span>
              </button>
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

DropdownMenu.propTypes = {
  id: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  onDetails: PropTypes.func,
};

export default DropdownMenu;
