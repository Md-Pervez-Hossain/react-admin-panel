import { AiOutlinePlus } from "react-icons/ai";
import useModalDropdown from "../../../hooks/useModalDropdown";
import Breadcrumb from "../../share/Breadcrumb/Breadcrumb";
import ActionModal from "../../share/ActionModal/ActionModal";

const Home = () => {
  const { selectedUserId, isAddModalOpen, openAddModal, closeModals } =
    useModalDropdown();
  return (
    <div>
      <Breadcrumb title="Home Page" />
      <button
        onClick={openAddModal}
        className="flex items-center gap-2 bg-primary/80 px-6 py-3 text-white rounded-lg"
      >
        <AiOutlinePlus className="font-semibold" />
        <span>Add User</span>
      </button>

      {/* <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2 px-3 bg-gray-100 font-semibold text-sm uppercase border-r">
                SL
              </th>
              <th className="text-left py-2 px-3 bg-gray-100 font-semibold text-sm uppercase border-r">
                Name
              </th>

              <th className="text-left py-2 px-3 bg-gray-100 font-semibold text-sm uppercase border-r">
                Status
              </th>
              <th className="text-left py-2 px-3 bg-gray-100 font-semibold text-sm uppercase">
                Designation
              </th>
              <th className="text-left py-2 px-3 bg-gray-100 font-semibold text-sm uppercase">
                Designation
              </th>
              <th className="text-left py-2 px-3 bg-gray-100 font-semibold text-sm uppercase">
                Designation
              </th>
              <th className="text-left py-2 px-3 bg-gray-100 font-semibold text-sm uppercase">
                Designation
              </th>
              <th className="text-left py-2 px-3 bg-gray-100 font-semibold text-sm uppercase">
                Designation
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-100">
              <td className="py-2 px-3 border-r text-sm">1</td>
              <td className="py-2 px-3 border-r text-sm">John Doe</td>

              <td className="py-2 px-3 border-r text-sm">Active</td>
              <td className="py-2 px-3 text-sm">Developer</td>
            </tr>
          </tbody>
        </table>
      </div> */}

      <ActionModal
        isOpen={isAddModalOpen}
        closeModal={closeModals}
        title="Add User"
        actionContent={<div>Add User Form </div>}
      />
    </div>
  );
};

export default Home;
