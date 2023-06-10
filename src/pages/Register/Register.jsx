import React from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Helmet>
        <title>Language Fluent | Register</title>
      </Helmet>
      <div className="dark hero min-h-screen bg-base-200  pt-20 font-[cinzel]">
        <div className="hero-content w-full flex-col md:flex-row ">
          <div className="text-center md:w-1/2 lg:text-left">
            <img src="" alt="" />
          </div>
          <div className="card md:w-1/2 max-w-sm  w-full  shadow-2xl bg-base-100 dark ">
            <div className="text-center mt-8 ">
              <h2 className="font-semibold text-4xl mb-2">Create An Account</h2>
              <p className="font-md text-md">
                Sign Up Now And Unlock Exclusive Access!
              </p>
            </div>
            <div className="mt-8 flex justify-center">
              <button className="flex btn btn-outline btn-info">
                <FaGoogle></FaGoogle> Google Sign Up
              </button>
            </div>

            <div className="divider w-3/4 mx-auto">OR</div>
            <p className="text-center"> SignUP with Email</p>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body py-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  {...register("name", { required: true })}
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="PhotoURL"
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-red-600">PhotoURL is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have one Uppercase one lower case, one number
                    and one special character.
                  </p>
                )}
              </div>

              <div className="form-control mt-6">
                {/* <button className="btn btn-primary">Login</button> */}
                <input
                  className=" btn btn-outline btn-info border-0 border-blue-300 border-y-2 capitalize"
                  type="submit"
                  value="sign Up"
                />
                {/* <button className="bg-[#D1A054] btn capitalize" type="submit">
                  Register
                </button> */}
              </div>
            </form>
            <div className="m-4">
              <h2 className="text-lg font-semibold">
                Already A Member?{" "}
                <span className="text-md font-bold text-blue-500">
                  <Link to="/login">Login</Link>{" "}
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
