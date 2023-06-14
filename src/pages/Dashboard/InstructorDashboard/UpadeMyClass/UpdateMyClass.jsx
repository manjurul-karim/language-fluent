import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";
// import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useLoaderData } from "react-router-dom";

const UpdateMyClass = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { name, price, instructorName, image, seat, email } = data;
    const updateClass = {
      name,
      price,
      instructor_name: instructorName,
      image,
      available_seat: seat,
      email,
    };
  };

  return (
    <div>
      <div className="flex flex-col h-screen items-center justify-center">
        <h2 className="text-green-600 text-2xl font-bold text-center mb-12">
          {" "}
          Update Class
        </h2>
        <div className="w-3/4 mx-auto shadow-2xl border-2 rounded p-16">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-2 ">
              <div className="form-control  w-full ">
                <label className="label">
                  <span className="label-text">Class Name*</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Class Name"
                  className="input input-bordered "
                />
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Fee*</span>
                </label>
                <input
                  {...register("price", { required: true })}
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered  "
                />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="form-control w-full  ">
                <label className="label">
                  <span className="label-text">Display Name</span>
                </label>
                <input
                  {...register("instructorName", { required: true })}
                  type="text"
                  value={user.displayName}
                  readOnly
                  placeholder=""
                  className="input input-bordered "
                />
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="text"
                  value={user.email}
                  readOnly
                  placeholder=""
                  className="input input-bordered  "
                />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="form-control w-full">
                <label className="label">
                  <span className="">Photo URL*</span>
                </label>
                <input
                  type="text"
                  {...register("image", { required: true })}
                  placeholder="PhotoURL"
                  className="input input-bordered text-black"
                />
                {errors.photoURL && (
                  <span className="text-red-600 bg-black mt-4 text-center opacity-90">
                    PhotoURL is required
                  </span>
                )}
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Available Seat*</span>
                </label>
                <input
                  {...register("seat", { required: true })}
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered "
                />
              </div>
            </div>

            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <div className="flex justify-center">
              <button className="btn btn-outline btn-info btn-md mt-4 w-[250px]  block">
                {" "}
                <input type="submit" value="Add Class" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateMyClass;
