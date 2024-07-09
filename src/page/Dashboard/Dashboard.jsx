import { AiOutlinePlus } from "react-icons/ai";
import useModalDropdown from "../../../hooks/useModalDropdown";
import ActionModal from "../../share/ActionModal/ActionModal";
import Breadcrumb from "../../share/Breadcrumb/Breadcrumb";
import AreaCharts from "../../share/Charts/AreaChart/AreaChart";
import BarCharts from "../../share/Charts/BarChart/BarCharts";
import Heading from "../../share/ui/Heading/Heading";
import Paragraph from "../../share/ui/Paragraph/Paragraph";
import Container from "../../share/ui/Container/Container";
import { useRef } from "react";
import useClickOutside from "../../../hooks/useClickOutside";
import DropdownMenu from "../../share/DropdownMenu/DropdownMenu";
import Table from "../../share/Table/Table";
import { usersData } from "../../share/Data/Data";

const Dashboard = () => {
  const {
    dropdownOpenId,
    selectedUserId,
    isAddModalOpen,
    isEditModalOpen,
    isDeleteModalOpen,
    isDetailsModalOpen,
    toggleDropdown,
    openAddModal,
    openEditModal,
    openDeleteModal,
    openDetailsModal,
    closeModals,
  } = useModalDropdown();
  const dropdownRef = useRef(null);

  useClickOutside(dropdownRef, () => toggleDropdown(null));

  const header = [
    { header: "Sl", accessorKey: "id" },
    {
      header: "Image",
      accessorKey: "image",
      cell: ({ row }) => (
        <img
          src={row.original.image}
          alt=""
          className="w-12 h-12 rounded-full"
        />
      ),
    },
    { header: "Name", accessorKey: "username" },
    { header: "Category", accessorKey: "category" },
    { header: "Gender", accessorKey: "gender" },
    {
      header: "Action",
      id: "action",
      cell: ({ row }) => {
        const { id } = row.original;
        const isOpen = dropdownOpenId === id;

        return (
          <DropdownMenu
            id={id}
            isOpen={isOpen}
            toggleDropdown={toggleDropdown}
            onEdit=""
            onDelete=""
            onDetails={openDetailsModal}
          />
        );
      },
    },
  ];

  return (
    <Container>
      <div className="font-poppins">
        <Breadcrumb title="Dashboard" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {/* Weekly Sales */}
          <div className="p-5 rounded-lg bg-gradient-to-r from-primary/70 to-secondary/10 cursor-pointer transition-all duration-700 flex items-center justify-center hover:scale-105 hover:shadow-lg">
            <div className="text-center">
              <h2 className="font-semibold text-[24px] text-white">
                Weekly Sales
              </h2>
              <p className="font-normal text-white">$ 500000</p>
              <p className="font-normal text-white">Increase by 30%</p>
            </div>
          </div>

          {/* Monthly Sales */}
          <div className="p-5 rounded-lg bg-gradient-to-r from-secondary/70 to-secondary/10 cursor-pointer transition-all duration-700 flex items-center justify-center hover:scale-105 hover:shadow-lg">
            <div className="text-center">
              <h2 className="font-semibold text-[24px] text-white">
                Monthly Sales
              </h2>
              <p className="font-normal text-white">$ 500000</p>
              <p className="font-normal text-white">Increase by 20%</p>
            </div>
          </div>

          {/* Yearly Sales */}
          <div className="p-5 rounded-lg bg-gradient-to-r from-primary/70 to-secondary/10 cursor-pointer transition-all duration-700 flex items-center justify-center hover:scale-105 hover:shadow-lg">
            <div className="text-center">
              <h2 className="font-semibold text-[24px] text-white">
                Yearly Sales
              </h2>
              <p className="font-normal text-white">$ 500000</p>
              <p className="font-normal text-white">Increase by 10%</p>
            </div>
          </div>

          {/* Area Chart */}
          <div className="bg-white p-5 rounded-lg row-span-6 ">
            <AreaCharts />
          </div>

          {/* Bar Chart */}
          <div className="bg-white p-5 rounded-lg row-span-6 ">
            <BarCharts />
          </div>
          {/* Area Chart */}
          <div className="bg-white p-5 rounded-lg row-span-6 ">
            <AreaCharts />
          </div>
        </div>
        <div className=" rounded-lg row-span-6  mt-3">
          <Table columns={header} tabelData={usersData} />
        </div>
        <ActionModal
          isOpen={isDetailsModalOpen}
          closeModal={closeModals}
          title="User Details"
          actionContent={
            <div className="p-5">User Details Information {selectedUserId}</div>
          }
        />
      </div>
    </Container>
  );
};

export default Dashboard;
