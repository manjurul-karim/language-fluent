/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Helmet } from "react-helmet-async";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Helmet>
        <title>Language Fluent | Login</title>
      </Helmet>

      <div className="hero min-h-screen bg-base-200  ">
        <div className="hero-content flex-col lg:flex-row ">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card md:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
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
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
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
            <div className="mt-2 flex justify-center">
              <button className="flex btn btn-outline btn-info">
                <FaGoogle></FaGoogle> Google Sign In
              </button>
            </div>

            
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
