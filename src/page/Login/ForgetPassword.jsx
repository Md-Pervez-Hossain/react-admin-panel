import React from "react";
import { useForm } from "react-hook-form";

const ForgetPassword = ({ setShowComponent }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isLoading },
  } = useForm();

  const handleForgetPassword = () => {
    console.log("clicked");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className=" bg-white p-5 rounded-lg border-2 border-primary/10 w-96 mx-auto">
        <h2 className="text-center font-semibold text-xl mb-5">
          Forget Password !
        </h2>
        <form onSubmit={handleSubmit(handleForgetPassword)}>
          <fieldset disabled={isSubmitting} className="disabled:opacity-50">
            <div className="grid grid-cols-1 gap-5">
              <input
                {...register("email", { required: "Email is required" })}
                className="px-4 py-2 border border-gray-300 focus:outline-none rounded-lg"
                placeholder="Enter Your Email"
                type="email"
              />
              {errors.email && <span>{errors.email.message}</span>}

              <button
                type="submit"
                className="bg-primary text-white px-[12px] py-[8px] rounded-lg cursor-pointer"
              >
                {isLoading ? "Processing" : "Submit"}
              </button>
            </div>
          </fieldset>
        </form>
        <div className="flex items-center justify-center mt-3">
          <button onClick={() => setShowComponent("loginform")}>
            <span className="text-[16px] cursor-pointer font-poppins">
              Login !
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
