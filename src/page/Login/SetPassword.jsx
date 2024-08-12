import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useSetPasswordMutation } from "../../redux/features/forgetPassword/forgetPasswordApi";

const SetPassword = ({ setShowComponent }) => {
  const [setPassword] = useSetPasswordMutation();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isLoading },
  } = useForm();

  const handleSetPassword = async (value) => {
    const res = await setPassword(value);
    console.log(res);
    if (res?.data?.status === 200) {
      toast.success(res?.data?.msg);
      setShowComponent("loginform");
    } else {
      toast.error(res?.data?.msg);
    }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center">
      <div className="bg-gray-50 p-5 rounded-lg border-2 border-primary/10 w-96 mx-auto">
        <h2 className="text-center font-semibold text-xl mb-5">
          Reset Password
        </h2>
        <form onSubmit={handleSubmit(handleSetPassword)}>
          <fieldset disabled={isSubmitting} className="disabled:opacity-50">
            <div className="grid grid-cols-1 gap-5">
              <input
                {...register("token", { required: "Token is required" })}
                className="px-4 py-2 border border-gray-300 focus:outline-none rounded-lg"
                placeholder="Enter Your Token"
                type="text"
              />
              {errors.token && <span>{errors.token.message}</span>}
              <input
                {...register("password", { required: "Email is required" })}
                className="px-4 py-2 border border-gray-300 focus:outline-none rounded-lg"
                placeholder="Enter New Password"
                type="password"
              />
              {errors.password && <span>{errors.password.message}</span>}

              <input
                {...register("confirmpassword", {
                  required: "Password is required",
                })}
                className="px-4 py-2 border border-gray-300 focus:outline-none rounded-lg"
                placeholder="Confirm Password"
                type="password"
              />
              {errors.confirmpassword && (
                <span>{errors.confirmpassword.message}</span>
              )}

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
            <span className="text-[14px] cursor-pointer font-poppins">
              Login !
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetPassword;
