import { useForm } from "react-hook-form";
import PrimaryButton from "../../share/Buttons/PrimaryButton";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Login = () => {
  const accessToken = useSelector((state) => state?.auth?.accessToken);
  console.log(accessToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      navigate("/");
    }
  }, [accessToken, navigate]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [login, { isLoading }] = useLoginMutation();

  const handleLoginForm = async (value) => {
    const res = await login(value);
    console.log(res);
    if (res.data.token) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-gray-50 p-5 rounded-lg border-2 border-primary/10">
        <h2 className="text-center font-semibold text-xl mb-5">Log in</h2>
        <form onSubmit={handleSubmit(handleLoginForm)}>
          <div className="grid grid-cols-1 gap-5">
            <input
              {...register("username", { required: "Email is required" })}
              className="px-4 py-2 border border-gray-300 focus:outline-none rounded-lg"
              placeholder="Enter Your Email/ User Name"
              type="text"
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
              {isLoading ? "Processing" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
