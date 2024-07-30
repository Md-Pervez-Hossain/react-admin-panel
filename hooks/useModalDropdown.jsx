// useModalDropdown.js
import { useState } from "react";

const useModalDropdown = () => {
  const [dropdownOpenId, setDropdownOpenId] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedItemData, setSelectedItemData] = useState(null);
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isDetailsModalOpen, setDetailsModalOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleDropdown = (id) => {
    setDropdownOpenId(dropdownOpenId === id ? null : id);
  };

  const openAddModal = () => setAddModalOpen(true);
  const openModal = () => setIsOpenModal(true);
  const openEditModal = (item) => {
    setSelectedUserId(item?.id);
    setEditModalOpen(true);
    setSelectedItemData(item);
  };
  const openDeleteModal = (item) => {
    setSelectedUserId(item.id);
    setSelectedItemData(item);
    setDeleteModalOpen(true);
  };
  const openDetailsModal = (item) => {
    setSelectedUserId(item?.id);
    setDetailsModalOpen(true);
    setSelectedItemData(item);
  };
  const closeModals = () => {
    setAddModalOpen(false);
    setEditModalOpen(false);
    setDeleteModalOpen(false);
    setDetailsModalOpen(false);
    setIsOpenModal(false);
  };

  return {
    dropdownOpenId,
    selectedUserId,
    selectedItemData,
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
    openModal,
    isOpenModal,
  };
};

export default useModalDropdown;
