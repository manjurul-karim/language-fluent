import React from "react";
import Banner from "../Banner/Banner";
import { Helmet } from "react-helmet-async";
import Slider from "../Slider/Slider";
import useDarkMode from "../../../hooks/useDarkMode";

const Home = () => {
    const [isDarkMode, setIsDarkMode] = useDarkMode();
  return (
    <div className="">
      <Helmet>
        <title>Language Fluent | Home</title>
      </Helmet>
      <Banner></Banner>
      <Slider></Slider>
    </div>
  );
};

export default Home;
