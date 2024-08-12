import React from "react";
import { useForm } from "react-hook-form";

const SetPassword = ({ setShowComponent }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isLoading },
  } = useForm();

  // const [login, { isLoading }] = useLoginMutation();

  const handleSetPassword = async (value) => {
    // const res = await login(value);
    // if (res?.data?.token) {
    //   navigate("/dashboard");
    // } else if (res?.error?.status === 400) {
    //   toast?.error(res?.error?.data?.msg);
    // }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center">
      <div className="bg-gray-50 p-5 rounded-lg border-2 border-primary/10 w-96 mx-auto">
        <h2 className="text-center font-semibold text-xl mb-5">Log in</h2>
        <form onSubmit={handleSubmit(handleSetPassword)}>
          <fieldset disabled={isSubmitting} className="disabled:opacity-50">
            <div className="grid grid-cols-1 gap-5">
              <input
                {...register("username", { required: "Email is required" })}
                className="px-4 py-2 border border-gray-300 focus:outline-none rounded-lg"
                placeholder="Enter Your Email/ User Name"
                type="text"
              />
              {errors.username && <span>{errors.username.message}</span>}

              <input
                {...register("password", { required: "Password is required" })}
                className="px-4 py-2 border border-gray-300 focus:outline-none rounded-lg"
                placeholder="Enter Your Password"
                type="password"
              />
              {errors.password && <span>{errors.password.message}</span>}

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
          <button onClick={() => setShowComponent("forgetPassword")}>
            <span className="text-[14px] cursor-pointer font-poppins">
              Forget Password ?
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetPassword;
