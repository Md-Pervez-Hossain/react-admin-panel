import Container from "../../../share/ui/Container/Container";
import Breadcrumb from "../../../share/Breadcrumb/Breadcrumb";
import usePageAnimation from "../../../../hooks/usePageAnimation";
import useModalDropdown from "../../../../hooks/useModalDropdown";
import { useRef } from "react";
import useClickOutside from "../../../../hooks/useClickOutside";
import DropdownMenu from "../../../share/DropdownMenu/DropdownMenu";
import Table from "../../../share/Table/Table";
import ActionModal from "../../../share/ActionModal/ActionModal";
import { motion } from "framer-motion";
import PrimaryButton from "../../../share/Buttons/PrimaryButton";
import { AiOutlinePlus } from "react-icons/ai";
import AddApiClients from "./AddApiClients";
import {
  useDeleteApiClientsMutation,
  useGetAPiClientsQuery,
} from "../../../redux/features/apiClients/apiClients";
import DeleteModal from "../../../share/Modal/DeleteModal";

const ApiClients = () => {
  const { data: apiClientsData, isLoading, isError } = useGetAPiClientsQuery();
  console.log(apiClientsData);

  const [deleteApiClients] = useDeleteApiClientsMutation();

  const { parentVariant, childVariant } = usePageAnimation();
  const {
    dropdownOpenId,
    selectedUserId,
    selectedItemData,
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
      header: "User Name",
      accessorKey: "username",
    },
    { header: "Email", accessorKey: "email" },
    { header: "Organisation", accessorKey: "organization" },
    { header: "Balance", accessorKey: "balance" },
    {
      header: "Action",
      id: "action",
      cell: ({ row }) => {
        const itemData = row.original;
        const isOpen = dropdownOpenId === itemData.id;

        return (
          <DropdownMenu
            id={itemData.id}
            isOpen={isOpen}
            toggleDropdown={toggleDropdown}
            onEdit={""}
            onDelete={() => openDeleteModal(itemData)}
            onDetails={() => openDetailsModal(itemData.id)}
          />
        );
      },
    },
  ];

  let content;
  if (isLoading && !isError) {
    content = <p>Loading</p>;
  }
  if (!isLoading && isError) {
    content = <p>Error</p>;
  }
  if (!isLoading && !isError && apiClientsData?.results?.length === 0) {
    content = <p>No Data Found</p>;
  }
  if (!isLoading && !isError && apiClientsData?.results?.length > 0) {
    content = <Table columns={header} tabelData={apiClientsData?.results} />;
  }

  return (
    <Container>
      <motion.div
        variants={parentVariant}
        initial="hidden"
        animate="visible"
        className="font-poppins"
      >
        <motion.div variants={childVariant}>
          <Breadcrumb title="Api Clients" />
        </motion.div>
        <motion.div
          variants={childVariant}
          className="flex items-center justify-between  mb-4"
        >
          <motion.h2 className="font-poppins  text-[20px]">
            All Api Clients List
          </motion.h2>
          <motion.div variants={childVariant} onClick={openAddModal}>
            <PrimaryButton className=" flex items-center gap-2 ">
              <AiOutlinePlus className="" />
              Add Api Clients
            </PrimaryButton>
          </motion.div>
        </motion.div>

        <motion.div variants={childVariant}>{content}</motion.div>
      </motion.div>

      <ActionModal
        isOpen={isAddModalOpen}
        closeModal={closeModals}
        title="Add Api Clients"
        actionContent={<AddApiClients closeModal={closeModals} />}
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
        actionContent={
          <DeleteModal
            data={selectedItemData}
            deleteFun={deleteApiClients}
            closeModal={closeModals}
          />
        }
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

export default ApiClients;
