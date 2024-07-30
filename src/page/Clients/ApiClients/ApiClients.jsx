import Container from "../../../share/ui/Container/Container";
import Breadcrumb from "../../../share/Breadcrumb/Breadcrumb";
import usePageAnimation from "../../../../hooks/usePageAnimation";
import useModalDropdown from "../../../../hooks/useModalDropdown";
import { useRef, useState } from "react";
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
import EditApiClients from "./EditApiClients";

const ApiClients = () => {
  const [searchText, setSearchText] = useState();
  const query = `q=${searchText}`;
  console.log(query);
  const {
    data: apiClientsData,
    isLoading,
    isError,
  } = useGetAPiClientsQuery(query);
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
    openEditModal,
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
          <Breadcrumb title="Api Clients" />
        </motion.div>
        <motion.div
          variants={childVariant}
          className="flex items-center justify-between  mb-4"
        >
          <motion.h2 className="font-poppins  text-[20px]">
            All Api Clients List
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
        title="Edit Api Clients"
        actionContent={
          <EditApiClients data={selectedItemData} closeModal={closeModals} />
        }
      />

      <ActionModal
        isOpen={isDeleteModalOpen}
        closeModal={closeModals}
        title="Delete Api Clients"
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
        title="Api Clients Details"
        actionContent={<div>User Details Information {selectedUserId}</div>}
      />
    </Container>
  );
};

export default ApiClients;
