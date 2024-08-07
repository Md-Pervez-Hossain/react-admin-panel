import { useForm } from "react-hook-form";
import { useAddbulkSmsSendMutation } from "../../../redux/features/bulkSmsSend/bulkSmsSendApi";
import toast from "react-hot-toast";
import { useGetbulkSmsClientsQuery } from "../../../redux/features/bulkSmsClient/bulkSmsClient";
import { useNavigate } from "react-router-dom";

const SendBulkSms = ({ closeModal }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [addBulkSmsSend, { isLoading: bulkSmsSendLoading }] =
    useAddbulkSmsSendMutation();

  const { data: apiClientsData, isLoading } = useGetbulkSmsClientsQuery();

  const handleApiClients = async (formData) => {
    const data = new FormData();
    data.append("client", formData.client);
    data.append("message", formData.message);
    data.append("jobName", formData.jobName);
    data.append("csvFile", formData.csvFile[0]);

    const response = await addBulkSmsSend(data);
    if (response?.data?.msg) {
      toast.success("Successfully Sent Bulk SMS");
      closeModal();
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit(handleApiClients)}>
        <div>
          <div className="flex flex-col gap-[4px] mb-[6px]">
            <label>Bulk Sms Name</label>
            <input
              {...register("jobName", {
                required: "Attachment is required",
              })}
              className="px-4 py-2 border border-gray-300 focus:outline-none rounded-lg"
              placeholder="Enter Sms Name"
              type="text"
            />
            {errors.jobName && <span>{errors.jobName.message}</span>}
          </div>
          <div className="flex flex-col gap-[4px] mb-[6px]">
            <label>Client Name</label>
            <select
              {...register("client", { required: "Client Name is Required" })}
              className={`w-full px-2 py-2 rounded-lg border-2 border-borderColor focus:border-borderColor focus:ring-darkOrange outline-none`}
            >
              <option value="">Select Client</option>
              {apiClientsData?.results?.length > 0 &&
                apiClientsData?.results?.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.username}
                  </option>
                ))}
            </select>
            {errors.client && (
              <p className="text-darkOrange">{errors.client.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-[4px] mb-[6px]">
            <label>Message</label>
            <textarea
              {...register("message", {
                required: "Message is required",
              })}
              className="px-4 py-2 border border-gray-300 focus:outline-none rounded-lg"
              placeholder="Enter Message"
              type="text"
            />
            {errors.message && <span>{errors.message.message}</span>}
          </div>
          <div className="flex flex-col gap-[4px] mb-[6px]">
            <label>Attachment</label>
            <input
              {...register("csvFile", {
                required: "Attachment is required",
              })}
              className="px-4 py-2 border border-gray-300 focus:outline-none rounded-lg"
              placeholder="Upload CSV File"
              type="file"
            />
            {errors.csvFile && <span>{errors.csvFile.message}</span>}
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-primary text-white px-[12px] py-[8px] rounded-lg cursor-pointer mt-5"
          >
            {bulkSmsSendLoading ? "Processing" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendBulkSms;
