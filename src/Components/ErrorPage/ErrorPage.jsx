import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import error404 from "../../assets/error/error404.gif";

const ErrorPage = () => {
  return (
    <div className="container flex flex-col items-center justify-center">
      <div className=" ">
        <img className="rounded-lg " src={error404} alt="" loading="lazy" />
        <div className="flex justify-center mt-5">
          <button className="btn btn-outline btn-info capitalize border-0  border-y-2">
            {" "}
            <Link
              className="inline-flex items-center gap-5 justify-center"
              to="/"
            >
              <span>
                <FaArrowLeft></FaArrowLeft>
              </span>{" "}
              to home
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
