import { AiOutlinePlus } from "react-icons/ai";
import useModalDropdown from "../../../hooks/useModalDropdown";
import Breadcrumb from "../../share/Breadcrumb/Breadcrumb";
import ActionModal from "../../share/ActionModal/ActionModal";
import Container from "../../share/ui/Container/Container";

const Home = () => {
  const { selectedUserId, isAddModalOpen, openAddModal, closeModals } =
    useModalDropdown();
  return (
    <Container>
      <div>
        <Breadcrumb title="Home Page" />
        <div className="flex items-center justify-between mb-4">
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
        </div>

        <ActionModal
          isOpen={isAddModalOpen}
          closeModal={closeModals}
          title="Add "
          actionContent={<div>Add User Form </div>}
        />
      </div>
    </Container>
  );
};

export default Home;
