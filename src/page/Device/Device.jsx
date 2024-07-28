import Container from "../../share/ui/Container/Container";
import Breadcrumb from "../../share/Breadcrumb/Breadcrumb";
import usePageAnimation from "../../../hooks/usePageAnimation";
import { motion } from "framer-motion";
const Device = () => {
  const { parentVariant, childVariant } = usePageAnimation();
  return (
    <motion.div variants={parentVariant} initial="hidden" animate="visible">
      <Container>
        <motion.div variants={childVariant}>
          <Breadcrumb title="Sim Page" />
          <motion.h2 variants={childVariant}>Sim Page</motion.h2>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default Device;
