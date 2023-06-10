import React from "react";
import Banner from "../Banner/Banner";
import { Helmet } from "react-helmet-async";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Language Fluent | Home</title>
      </Helmet>
      <Banner></Banner>
      <Slider></Slider>
    </div>
  );
};

export default Home;
