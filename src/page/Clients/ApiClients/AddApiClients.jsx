import React from "react";
import { useForm } from "react-hook-form";
import { useAddApiClientsMutation } from "../../../redux/features/apiClients/apiClients";

const AddApiClients = ({ closeModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm();

  const [addApiClients] = useAddApiClientsMutation();

  const handleApiClients = async (value) => {
    const response = await addApiClients(value);
    console.log(response);
    if (response?.data?.msg) {
      alert("Api Clients Added");
      closeModal();
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit(handleApiClients)}>
        <div className="grid grid-cols-2 gap-5">
          <input
            {...register("email", { required: "Email is required" })}
            className="px-4 py-2 border border-gray-300 focus:outline-none rounded-lg"
            placeholder="Enter Your Email"
            type="email"
          />
          {errors.email && <span>{errors.email.message}</span>}
          <input
            {...register("username", { required: "User Name is required" })}
            className="px-4 py-2 border border-gray-300 focus:outline-none rounded-lg"
            placeholder="Enter Your username"
            type="text"
          />
          {errors.username && <span>{errors.username.message}</span>}

          <input
            {...register("organization", {
              required: "Organization is required",
            })}
            className="px-4 py-2 border border-gray-300 focus:outline-none rounded-lg"
            placeholder="Enter organization"
            type="text"
          />
          {errors.organization && <span>{errors.organization.message}</span>}
          <input
            {...register("balance", {
              required: "Balance is required",
            })}
            className="px-4 py-2 border border-gray-300 focus:outline-none rounded-lg"
            placeholder="Enter Balance"
            type="text"
          />
          {errors.balance && <span>{errors.balance.message}</span>}
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

export default AddApiClients;