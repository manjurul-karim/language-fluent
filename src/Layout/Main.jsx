import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar/NavBar";
import Footer from "../pages/Shared/Footer/Footer";


const Main = () => {
  
  return (
    <div>
      <NavBar></NavBar>
      <div className="min-h-[calc(100vh-136px)] max-w-screen-xl mx-auto ">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
