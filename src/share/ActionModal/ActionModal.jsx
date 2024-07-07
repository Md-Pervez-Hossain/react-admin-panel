import React from "react";
import Modal from "../../share/Modal/Modal";

const ActionModal = ({ isOpen, closeModal, title, actionContent }) => {
  return (
    <Modal
      isOpen={isOpen}
      openModal={() => {}}
      closeModal={closeModal}
      title={title}
    >
      <div>{actionContent}</div>
    </Modal>
  );
};

export default ActionModal;
