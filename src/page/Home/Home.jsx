import { AiOutlinePlus } from "react-icons/ai";
import useModalDropdown from "../../../hooks/useModalDropdown";
import Breadcrumb from "../../share/Breadcrumb/Breadcrumb";
import ActionModal from "../../share/ActionModal/ActionModal";
import Container from "../../share/ui/Container/Container";
import usePageAnimation from "../../../hooks/usePageAnimation";
import { motion } from "framer-motion";
const Home = () => {
  const { selectedUserId, isAddModalOpen, openAddModal, closeModals } =
    useModalDropdown();

  const { parentVariant, childVariant } = usePageAnimation();
  return (
    <Container>
      <motion.div variants={parentVariant} initial="hidden" animate="visible">
        <motion.div variants={childVariant}>
          <Breadcrumb title="Home Page" />
        </motion.div>
        <motion.div
          variants={childVariant}
          className="flex items-center justify-between mb-4"
        >
          <h2 className="font-poppins font-medium text-[20px]">
            All Product List
          </h2>
          <button
            onClick={openAddModal}
            className="flex items-center gap-2 bg-primary/80 px-6 py-3 text-white rounded-lg"
          >
            <AiOutlinePlus className="font-medium" />
            <span>Add </span>
          </button>
        </motion.div>
      </motion.div>
      <ActionModal
        isOpen={isAddModalOpen}
        closeModal={closeModals}
        title="Add "
        actionContent={<div>Add User Form </div>}
      />
    </Container>
  );
};

export default Home;
