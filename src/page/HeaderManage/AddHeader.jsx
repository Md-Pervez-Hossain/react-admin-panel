import React from "react";
import { useForm } from "react-hook-form";
import { useAddColorMutation } from "../../redux/features/color/colorApi";
import toast from "react-hot-toast";

const AddHeader = ({ closeModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const [AddColor, { isLoading }] = useAddColorMutation();

  const HandleColor = async (value) => {
    const res = await AddColor(value);
    console.log(res);
    if (res?.data) {
      toast?.success(res?.data?.detail);
      closeModal();
    } else if (res?.error?.status === 400) {
      toast?.error(res?.error?.data?.detail);
    }
  };

  return (
    <div className=" bg-white  rounded-lg  ">
      <form onSubmit={handleSubmit(HandleColor)}>
        <fieldset disabled={isSubmitting} className="disabled:opacity-50">
          <div className="grid lg:grid-cols-3 gap-5">
            <div className="flex flex-col gap-2 ">
              <label className="font-poppins text-[14px] font-normal">
                Primary Color
              </label>
              <input
                {...register("primary_color", {
                  required: "primary Color is required",
                })}
                className="px-4 py-2 border border-gray-300 focus:outline-none rounded-lg"
                placeholder="Enter Primary Color Code"
                type="text"
              />
              {errors.primary_color && (
                <span className="text-red-500">
                  {errors.primary_color.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2 ">
              <label className="font-poppins text-[14px] font-normal">
                Secondary Color
              </label>
              <input
                {...register("secondary_color", {
                  required: "Secondary Color is required",
                })}
                className="px-4 py-2 border border-gray-300 focus:outline-none rounded-lg"
                placeholder="Enter Secondary Color Code"
                type="text"
              />
              {errors.secondary_color && (
                <span className="text-red-500">
                  {errors.secondary_color.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2 ">
              <label className="font-poppins text-[14px] font-normal">
                Accent Color
              </label>
              <input
                {...register("accent_color", {
                  required: "Accent Color is required",
                })}
                className="px-4 py-2 border border-gray-300 focus:outline-none rounded-lg"
                placeholder="Enter Accent Color Code"
                type="text"
              />
              {errors.accent_color && (
                <span className="text-red-500">
                  {errors.accent_color.message}
                </span>
              )}
            </div>
          </div>
          <div className="flex items-center justify-end my-5">
            <button
              type="submit"
              className="bg-primary text-white px-[12px] py-[8px] rounded-lg cursor-pointer w-fit"
            >
              {isLoading ? "Processing" : "Submit"}
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default AddHeader;
