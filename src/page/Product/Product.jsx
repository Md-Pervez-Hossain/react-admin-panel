import React, { useRef } from "react";
import { motion } from "framer-motion";
import useModalDropdown from "../../../hooks/useModalDropdown";
import useClickOutside from "../../../hooks/useClickOutside";
import DropdownMenu from "../../share/DropdownMenu/DropdownMenu";
import Breadcrumb from "../../share/Breadcrumb/Breadcrumb";
import { AiOutlinePlus } from "react-icons/ai";
import { usersData } from "../../share/Data/Data";
import Table from "../../share/Table/Table";
import ActionModal from "../../share/ActionModal/ActionModal";
import AddProduct from "./AddProduct";
import Container from "../../share/ui/Container/Container";
import usePageAnimation from "../../../hooks/usePageAnimation";

const Product = () => {
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
            onEdit="/product/edit-product"
            onDelete={openDeleteModal}
            onDetails="/product/product-details"
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
        <motion.div variants={childVariant} className="mb-8">
          <Breadcrumb title="Product Page" />
        </motion.div>

        <motion.div
          variants={childVariant}
          className="flex items-center justify-between mb-4"
        >
          <motion.h2 className="font-poppins font-medium text-[20px]">
            All Product List
          </motion.h2>
          <motion.button
            onClick={openAddModal}
            className="flex items-center gap-2 bg-primary/80 px-6 py-3 text-white rounded-lg"
          >
            <AiOutlinePlus className="font-medium" />
            <span>Add Product</span>
          </motion.button>
        </motion.div>

        <motion.div variants={childVariant} className="mb-8">
          <Table columns={header} tabelData={usersData} />
        </motion.div>
      </motion.div>

      <ActionModal
        isOpen={isAddModalOpen}
        closeModal={closeModals}
        title="Add Product"
        actionContent={<AddProduct />}
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

export default Product;
