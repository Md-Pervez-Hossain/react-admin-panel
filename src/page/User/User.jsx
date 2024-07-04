import { AiOutlinePlus } from "react-icons/ai";
import { useModal } from "../../../hooks/useModal";
import Modal from "../../share/Modal/Modal";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import Table from "../../share/Table/Table";
import { usersData } from "../../share/Data/Data";
import Breadcrumb from "../../share/Breadcrumb/Breadcrumb";

const User = () => {
  const { isModalOpen, closeModal, openModal } = useModal();
  const roomHeader = [
    {
      header: "Room Number",
      accessorKey: "room_number",
    },
    {
      header: "Room Number",
      accessorKey: "room_number",
    },
    {
      header: "Class",
      accessorKey: "class_name",
      cell: ({ row }) => {
        const { class_name } = row.original;
        return (
          <>
            {class_name ? (
              <span>{class_name}</span>
            ) : (
              <span className="text-red-300">Empty</span>
            )}
          </>
        );
      },
    },
    {
      header: "Section",
      accessorKey: "section_name",
      cell: ({ row }) => {
        const { section_name } = row.original;
        return (
          <>
            {section_name ? (
              <span>{section_name}</span>
            ) : (
              <span className="text-red-300">Empty</span>
            )}
          </>
        );
      },
    },

    // {
    //   header: "Created At",
    //   accessorKey: "created_at",
    //   cell: ({ row }) => {
    //     const { created_at } = row.original;
    //     return (
    //       <>
    //         {created_at && (
    //           <span>{dayjs(created_at).format("DD MMM YYYY")}</span>
    //         )}
    //       </>
    //     );
    //   },
    // },
    // {
    //   header: "Action",
    //   id: "action",
    //   cell: ({ row }) => {
    //     const { id } = row.original;
    //     return (
    //       <div>
    //         <div className="dropdown dropdown-top dropdown-end z-50 ">
    //           <label tabIndex={0} className="cursor-pointer">
    //             <HiOutlineDotsHorizontal />
    //           </label>
    //           <ul
    //             tabIndex={0}
    //             className="dropdown-content z-[1] menu p-2 shadow-lg bg-base-100 rounded-box w-52"
    //           >
    //             <li>
    //               <button onClick={() => setEditModalId(row.original)}>
    //                 Edit
    //               </button>
    //             </li>

    //             <li onClick={() => setDeleteModalId(row.original)}>
    //               <a>Delete</a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     );
    //   },
    // },
  ];
  return (
    <div className="font-poppins ">
      <div className="flex items-center justify-between">
        <Breadcrumb title="User Page" />

        <button
          onClick={openModal}
          className="flex  items-center gap-2 bg-primary/80 px-6 py-3  text-white rounded-lg"
        >
          <AiOutlinePlus className="font-semibold"></AiOutlinePlus>
          <span>Add Room</span>
        </button>
      </div>
      <Table
        columns={roomHeader}
        tabelData={usersData}
        // pagination={pagination}
        // setPagination={setPagination}
        // totalData={totalData}
        // loading={loading}
        // search={search}
        // setSearch={setSearch}
      />
      <Modal
        isOpen={isModalOpen}
        openModal={openModal}
        closeModal={closeModal}
        title="Add Room Number"
      >
        <div>Heelo</div>
      </Modal>
    </div>
  );
};

export default User;
