import { useSelector } from "react-redux";
import { useRef } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Table from "../../share/Table/Table";
import { usersData } from "../../share/Data/Data";
import Breadcrumb from "../../share/Breadcrumb/Breadcrumb";
import DropdownMenu from "../../share/DropdownMenu/DropdownMenu";
import ActionModal from "../../share/ActionModal/ActionModal";
import useClickOutside from "../../../hooks/useClickOutside";
import useModalDropdown from "../../../hooks/useModalDropdown";
import Container from "../../share/ui/Container/Container";
import usePageAnimation from "../../../hooks/usePageAnimation";
import { motion } from "framer-motion";
import { useGetGroupQuery } from "../../redux/features/user/userApi";

const User = () => {
  const { data: user } = useGetGroupQuery();

  const { parentVariant, childVariant } = usePageAnimation();
  const {
    dropdownOpenId,
    selectedUserId,
    isAddModalOpen,
    isEditModalOpen,
    isDeleteModalOpen,
    isDetailsModalOpen,
    toggleDropdown,
    openAddModal,
    openDeleteModal,
    openDetailsModal,
    closeModals,
  } = useModalDropdown();

  const dropdownRef = useRef(null);
  useClickOutside(dropdownRef, () => toggleDropdown(null));

  const header = [
    { header: "Sl", accessorKey: "id" },
    {
      header: "Image",
      accessorKey: "image",
      cell: ({ row }) => (
        <img
          src={row.original.image}
          alt=""
          className="w-12 h-12 rounded-full"
        />
      ),
    },
    { header: "Name", accessorKey: "username" },
    { header: "Category", accessorKey: "category" },
    { header: "Gender", accessorKey: "gender" },
    {
      header: "Action",
      id: "action",
      cell: ({ row }) => {
        const { id } = row.original;
        const isOpen = dropdownOpenId === id;

        return (
          <DropdownMenu
            id={id}
            isOpen={isOpen}
            toggleDropdown={toggleDropdown}
            onEdit={`/user/edit-user/${id}`}
            onDelete={openDeleteModal}
            onDetails={openDetailsModal}
          />
        );
      },
    },
  ];

  return (
    <Container>
      <motion.div
        variants={parentVariant}
        initial="hidden"
        animate="visible"
        className="font-poppins"
      >
        <motion.div variants={childVariant}>
          <Breadcrumb title="User Page" />
          {user?.title}
        </motion.div>
        <motion.div
          variants={childVariant}
          className="flex items-center justify-between  mb-4"
        >
          <h2 className="font-poppins font-semibold   mb-2 sm:mb-0">
            All Users List
          </h2>
          <button
            onClick={openAddModal}
            className="flex items-center gap-2 bg-primary/80 px-6 py-3 text-white rounded-lg"
          >
            <AiOutlinePlus className="font-semibold" />
            <span className="">Add </span>
          </button>
        </motion.div>

        <motion.div variants={childVariant}>
          <Table columns={header} tabelData={usersData} />
        </motion.div>
      </motion.div>

      <ActionModal
        isOpen={isAddModalOpen}
        closeModal={closeModals}
        title="Add User"
        actionContent={<div>Add User Form </div>}
      />

      <ActionModal
        isOpen={isEditModalOpen}
        closeModal={closeModals}
        title="Edit User"
        actionContent={<div>Edit User Form {selectedUserId}</div>}
      />

      <ActionModal
        isOpen={isDeleteModalOpen}
        closeModal={closeModals}
        title="Delete User"
        actionContent={<div>Delete User Confirmation {selectedUserId}</div>}
      />

      <ActionModal
        isOpen={isDetailsModalOpen}
        closeModal={closeModals}
        title="User Details"
        actionContent={<div>User Details Information {selectedUserId}</div>}
      />
    </Container>
  );
};

export default User;
