import Container from "../../../share/ui/Container/Container";
import Breadcrumb from "../../../share/Breadcrumb/Breadcrumb";
import { motion } from "framer-motion";
import usePageAnimation from "../../../../hooks/usePageAnimation";
import {
  useDeletebulkSmsClientsMutation,
  useGetbulkSmsClientsQuery,
} from "../../../redux/features/bulkSmsClient/bulkSmsClient";
import useModalDropdown from "../../../../hooks/useModalDropdown";
import { useRef, useState } from "react";
import useClickOutside from "../../../../hooks/useClickOutside";
import DropdownMenu from "../../../share/DropdownMenu/DropdownMenu";
import Table from "../../../share/Table/Table";
import PrimaryButton from "../../../share/Buttons/PrimaryButton";
import { AiOutlinePlus } from "react-icons/ai";
import ActionModal from "../../../share/ActionModal/ActionModal";
import DeleteModal from "../../../share/Modal/DeleteModal";
import AddBulkSmsClients from "./AddBulkSmsClients";
import EditBulkSmsClient from "./EditBulkSmsClient";
import SendBulkSms from "./SendBulkSms";
const BulkSmsClients = () => {
  const [searchText, setSearchText] = useState("");
  const query = `q=${searchText}`;
  const {
    data: apiClientsData,
    isLoading,
    isError,
  } = useGetbulkSmsClientsQuery(query);
  console.log(apiClientsData);

  const [deleteApiClients] = useDeletebulkSmsClientsMutation();

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
    openEditModal,
    closeModals,
    openModal,
    isOpenModal,
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
      header: "Bulk Sms Send",
      id: "action",
      cell: ({ row }) => {
        return (
          <PrimaryButton className="text-center" onClick={openModal}>
            Bulk SMS Send
          </PrimaryButton>
        );
      },
    },
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
            onEdit={() => openEditModal(itemData)}
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
          <Breadcrumb title="Bulk Sms Clients" />
        </motion.div>
        <motion.div
          variants={childVariant}
          className="flex items-center justify-between  mb-4"
        >
          <motion.h2 className="font-poppins  text-[20px]">
            All Bulk sms Clients List
          </motion.h2>
          <motion.div
            variants={childVariant}
            className="flex items-center gap-5"
          >
            <motion.div>
              <input
                className="px-4 py-2 border border-primary/20 rounded-lg bg-transparent focus:outline-none "
                placeholder="search"
                onChange={(e) => setSearchText(e.target.value)}
              />
            </motion.div>
            <PrimaryButton
              className=" flex items-center gap-2 "
              onClick={openAddModal}
            >
              <AiOutlinePlus className="" />
              Add Bulk sms Clients
            </PrimaryButton>
          </motion.div>
        </motion.div>

        <motion.div variants={childVariant}>{content}</motion.div>
      </motion.div>

      <ActionModal
        isOpen={isAddModalOpen}
        closeModal={closeModals}
        title="Add Bulk Sms Clients"
        actionContent={<AddBulkSmsClients closeModal={closeModals} />}
      />
      <ActionModal
        isOpen={isOpenModal}
        closeModal={closeModals}
        title="Bulk Sms Send"
        actionContent={<SendBulkSms closeModal={closeModals} />}
      />

      <ActionModal
        isOpen={isEditModalOpen}
        closeModal={closeModals}
        title="Edit Bulk Sms Clients"
        actionContent={
          <EditBulkSmsClient data={selectedItemData} closeModal={closeModals} />
        }
      />

      <ActionModal
        isOpen={isDeleteModalOpen}
        closeModal={closeModals}
        title="Delete Bulk Sms Clients"
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
        title="Bulk Sms Clients Details"
        actionContent={<div>User Details Information {selectedUserId}</div>}
      />
    </Container>
  );
};

export default BulkSmsClients;
