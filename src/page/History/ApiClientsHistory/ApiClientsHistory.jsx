import React from "react";
import usePageAnimation from "../../../../hooks/usePageAnimation";
import Breadcrumb from "../../../share/Breadcrumb/Breadcrumb";
import { motion } from "framer-motion";
import Container from "../../../share/ui/Container/Container";
const ApiClientsHistory = () => {
  const { parentVariant, childVariant } = usePageAnimation();
  return (
    <motion.div variants={parentVariant} initial="hidden" animate="visible">
      <Container>
        <motion.div variants={childVariant}>
          <Breadcrumb title="History" />
          <motion.h2 variants={childVariant}>Api Clients History</motion.h2>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default ApiClientsHistory;
