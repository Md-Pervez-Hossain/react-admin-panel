import { useClickAway } from "@uidotdev/usehooks";
import { useState } from "react";

const UseModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const refModal = useClickAway(() => {
    setIsModalOpen(false);
  });
  return { isModalOpen, openModal, closeModal, refModal };
};

export default UseModal;
