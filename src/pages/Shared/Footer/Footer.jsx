import React, { useEffect, useState } from "react";
import logo from "../../../assets/logo/logo.png";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    const year = new Date().getFullYear();
    setCurrentYear(year.toString());
  }, []);
  return (
    <>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <img className="w-16" src={logo} alt="" />
          <p>
            Language Fluent.
            <br />
            Providing reliable
            <br />
            course since 2020
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Bangla</a>
          <a className="link link-hover">English</a>
          <a className="link link-hover">Spanish</a>
          <a className="link link-hover">Arabic</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>
            Copyright &copy; {currentYear} Language Fluent
            <sup className="text-[8px]">TM</sup>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
