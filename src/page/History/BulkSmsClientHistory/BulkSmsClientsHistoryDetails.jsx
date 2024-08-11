import { Link, useParams } from "react-router-dom";
import {
  useAddbulkSmsHistoryResendMutation,
  useGetBulkSmsHistoryDetailsQuery,
} from "../../../redux/features/bulkSmsHistory/bulkSmsHistoryApi";
import Container from "../../../share/ui/Container/Container";
import usePageAnimation from "../../../../hooks/usePageAnimation";
import Table from "../../../share/Table/Table";
import { useEffect, useState } from "react";
import PrimaryButton from "../../../share/Buttons/PrimaryButton";
import { useDispatch } from "react-redux";

const BulkSmsClientsHistoryDetails = () => {
  const [resendState, setReSendState] = useState("");
  const [searchText, setSearchText] = useState("");
  console.log(searchText);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
  });

  const query = `page=${pagination.pageIndex + 1}&limit=${
    pagination.pageSize
  }&status=${searchText}`;
  const { id } = useParams();

  const [resend, { isLoading: resendLoading }] =
    useAddbulkSmsHistoryResendMutation();
  const {
    data: bulkSmsHistoryDetails,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useGetBulkSmsHistoryDetailsQuery({ id, query });
  console.log(bulkSmsHistoryDetails);
  const { parentVariant, childVariant } = usePageAnimation();

  const header = [
    { header: "Number", accessorKey: "phoneNumber" },
    {
      header: "status",
      accessorKey: "status",
      cell: ({ row }) => {
        const { status } = row.original;

        return status === "Failed" ? (
          <span className="bg-red-200 text-red-500 px-4 py-2 rounded-md ">
            {status}
          </span>
        ) : status === "Succeed" ? (
          <span className="bg-green-200 text-green-500 px-4 py-2 rounded-md ">
            {status}
          </span>
        ) : status === "Resending" ? (
          <span className="bg-gray-200 text-gray-500 px-4 py-2 rounded-md ">
            {status}
          </span>
        ) : (
          <span>{status}</span>
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
  if (!isLoading && !isError && bulkSmsHistoryDetails?.results?.length === 0) {
    content = <p>No Data Found</p>;
  }
  if (!isLoading && !isError && bulkSmsHistoryDetails?.results?.length > 0) {
    content = (
      <Table
        columns={header}
        tabelData={bulkSmsHistoryDetails?.results}
        pagination={pagination}
        setPagination={setPagination}
        totalData={bulkSmsHistoryDetails.count}
      />
    );
  }

  const handleResend = async () => {
    const res = await resend(id);
    console.log(res);
    setReSendState(res?.data?.processStatus);
  };

  return (
    <Container>
      {" "}
      <div className="flex justify-between items-end">
        <div className="pt-2 pb-5 flex flex-col gap-2">
          <div className="flex items-center gap-5">
            <h2>
              {" "}
              <span className="font-medium font-poppins">
                Client Name :
              </span>{" "}
              {bulkSmsHistoryDetails?.client?.username}
            </h2>
            <h2>
              {" "}
              <span className="font-medium font-poppins">
                Organisation :
              </span>{" "}
              {bulkSmsHistoryDetails?.client?.organization}
            </h2>
            <h2>
              {" "}
              <span className="font-medium font-poppins">Balance :</span>{" "}
              {bulkSmsHistoryDetails?.client?.balance} unit
            </h2>
          </div>
          <div className="flex items-center gap-5">
            <h2>
              <span className="font-medium font-poppins">Total SMS :</span>{" "}
              {bulkSmsHistoryDetails?.totalSMS}
            </h2>
            <h2>
              <span className="font-medium font-poppins">
                Total SMS Sent :{" "}
              </span>
              {bulkSmsHistoryDetails?.smsSent}
            </h2>
            <h2>
              <span className="font-medium font-poppins">
                Total SMS Failed :
              </span>{" "}
              {bulkSmsHistoryDetails?.smsFailed}
            </h2>
          </div>
          <h2>
            <span className="font-medium font-poppins">Message :</span>{" "}
            {bulkSmsHistoryDetails?.message}
          </h2>
        </div>
        <div className="flex items-center gap-5">
          <button
            className={`bg-primary px-4 py-2 rounded-md text-white ${
              bulkSmsHistoryDetails?.processStatus === "Resending"
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            onClick={handleResend}
            disabled={bulkSmsHistoryDetails?.processStatus === "Resending"}
          >
            {bulkSmsHistoryDetails?.processStatus === "Resending"
              ? "Resending"
              : "Re-Send"}
          </button>

          <div className="flex flex-col gap-[4px] ">
            <select
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border-2 border-borderColor focus:border-borderColor focus:ring-darkOrange outline-none"
            >
              <option value="">Select </option>
              <option value="Succeed">Success </option>
              <option value="Failed">Failed </option>
            </select>
          </div>
        </div>
      </div>
      {content}
      {/* <div className=" shadow-lg">
          <table className="min-w-full">
            <thead className="bg-primary/10 rounded-lg">
              <tr>
                <th className="px-4 py-3 whitespace-nowrap text-[14px] font-medium">
                  Number
                </th>
                <th className="px-4 py-3 whitespace-nowrap text-[14px] font-medium">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {bulkSmsHistoryDetails?.numbers?.map((data) => {
                console.log(data);
                return (
                  <tr key={data?.id}>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                      {data?.phoneNumber}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                      {data?.status}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div> */}
    </Container>
  );
};

export default BulkSmsClientsHistoryDetails;
