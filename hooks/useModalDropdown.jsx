import { useState } from "react";

const useModalDropdown = () => {
  const [dropdownOpenId, setDropdownOpenId] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

  const toggleDropdown = (id) => {
    setDropdownOpenId((prevId) => (prevId === id ? null : id));
  };

  const openAddModal = () => {
    setIsAddModalOpen(true);
    setDropdownOpenId(null);
  };

  const openEditModal = (id) => {
    setSelectedUserId(id);
    setIsEditModalOpen(true);
    setDropdownOpenId(null);
  };

  const openDeleteModal = (id) => {
    setSelectedUserId(id);
    setIsDeleteModalOpen(true);
    setDropdownOpenId(null);
  };

  const openDetailsModal = (id) => {
    setSelectedUserId(id);
    setIsDetailsModalOpen(true);
    setDropdownOpenId(null);
  };

  const closeModals = () => {
    setIsAddModalOpen(false);
    setIsEditModalOpen(false);
    setIsDeleteModalOpen(false);
    setIsDetailsModalOpen(false);
  };

  return {
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
  };
};

export default useModalDropdown;
