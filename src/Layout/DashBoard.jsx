import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import useAuth from "../hooks/useAuth";


const DashBoard = () => {
  const { user } = useAuth();

  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>

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

          {isAdmin && (
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/dashboard/alluser">All User</Link>
              </li>
            </ul>
          )}
          {isInstructor && (
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <NavLink to="/dashboard/payment">Add a Class</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment">My Class Class</NavLink>
              </li>
            </ul>
          )}

          {!isAdmin && !isInstructor && (
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <NavLink to="/dashboard/selectedcourse">
                  My Select Course
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/selectedcourse">
                  My Enroll Course
                </NavLink>
              </li>
            </ul>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
