import React from "react";
import { useForm } from "react-hook-form";

const UpdateProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm();

  const handleApiClients = async (value) => {
    console.log(value);
    // const response = await addApiClients(value);
    // console.log(response);
    // if (response?.data?.msg) {
    //   toast.success("Api Clients Added");
    //   closeModal();
    // }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit(handleApiClients)}>
        <div className="grid grid-cols-1 gap-2">
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
            <label>Bio</label>
            <textarea
              {...register("bio", {
                required: "bio is required",
              })}
              className="px-4 py-2 border border-gray-300 focus:outline-none rounded-lg"
              placeholder="Enter Balance"
              type="Bio"
            />
            {errors.bio && <span>{errors.bio.message}</span>}
          </div>

          <div className="flex flex-col gap-[4px]">
            <label>Profile Pic</label>
            <input
              {...register("image", {
                required: "image is required",
              })}
              className="px-4 py-2 border border-gray-300 focus:outline-none rounded-lg"
              placeholder="Enter organization"
              type="file"
            />
            {errors.image && <span>{errors.image.message}</span>}
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
      </form>
    </div>
  );
};

export default UpdateProfile;
