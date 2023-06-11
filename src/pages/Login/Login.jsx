/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../assets/login/38435-register.json";
import Lottie from "lottie-react";
import { useForm } from "react-hook-form";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
const eye = <FaEye></FaEye>;
const eyeslash = <FaEyeSlash></FaEyeSlash>;

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const {
    register,
    reset,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const { signIn } = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: "User Login Successful.",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        navigate(from, { replace: true });
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  return (
    <div>
      <Helmet>
        <title>Language Fluent | Login</title>
      </Helmet>

      <div className="hero min-h-screen bg-slate-300  ">
        <div className="hero-content flex-col lg:flex-row  shadow-2xl rounded-md  ">
          <div className="text-center md:w-1/2 lg:text-left">
            <Lottie animationData={login} loop={true} />
          </div>
          <div className="card md:w-1/2 w-full max-w-sm shadow-2xl border-4 ">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", {
                    required: true,
                  })}
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="flex items-center relative">
                  <input
                    type={passwordShown ? "text" : "password"}
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    placeholder="password "
                    className="input input-bordered w-full  text-black"
                  />
                  <i
                    className="text-black absolute right-4 "
                    onClick={togglePasswordVisiblity}
                  >
                    {passwordShown ? eye : eyeslash}
                  </i>
                </div>
                {errors.password?.type === "required" && (
                  <p className="text-red-600 bg-black mt-4 text-center opacity-90">
                    Password is required
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600 bg-black mt-4 text-center opacity-90">
                    Password must be 6 characters
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600 bg-black mt-4 text-center opacity-90">
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600 bg-black mt-4 text-center opacity-90">
                    Password must have one Uppercase one lower case, one number
                    and one special character.
                  </p>
                )}
              </div>

              <div className="form-control  mt-6">
                {/* <button className="btn btn-primary">Login</button> */}
                <button
                  className="btn btn-outline   btn-info border-0 border-blue-300 border-y-2 capitalize"
                  type="submit"
                >
                  Sign in
                </button>
              </div>
            </form>
            <div className="divider w-3/4 mx-auto">OR</div>
            <SocialLogin></SocialLogin>
            <div className="my-4 ml-12">
              <h2 className="text-sm font-semibold">
                Don't have an account?{" "}
                <span className="text-sm font-bold text-blue-500">
                  <Link to="/register">Create an account</Link>{" "}
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
