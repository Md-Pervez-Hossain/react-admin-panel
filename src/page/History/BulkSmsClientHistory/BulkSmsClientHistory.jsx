import React from "react";
import usePageAnimation from "../../../../hooks/usePageAnimation";
import { motion } from "framer-motion";
import Breadcrumb from "../../../share/Breadcrumb/Breadcrumb";
import Container from "../../../share/ui/Container/Container";
import { useGetBulkSmsHistoryQuery } from "../../../redux/features/bulkSmsHistory/bulkSmsHistoryApi";
import useModalDropdown from "../../../../hooks/useModalDropdown";
import DropdownMenu from "../../../share/DropdownMenu/DropdownMenu";
import Table from "../../../share/Table/Table";
import PrimaryButton from "../../../share/Buttons/PrimaryButton";
import { AiOutlinePlus } from "react-icons/ai";
import ActionModal from "../../../share/ActionModal/ActionModal";
import BulkSmsClientsHistoryDetails from "./BulkSmsClientsHistoryDetails";
const BulkSmsClientHistory = () => {
  const { parentVariant, childVariant } = usePageAnimation();

  const {
    data: deviceData,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useGetBulkSmsHistoryQuery();
  console.log(deviceData);

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

  console.log(selectedItemData);

  const header = [
    { header: "Client Name", accessorKey: "client" },
    // {
    //   header: "Sms Send",
    //   accessorKey: "smsSent",
    // },
    // { header: "Failed Sms", accessorKey: "smsFailed" },
    { header: "Total Sms", accessorKey: "totalSMS" },
    { header: "Status", accessorKey: "processStatus" },

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
            onDelete={""}
            onDetails={() => openDetailsModal(itemData)}
            editTitle=""
            deleteTitle=""
            detailsTitle=""
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
  if (!isLoading && !isError && deviceData?.results?.length === 0) {
    content = <p>No Data Found</p>;
  }
  if (!isLoading && !isError && deviceData?.results?.length > 0) {
    content = <Table columns={header} tabelData={deviceData?.results} />;
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
          <Breadcrumb title="Bulk Sms History" />
        </motion.div>
        <motion.div
          variants={childVariant}
          className="flex items-center justify-between  mb-2"
        >
          <motion.h2 className="font-poppins  text-[20px]">
            All Bulk Client Sms History List
          </motion.h2>
        </motion.div>

        <motion.div variants={childVariant}>{content}</motion.div>
      </motion.div>
      {/* <ActionModal
        isOpen={isAddModalOpen}
        closeModal={closeModals}
        title="Add Device"
        actionContent={<AddDevice closeModal={closeModals} />}
      /> */}

      {/* <ActionModal
        isOpen={isEditModalOpen}
        closeModal={closeModals}
        title="Edit Device"
        actionContent={
          <EditDevice data={selectedItemData} closeModal={closeModals} />
        }
      /> */}

      {/* <ActionModal
        isOpen={isDeleteModalOpen}
        closeModal={closeModals}
        title="Delete Device"
        actionContent={
          <DeleteModal
            data={selectedItemData}
            deleteFun={deleteDevice}
            closeModal={closeModals}
          />
        }
      /> */}

      <ActionModal
        isOpen={isDetailsModalOpen}
        closeModal={closeModals}
        title="History Details"
        actionContent={
          <BulkSmsClientsHistoryDetails
            data={selectedItemData}
            closeModal={closeModals}
          />
        }
      />
    </Container>
  );
};

export default BulkSmsClientHistory;
