import React from "react";
import Banner from "../Banner/Banner";
import { Helmet } from "react-helmet-async";
import Slider from "../Slider/Slider";
import useDarkMode from "../../../hooks/useDarkMode";
import ExtraSection from "../ExtraSection/ExtraSection";
import ExtraSection2 from "../ExtraSection2/ExtraSection2";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useDarkMode();
  return (
    <div className="">
      <Helmet>
        <title>Language Fluent | Home</title>
      </Helmet>
      <Banner></Banner>
      <Slider></Slider>
      <ExtraSection></ExtraSection>
      <ExtraSection2></ExtraSection2>
    </div>
  );
};

export default Home;
