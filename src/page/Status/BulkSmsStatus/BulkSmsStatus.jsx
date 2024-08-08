import Container from "../../../share/ui/Container/Container";
import Breadcrumb from "../../../share/Breadcrumb/Breadcrumb";
import usePageAnimation from "../../../../hooks/usePageAnimation";
import { motion } from "framer-motion";
import useModalDropdown from "../../../../hooks/useModalDropdown";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import Table from "../../../share/Table/Table";
import ActionModal from "../../../share/ActionModal/ActionModal";
import BulkSmsStatusDetails from "./BulkSmsStatusDetails";
import { useGetBulkSmsStatusListQuery } from "../../../redux/features/status/bulkSmsStatus/bulkSmsStatusApi";
const BulkSmsStatus = () => {
  const { parentVariant, childVariant } = usePageAnimation();

  const {
    data: bulkSmsStatusData,
    isLoading,
    isError,
  } = useGetBulkSmsStatusListQuery();
  console.log(bulkSmsStatusData);

  const { selectedItemData, isDetailsModalOpen, closeModals } =
    useModalDropdown();

  console.log(selectedItemData);

  const header = [
    { header: "Client Name", accessorKey: "client" },
    { header: "Sms Name", accessorKey: "jobName" },
    {
      header: "Status",
      accessorKey: "processStatus",
      cell: ({ row }) => {
        const { processStatus } = row.original;

        return processStatus === "Processing" ? (
          <span className="bg-red-200 text-red-500 px-4 py-2 rounded-md ">
            {processStatus}
          </span>
        ) : (
          <span className="bg-green-200 text-green-600 px-4 py-2 rounded-md ">
            {processStatus}
          </span>
        );
      },
    },
    // {
    //   header: "Successful",
    //   accessorKey: "smsSent",
    // },
    // { header: "Failed", accessorKey: "smsFailed" },
    // { header: "Total Sms", accessorKey: "totalSMS" },

    {
      header: "Action",
      id: "action",
      cell: ({ row }) => {
        const itemData = row.original;

        return (
          <Link to={`/status/${itemData.id}`}>
            <button className="flex items-center gap-2 bg-primary/70 px-4 py-2 rounded-md text-white">
              <span> View</span> <IoMdArrowForward />
            </button>
          </Link>
        );
      },
    },
  ];

  let content;
  if (isLoading && !isError) {
    content = <p>Loading</p>;
  }
  if (!isLoading && isError) {
    content = <p>Error</p>;
  }
  if (!isLoading && !isError && bulkSmsStatusData?.results?.length === 0) {
    content = <p>No Data Found</p>;
  }
  if (!isLoading && !isError && bulkSmsStatusData?.results?.length > 0) {
    content = <Table columns={header} tabelData={bulkSmsStatusData?.results} />;
  }
  return (
    <Container>
      <motion.div
        variants={parentVariant}
        initial="hidden"
        animate="visible"
        className="font-poppins"
      >
        <motion.div variants={childVariant}>
          <Breadcrumb title="Bulk Sms Status" />
        </motion.div>
        <motion.div
          variants={childVariant}
          className="flex items-center justify-between  mb-2"
        >
          <motion.h2 className="font-poppins  text-[20px]">
            All Bulk Sms Status List
          </motion.h2>
        </motion.div>

        <motion.div variants={childVariant}>{content}</motion.div>
      </motion.div>

      <ActionModal
        isOpen={isDetailsModalOpen}
        closeModal={closeModals}
        title="History Details"
        actionContent={<BulkSmsStatusDetails closeModal={closeModals} />}
      />
    </Container>
  );
};

export default BulkSmsStatus;
