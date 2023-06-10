import React from "react";
// import banner from '../../../assets/banner/main.svg'

const Banner = () => {
  return (
    <div className="">
      <div className="hero min-h-screen bg-[url('assets/banner/banner.png')]">
        <div className="hero-overlay"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-md font-[cinzel]">
            <h1 className="mb-5 text-5xl font-bold">Learn a Language</h1>
            <p className="mb-5">
              Learn a language right here with hundreds of free
              language-learning lessons,games and activities.Join us and have
              some fun.
            </p>
            <button className="btn btn-primary">Start Learning Now!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
