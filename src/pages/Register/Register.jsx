import React from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import registeranim from "../../assets/register/112454-form-registration.json";
import RegisterForm from "./RegisterForm";
import registerbg from "../../assets/register/registerbg.jpg";
import gh from "../../assets/banner/banner.png";
import "./Register.css";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const Register = () => {
  //   const {
  //     register,
  //     reset,
  //     handleSubmit,
  //     formState: { errors },
  //   } = useForm();

  //   const onSubmit = (data) => {
  //     console.log(data);
  //   };

  return (
    <>
      <Helmet>
        <title>Language Fluent | Register</title>
      </Helmet>
      <div className="bgpicture ">
        <div className="dark hero min-h-screen font-[cinzel] ">
          <div className="hero-content flex-col md:flex-row ">
            {/* <div className="w-full md:w-2/5  lg:text-left">
            <Lottie animationData={registeranim} loop={true} />
          </div> */}
            <div className="card  w-full  shadow-2xl border-2 bg-base-100 bg-opacity-5 text-white">
              <div className="text-center ">
                <h2 className="font-semibold text-4xl mb-2">
                  Create An Account
                </h2>
                <p className="font-md text-md">
                  Sign Up Now And Unlock Exclusive Access!
                </p>
              </div>
              <RegisterForm></RegisterForm>
              <div className="divider w-3/4 mx-auto">OR</div>
              <SocialLogin></SocialLogin>
              <div className="my-4 text-center">
                <h2 className="text-md font-md hover:bg-black hover:w-44 hover:mx-auto hover:rounded-md">
                  Already A Member?{" "}
                  <span className="text-lg font-bold text-blue-700">
                    <Link to="/login">Login</Link>{" "}
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
