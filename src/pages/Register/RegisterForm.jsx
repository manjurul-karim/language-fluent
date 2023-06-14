import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
const eye = <FaEye></FaEye>;
const eyeslash = <FaEyeSlash></FaEyeSlash>;

const RegisterForm = () => {
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
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const savedUser = {
            name: data.name,
            email: data.email,
            role: "student",
          };
          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(savedUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "User created successfully.",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            });
        })
        .catch((error) => console.log(error));
    });
  };

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body py-2">
        <div className="flex gap-2">
          <div className="form-control ">
            <label className="label">
              <span className=" text-white">Name*</span>
            </label>
            <input
              type="text"
              name="name"
              {...register("name", { required: true })}
              placeholder="Name"
              className="input input-bordered text-black"
            />
            {errors.name && (
              <span className="text-red-600 bg-black mt-4 text-center opacity-90">
                Name is required
              </span>
            )}
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="">Email*</span>
            </label>
            <input
              type="email"
              name="email"
              {...register("email", { required: true })}
              placeholder="Email"
              className="input input-bordered text-black"
            />
            {errors.email && (
              <span className="text-red-600 bg-black mt-4 text-center opacity-90">
                Email is required
              </span>
            )}
          </div>
        </div>

        <div className="flex gap-2">
          <div className="form-control">
            <label className="label">
              <span className="">Password*</span>
            </label>
            <div className="flex items-center relative ">
              <input
                type={passwordShown ? "text" : "password"}
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                placeholder="password "
                className="input input-bordered text-black"
              />
              <i
                className="text-black right-4 absolute"
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
                Password must have one Uppercase one lower case, one number and
                one special character.
              </p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="">Confirm Password*</span>
            </label>
            <div className="flex items-center relative ">
              <input
                type={passwordShown ? "text" : "password"}
                {...register("passwordConfirmation", {
                  required: "Please confirm password!",
                  validate: {
                    matchesPreviousPassword: (value) => {
                      const { password } = getValues();
                      return password === value || "Passwords should match!";
                    },
                  },
                })}
                placeholder="Re-type password"
                className="input input-bordered text-black"
              />
              <i
                className="text-black right-4 absolute"
                onClick={togglePasswordVisiblity}
              >
                {passwordShown ? eye : eyeslash}
              </i>
            </div>
            {errors.passwordConfirmation && (
              <p className="text-red-500 bg-black mt-4 text-center opacity-90">
                {errors.passwordConfirmation.message}
              </p>
            )}
          </div>
        </div>
        <div className="flex gap-2">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="">Your Gender</span>
            </label>
            <select
              {...register("gender")}
              className="select select-bordered text-black"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Other</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="">Photo URL*</span>
            </label>
            <input
              type="text"
              {...register("photoURL", { required: true })}
              placeholder="PhotoURL"
              className="input input-bordered text-black"
            />
            {errors.photoURL && (
              <span className="text-red-600 bg-black mt-4 text-center opacity-90">
                PhotoURL is required
              </span>
            )}
          </div>
        </div>
        <div className="flex gap-2">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="">Phone Number</span>
            </label>
            <input
              type="text"
              {...register("phone")}
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs text-black"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="">Address</span>
            </label>
            <input
              type="text"
              {...register("address")}
              placeholder="Address"
              className="input input-bordered w-full max-w-xs text-black"
            />
          </div>
        </div>
        <div></div>

        <div className="form-control mt-4">
          {/* <button className="btn btn-primary">Login</button> */}
          <input
            className=" btn btn-outline  btn-info border-0 border-blue-300 border-y-2  capitalize"
            type="submit"
            value="sign Up"
          />
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
