import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useEditbulkSmsClientsMutation } from "../../../redux/features/bulkSmsClient/bulkSmsClient";

const EditBulkSmsClient = ({ closeModal, data }) => {
  const { id, username, email, organization, balance } = data;

  const [editBulkSmsClients, { isError, isLoading, isSuccess, error }] =
    useEditbulkSmsClientsMutation();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const handleApiClients = async (data) => {
    const response = await editBulkSmsClients({ data, id });

    if (response?.data) {
      toast.success("Bulk sms Clients Added");
      closeModal();
    }
  };

  useEffect(() => {
    setValue("username", username);
    setValue("email", email);
    setValue("organization", organization);
    setValue("balance", balance);
  }, [id, username, email, organization, balance, setValue]);

  return (
    <div className="">
      <form onSubmit={handleSubmit(handleApiClients)}>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-[4px]">
            <label>Email</label>
            <input
              {...register("email", { required: "Email is required" })}
              className="px-4 py-2 border border-gray-300 focus:outline-none rounded-lg"
              placeholder="Enter Your Email"
              type="email"
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>
          <div className="flex flex-col gap-[4px]">
            <label>User Name</label>
            <input
              {...register("username", { required: "User Name is required" })}
              className="px-4 py-2 border border-gray-300 focus:outline-none rounded-lg"
              placeholder="Enter Your username"
              type="text"
            />
            {errors.username && <span>{errors.username.message}</span>}
          </div>
          <div className="flex flex-col gap-[4px]">
            <label>Organization</label>
            <input
              {...register("organization", {
                required: "Organization is required",
              })}
              className="px-4 py-2 border border-gray-300 focus:outline-none rounded-lg"
              placeholder="Enter organization"
              type="text"
            />
            {errors.organization && <span>{errors.organization.message}</span>}
          </div>
          <div className="flex flex-col gap-[4px]">
            <label>Balance</label>
            <input
              {...register("balance", {
                required: "Balance is required",
              })}
              className="px-4 py-2 border border-gray-300 focus:outline-none rounded-lg"
              placeholder="Enter Balance"
              type="number"
            />
            {errors.balance && <span>{errors.balance.message}</span>}
          </div>
        </div>
        <button
          type="submit "
          className="bg-primary text-white px-[12px] py-[8px] rounded-lg cursor-pointer mt-5 w-full"
        >
          {isLoading ? "Processing" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default EditBulkSmsClient;
