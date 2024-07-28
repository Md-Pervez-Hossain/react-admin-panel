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

  const toggleDropdown = (id) => {
    setDropdownOpenId(dropdownOpenId === id ? null : id);
  };

  const openAddModal = () => setAddModalOpen(true);
  const openEditModal = (id) => {
    setSelectedUserId(id);
    setEditModalOpen(true);
  };
  const openDeleteModal = (item) => {
    setSelectedUserId(item.id);
    setSelectedItemData(item);
    setDeleteModalOpen(true);
  };
  const openDetailsModal = (id) => {
    setSelectedUserId(id);
    setDetailsModalOpen(true);
  };
  const closeModals = () => {
    setAddModalOpen(false);
    setEditModalOpen(false);
    setDeleteModalOpen(false);
    setDetailsModalOpen(false);
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
  };
};

export default useModalDropdown;
