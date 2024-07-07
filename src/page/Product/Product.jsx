import { useRef } from "react";
import useModalDropdown from "../../../hooks/useModalDropdown";
import useClickOutside from "../../../hooks/useClickOutside";
import DropdownMenu from "../../share/DropdownMenu/DropdownMenu";
import Breadcrumb from "../../share/Breadcrumb/Breadcrumb";
import { AiOutlinePlus } from "react-icons/ai";
import { usersData } from "../../share/Data/Data";
import Table from "../../share/Table/Table";
import ActionModal from "../../share/ActionModal/ActionModal";
import AddProduct from "./AddProduct";

const Product = () => {
  const {
    dropdownOpenId,
    selectedUserId,
    isAddModalOpen,
    isEditModalOpen,
    isDeleteModalOpen,
    isDetailsModalOpen,
    toggleDropdown,
    openAddModal,
    openEditModal,
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
            onEdit="/product/edit-product"
            onDelete={openDeleteModal}
            onDetails="/product/product-details"
          />
        );
      },
    },
  ];

  return (
    <div className="font-poppins">
      <Breadcrumb title="Product Page" />

      <div className="flex items-center justify-between mb-4">
        <h2 className="font-poppins font-semibold text-[24px]">
          All Product List
        </h2>
        <button
          onClick={openAddModal}
          className="flex items-center gap-2 bg-primary/80 px-6 py-3 text-white rounded-lg"
        >
          <AiOutlinePlus className="font-semibold" />
          <span>Add Product</span>
        </button>
      </div>

      <Table columns={header} tabelData={usersData} />

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
    </div>
  );
};

export default Product;
