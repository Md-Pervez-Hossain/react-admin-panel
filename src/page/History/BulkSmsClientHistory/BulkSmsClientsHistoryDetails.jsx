import { useParams } from "react-router-dom";
import { useGetBulkSmsHistoryDetailsQuery } from "../../../redux/features/bulkSmsHistory/bulkSmsHistoryApi";
import Container from "../../../share/ui/Container/Container";

const BulkSmsClientsHistoryDetails = () => {
  const { id } = useParams();
  const { data: bulkSmsHistoryDetails } = useGetBulkSmsHistoryDetailsQuery(id);
  console.log(bulkSmsHistoryDetails);
  return (
    <Container>
      {" "}
      <div>
        <div className="pt-2 pb-5 flex flex-col gap-2">
          <h2>
            {" "}
            <span className="font-medium font-poppins">Client Name :</span>{" "}
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
        <div className=" shadow-lg">
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
        </div>
      </div>
    </Container>
  );
};

export default BulkSmsClientsHistoryDetails;
