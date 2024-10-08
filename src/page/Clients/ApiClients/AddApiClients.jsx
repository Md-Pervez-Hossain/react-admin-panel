import React from "react";
import { useForm } from "react-hook-form";
import { useAddApiClientsMutation } from "../../../redux/features/apiClients/apiClients";
import toast from "react-hot-toast";

const AddApiClients = ({ closeModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const [addApiClients, { isLoading }] = useAddApiClientsMutation();

  const handleApiClients = async (value) => {
    const response = await addApiClients(value);
    console.log(response);
    if (response?.data?.msg) {
      toast.success("Api Clients Added");
      closeModal();
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit(handleApiClients)}>
        <fieldset disabled={isSubmitting} className=" disabled:opacity-70">
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
              {errors.organization && (
                <span>{errors.organization.message}</span>
              )}
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
          <div className="flex justify-end">
            <button
              type="submit "
              className="bg-primary text-white px-[12px] py-[8px] rounded-lg cursor-pointer mt-5 "
            >
              {isLoading ? "Processing" : "Submit"}
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default AddApiClients;
