import React from "react";
import Breadcrumb from "../../share/Breadcrumb/Breadcrumb";
import Container from "../../share/ui/Container/Container";
import usePageAnimation from "../../../hooks/usePageAnimation";
import { motion } from "framer-motion";
const Profile = () => {
  const { parentVariant, childVariant } = usePageAnimation();
  return (
    <Container>
      <motion.div
        variants={parentVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.div variants={childVariant}>
          <Breadcrumb title="Profile Page" />
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Profile;
