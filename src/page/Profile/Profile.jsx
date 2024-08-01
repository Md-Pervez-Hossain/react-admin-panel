import React from "react";
import usePageAnimation from "../../../hooks/usePageAnimation";
import { motion } from "framer-motion";
import Container from "../../share/ui/Container/Container";
import Breadcrumb from "../../share/Breadcrumb/Breadcrumb";
const Profile = () => {
  const { parentVariant, childVariant } = usePageAnimation();
  return (
    <motion.div variants={parentVariant} initial="hidden" animate="visible">
      <Container>
        <motion.div variants={childVariant}>
          <Breadcrumb title="Profile Page" />
          <motion.h2 variants={childVariant}>Profile Page</motion.h2>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default Profile;
