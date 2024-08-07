import React from "react";
import usePageAnimation from "../../../hooks/usePageAnimation";
import { motion } from "framer-motion";
import Container from "../../share/ui/Container/Container";
import Breadcrumb from "../../share/Breadcrumb/Breadcrumb";
import PrimaryButton from "../../share/Buttons/PrimaryButton";
import useModalDropdown from "../../../hooks/useModalDropdown";
import ActionModal from "../../share/ActionModal/ActionModal";
import UpdateProfile from "./UpdateProfile";
import { useGetProfileQuery } from "../../redux/features/profile/profileApi";
const Profile = () => {
  const { parentVariant, childVariant } = usePageAnimation();

  const { data: profileInfo, isLoading, isError, error } = useGetProfileQuery();

  let content;
  if (isLoading && !isError) {
    content = <p>Loading......</p>;
  } else {
    content = profileInfo;
  }

  console.log(content);

  const { bio, profile_picture, username, email } = content;
  const { isAddModalOpen, openAddModal, closeModals } = useModalDropdown();
  return (
    <motion.div variants={parentVariant} initial="hidden" animate="visible">
      <Container>
        <motion.div variants={childVariant}>
          <Breadcrumb title="Profile Page" />

          <motion.div
            variants={childVariant}
            className="grid grid-cols-3  gap-10 items-center"
          >
            <img
              src={profile_picture}
              alt="profile pic"
              className="w-full rounded-md border-2 border-primary/10"
            />
            <div className="col-span-2">
              <div className="flex items-center justify-between">
                <div>
                  <motion.h2
                    variants={childVariant}
                    className="text-2xl font-semibold "
                  >
                    {username}
                  </motion.h2>
                  <p>{email}</p>
                </div>
                <motion.div variants={childVariant} onClick={openAddModal}>
                  <PrimaryButton>Update Profile</PrimaryButton>
                </motion.div>
              </div>
              <motion.p variants={childVariant} className="py-5">
                {bio}
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </Container>
      <ActionModal
        isOpen={isAddModalOpen}
        closeModal={closeModals}
        title="Update Profile"
        actionContent={
          <UpdateProfile data={content} closeModal={closeModals} />
        }
      />
    </motion.div>
  );
};

export default Profile;
