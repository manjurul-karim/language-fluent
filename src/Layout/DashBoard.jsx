import React from "react";
import NavBar from "../pages/Shared/NavBar/NavBar";
import { Link, NavLink, Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const DashBoard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* <NavBar></NavBar> */}
        <div className="min-h-[calc(100vh-136px)] max-w-screen-xl mx-auto ">
          <Outlet></Outlet>
        </div>
        {/* <Footer></Footer> */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu bg-[#173857] p-4 w-80 h-full  text-white">
          {/* Sidebar content here */}

          <h2 className="text-4xl font-semibold">Language Fluent</h2>

          <div className="flex justify-center mt-5">
            <div className="tooltip  tooltip-right" data-tip={user.displayName}>
              <span>
                <img
                  className="h-10 w-10 rounded-full"
                  src={user.photoURL}
                  alt=""
                />
              </span>
            </div>
          </div>

          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <NavLink to='/dashboard/selectedcourse'>Select Course</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
