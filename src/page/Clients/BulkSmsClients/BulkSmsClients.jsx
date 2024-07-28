import Container from "../../../share/ui/Container/Container";
import Breadcrumb from "../../../share/Breadcrumb/Breadcrumb";
import { motion } from "framer-motion";
import usePageAnimation from "../../../../hooks/usePageAnimation";
const BulkSmsClients = () => {
  const { parentVariant, childVariant } = usePageAnimation();
  return (
    <motion.div variants={parentVariant} initial="hidden" animate="visible">
      <Container>
        <motion.div variants={childVariant}>
          <Breadcrumb title="Bulk SMS" />
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default BulkSmsClients;
