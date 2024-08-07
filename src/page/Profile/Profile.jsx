import React from "react";
import usePageAnimation from "../../../hooks/usePageAnimation";
import { motion } from "framer-motion";
import Container from "../../share/ui/Container/Container";
import Breadcrumb from "../../share/Breadcrumb/Breadcrumb";
import PrimaryButton from "../../share/Buttons/PrimaryButton";
import useModalDropdown from "../../../hooks/useModalDropdown";
import ActionModal from "../../share/ActionModal/ActionModal";
import UpdateProfile from "./UpdateProfile";
const Profile = () => {
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
  return (
    <motion.div variants={parentVariant} initial="hidden" animate="visible">
      <Container>
        <motion.div variants={childVariant}>
          <Breadcrumb title="Profile Page" />

          <motion.div
            variants={childVariant}
            className="flex  gap-10 items-center"
          >
            <img
              src="../../../public/assets/avatar.png"
              alt="profile pic"
              className="w-full rounded-md border-2 border-primary/10"
            />
            <div>
              <div className="flex items-center justify-between">
                <motion.h2
                  variants={childVariant}
                  className="text-2xl font-semibold "
                >
                  User Name
                </motion.h2>
                <motion.div variants={childVariant} onClick={openAddModal}>
                  <PrimaryButton>Update Profile</PrimaryButton>
                </motion.div>
              </div>
              <motion.p variants={childVariant} className="py-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
                provident consequatur labore. Earum consequuntur quod amet
                tenetur temporibus vel accusantium alias eaque perspiciatis
                dolorum quaerat iure praesentium, dolore, facilis quibusdam
                expedita, velit fugiat enim tempore optio labore adipisci cum
                ad? Esse sed voluptatum doloremque, nemo magnam sint adipisci.
                Laborum, nobis?
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </Container>
      <ActionModal
        isOpen={isAddModalOpen}
        closeModal={closeModals}
        title="Update Profile"
        actionContent={<UpdateProfile closeModal={closeModals} />}
      />
    </motion.div>
  );
};

export default Profile;
