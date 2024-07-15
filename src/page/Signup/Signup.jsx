import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLoginForm = (value) => {
    console.log(value); // Check if this logs the form data
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-gray-50 p-5 rounded-lg border-2 border-primary/10">
        <h2 className="text-center font-semibold text-xl mb-5">Sign up</h2>
        <form onSubmit={handleSubmit(handleLoginForm)}>
          <div className="grid grid-cols-1 gap-5">
            <input
              {...register("email", { required: "Email is required" })}
              className="px-4 py-2 border border-gray-300 focus:outline-none rounded-lg"
              placeholder="Enter Your Email"
              type="email"
            />
            {errors.email && <span>{errors.email.message}</span>}

            <input
              {...register("password", { required: "Password is required" })}
              className="px-4 py-2 border border-gray-300 focus:outline-none rounded-lg"
              placeholder="Enter Your Password"
              type="password"
            />
            {errors.password && <span>{errors.password.message}</span>}

            <button
              type="submit "
              className="bg-primary text-white px-[12px] py-[8px] rounded-lg cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
