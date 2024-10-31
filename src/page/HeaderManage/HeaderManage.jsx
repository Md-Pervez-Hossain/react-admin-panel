import React, { useRef, useState } from "react";
import {
  useDeleteColorMutation,
  useGetColorsQuery,
} from "../../redux/features/color/colorApi";
import usePageAnimation from "../../../hooks/usePageAnimation";
import useModalDropdown from "../../../hooks/useModalDropdown";
import useClickOutside from "../../../hooks/useClickOutside";
import DropdownMenu from "../../share/DropdownMenu/DropdownMenu";
import Table from "../../share/Table/Table";
import Container from "../../share/ui/Container/Container";
import Breadcrumb from "../../share/Breadcrumb/Breadcrumb";
import PrimaryButton from "../../share/Buttons/PrimaryButton";
import { AiOutlinePlus } from "react-icons/ai";
import ActionModal from "../../share/ActionModal/ActionModal";
import AddHeader from "./AddHeader";
import EditHeader from "./EditHeader";
import DeleteModal from "../../share/Modal/DeleteModal";
import { motion } from "framer-motion";

const HeaderManage = () => {
  const [searchText, setSearchText] = useState("");
  // const [pagination, setPagination] = useState({
  //   pageIndex: 0,
  //   pageSize: 5,
  // });

  // const query = `page=${pagination.pageIndex + 1}&limit=${
  //   pagination.pageSize
  // }&q=${searchText}`;
  const { data: colorData, isLoading, isError } = useGetColorsQuery();
  console.log(colorData);

  const [deleteApiClients] = useDeleteColorMutation();

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
    {
      header: "Primary Color",
      accessorKey: "primary_color",
      cell: ({ row }) => {
        const { primary_color } = row.original;

        return (
          <>
            {primary_color && (
              <span
                style={{
                  backgroundColor: `${primary_color}20`,
                  color: primary_color,
                }}
                className="px-4 py-2 rounded-md"
              >
                {primary_color}
              </span>
            )}
          </>
        );
      },
    },
    {
      header: "Secondary Color",
      accessorKey: "secondary_color",
      cell: ({ row }) => {
        const { secondary_color } = row.original;

        return (
          <>
            {secondary_color && (
              <span
                style={{
                  backgroundColor: `${secondary_color}20`,
                  color: secondary_color,
                }}
                className="px-4 py-2 rounded-md"
              >
                {secondary_color}
              </span>
            )}
          </>
        );
      },
    },

    {
      header: "Accent Color",
      accessorKey: "accent_color",
      cell: ({ row }) => {
        const { accent_color } = row.original;

        return (
          <>
            {accent_color && (
              <span
                style={{
                  backgroundColor: `${accent_color}20`, // Adding '20' to apply 10% opacity
                  color: accent_color,
                }}
                className="px-4 py-2 rounded-md"
              >
                {accent_color}
              </span>
            )}
          </>
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
            onDetails={() => openDetailsModal(itemData)}
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
  if (!isLoading && !isError && colorData?.results?.length === 0) {
    content = <p>No Data Found</p>;
  }
  if (!isLoading && !isError && colorData?.results?.length > 0) {
    content = (
      <Table
        columns={header}
        tabelData={colorData?.results}

        // search={searchText}
        // setSearch={setSearchText}
      />
    );
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
          <Breadcrumb title="Header Manage" />
        </motion.div>
        <motion.div
          variants={childVariant}
          className="flex items-center justify-between  mb-4"
        >
          <motion.h2 className="font-poppins  text-[20px]">
            All Nav Item List
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
              Add Nav Item
            </PrimaryButton>
          </motion.div>
        </motion.div>

        <motion.div variants={childVariant}>{content}</motion.div>
      </motion.div>

      <ActionModal
        isOpen={isAddModalOpen}
        closeModal={closeModals}
        title="Add Color"
        actionContent={<AddHeader closeModal={closeModals} />}
      />

      <ActionModal
        isOpen={isEditModalOpen}
        closeModal={closeModals}
        title="Edit Color"
        actionContent={
          <EditHeader data={selectedItemData} closeModal={closeModals} />
        }
      />

      <ActionModal
        isOpen={isDeleteModalOpen}
        closeModal={closeModals}
        title="Delete Color"
        actionContent={
          <DeleteModal
            data={selectedItemData}
            deleteFun={deleteApiClients}
            closeModal={closeModals}
          />
        }
      />

      {/* <ActionModal
        isOpen={isDetailsModalOpen}
        closeModal={closeModals}
        title=" Profile Details"
        actionContent={<ProfileDetails data={selectedItemData} />}
      /> */}
    </Container>
  );
};

export default HeaderManage;
