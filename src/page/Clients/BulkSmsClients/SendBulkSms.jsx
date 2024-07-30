import React from "react";
import { useForm } from "react-hook-form";
import { useGetAPiClientsQuery } from "../../../redux/features/apiClients/apiClients";

const SendBulkSms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const [addApiClients, { isLoading }] = useAddbulkSmsClientsMutation();

  const { data: apiClientsData, isLoading } = useGetAPiClientsQuery();

  const handleApiClients = async (value) => {
    console.log(value);
    // const response = await addApiClients(value);
    // console.log(response);
    // if (response?.data?.msg) {
    //   toast.success("Bulk sms Clients Added");
    //   closeModal();
    // }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit(handleApiClients)}>
        <div>
          <div className="flex flex-col gap-[4px] mb-[6px]">
            <label>Client Name</label>
            <select
              {...register("client", { required: "Client Name is Required" })}
              className={`w-full  px-2 py-2 rounded-lg border-2 border-borderColor focus:border-borderColor focus:ring-darkOrange outline-none `}
            >
              <option value="">Select Client</option>
              {apiClientsData?.results?.length > 0 &&
                apiClientsData?.results?.map((item) => (
                  <option key={item.id}>{item.username}</option>
                ))}
            </select>
            {errors.client && (
              <p className="text-darkOrange ">{errors.client.message}</p>
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
              placeholder="Enter Message"
              type="file"
            />
            {errors.csvFile && <span>{errors.csvFile.message}</span>}
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit "
            className="bg-primary text-white px-[12px] py-[8px] rounded-lg cursor-pointer mt-5   "
          >
            {isLoading ? "Processing" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendBulkSms;
