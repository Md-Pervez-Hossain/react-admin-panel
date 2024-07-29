import React from "react";
import { useForm } from "react-hook-form";
import { useAddDeviceMutation } from "../../redux/features/device/deviceApi";
import toast from "react-hot-toast";

const AddDevice = ({ closeModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [addDevice, { isError, isLoading, isSuccess, error }] =
    useAddDeviceMutation();

  const handleApiClients = async (value) => {
    try {
      const response = await addDevice(value);
      console.log(response);
      if (response?.data) {
        toast.success("Device Added");
        closeModal();
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit(handleApiClients)}>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-[4px]">
            <label>User Name</label>
            <input
              {...register("username", { required: "Username is required" })}
              className="px-4 py-2 border border-gray-300 focus:outline-none rounded-lg"
              placeholder="Enter User Name"
              type="text"
            />
            {errors.username && <span>{errors.username.message}</span>}
          </div>
          <div className="flex flex-col gap-[4px]">
            <label>Password</label>
            <input
              {...register("password", { required: "Username is required" })}
              className="px-4 py-2 border border-gray-300 focus:outline-none rounded-lg"
              placeholder="Enter Password"
              type="password"
            />
            {errors.password && <span>{errors.password.message}</span>}
          </div>
          <div className="flex flex-col gap-[4px]">
            <label>Url</label>
            <input
              {...register("url", { required: "Username is required" })}
              className="px-4 py-2 border border-gray-300 focus:outline-none rounded-lg"
              placeholder="Enter Url"
              type="text"
            />
            {errors.url && <span>{errors.url.message}</span>}
          </div>
          <div className="flex flex-col gap-[4px]">
            <label>Device Name</label>
            <input
              {...register("deviceName", {
                required: "Device Name is required",
              })}
              className="px-4 py-2 border border-gray-300 focus:outline-none rounded-lg"
              placeholder="Enter Url"
              type="text"
            />
            {errors.deviceName && <span>{errors.deviceName.message}</span>}
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

export default AddDevice;
