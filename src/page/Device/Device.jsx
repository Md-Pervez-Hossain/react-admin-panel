import Container from "../../share/ui/Container/Container";
import Breadcrumb from "../../share/Breadcrumb/Breadcrumb";
import usePageAnimation from "../../../hooks/usePageAnimation";
import { motion } from "framer-motion";
import PrimaryButton from "../../share/Buttons/PrimaryButton";
import { AiOutlinePlus } from "react-icons/ai";
import useModalDropdown from "../../../hooks/useModalDropdown";
import ActionModal from "../../share/ActionModal/ActionModal";
import DeleteModal from "../../share/Modal/DeleteModal";
import AddDevice from "./AddDevice";
import DropdownMenu from "../../share/DropdownMenu/DropdownMenu";
import {
  useDeleteDeviceMutation,
  useGetDeviceQuery,
} from "../../redux/features/device/deviceApi";
import Table from "../../share/Table/Table";
import EditDevice from "./EditDevice";
import CheckDeviceSim from "./CheckDeviceSim";
import { useRef } from "react";
import useClickOutside from "../../../hooks/useClickOutside";
const Device = () => {
  const { parentVariant, childVariant } = usePageAnimation();
  // device add mutation
  const {
    data: deviceData,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useGetDeviceQuery();
  console.log(deviceData);

  // device delete mutation

  const [deleteDevice, { isLoading: deleteDeviceLoading }] =
    useDeleteDeviceMutation();

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
    { header: "Sl", accessorKey: "id" },
    {
      header: "User Name",
      accessorKey: "username",
    },
    { header: "Url", accessorKey: "url" },
    { header: "Device Name", accessorKey: "deviceName" },

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
            onDetails={() => openDetailsModal(itemData)}
            editTitle=""
            deleteTitle=""
            detailsTitle="Check Sim"
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
          <Breadcrumb title="Device" />
        </motion.div>
        <motion.div
          variants={childVariant}
          className="flex items-center justify-between  mb-4"
        >
          <motion.h2 className="font-poppins  text-[20px]">
            All Device List
          </motion.h2>
          <motion.div variants={childVariant} onClick={openAddModal}>
            <PrimaryButton className=" flex items-center gap-2 ">
              <AiOutlinePlus className="" />
              Add Device
            </PrimaryButton>
          </motion.div>
        </motion.div>

        <motion.div variants={childVariant}>{content}</motion.div>
      </motion.div>
      <ActionModal
        isOpen={isAddModalOpen}
        closeModal={closeModals}
        title="Add Device"
        actionContent={<AddDevice closeModal={closeModals} />}
      />

      <ActionModal
        isOpen={isEditModalOpen}
        closeModal={closeModals}
        title="Edit Device"
        actionContent={
          <EditDevice data={selectedItemData} closeModal={closeModals} />
        }
      />

      <ActionModal
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
      />

      <ActionModal
        isOpen={isDetailsModalOpen}
        closeModal={closeModals}
        title="Device Sim"
        actionContent={
          <CheckDeviceSim data={selectedItemData} closeModal={closeModals} />
        }
      />
    </Container>
  );
};

export default Device;
