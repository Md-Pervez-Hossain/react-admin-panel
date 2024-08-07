import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useUpdateProfileMutation } from "../../redux/features/profile/profileApi";

const UpdateProfile = ({ data, closeModal }) => {
  const { bio, profile_picture, username, email } = data;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [updateProfile, { isLoading }] = useUpdateProfileMutation();

  useEffect(() => {
    setValue("username", username);
    setValue("email", email);
    setValue("bio", bio);
  }, [bio, profile_picture, username, email, setValue]);

  const handleApiClients = async (formData) => {
    console.log(formData);
    const data = new FormData();
    data.append("username", formData.username);
    data.append("email", formData.email);
    data.append("bio", formData.bio);

    if (formData.profile_picture[0]) {
      data.append("profile_picture", formData.profile_picture[0]);
    }

    const response = await updateProfile(data);
    console.log(response);
    if (response?.data?.msg || response?.data) {
      toast.success("Successfully Profile Updated");
      closeModal();
    }
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
              {...register("profile_picture")}
              className="px-4 py-2 border border-gray-300 focus:outline-none rounded-lg"
              placeholder="Enter organization"
              type="file"
            />
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
