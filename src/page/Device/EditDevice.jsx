import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useEditDeviceMutation } from "../../redux/features/device/deviceApi";

const EditDevice = ({ closeModal, data }) => {
  const { id, username, password, url, deviceName } = data;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [editDevice, { isError, isLoading, isSuccess, error }] =
    useEditDeviceMutation();

  useEffect(() => {
    setValue("username", username);
    setValue("password", password);
    setValue("url", url);
    setValue("deviceName", deviceName);
  }, [id, username, password, url, deviceName, setValue]);
  const handleApiClients = async (data) => {
    console.log(data);
    try {
      const response = await editDevice({ data, id });
      console.log(response);
      if (response?.data) {
        toast.success("Device Edited");
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

export default EditDevice;
