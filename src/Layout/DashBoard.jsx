import React from "react";
import NavBar from "../pages/Shared/NavBar/NavBar";
import { Link, Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";

const DashBoard = () => {
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
          <div>
            <h2 className="text-4xl font-semibold">Language Fluent</h2>
          </div>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
