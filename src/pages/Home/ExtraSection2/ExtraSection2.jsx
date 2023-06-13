import React from "react";
import first from "../../..//assets/section/first.png";
import second from "../../..//assets/section/second.png";
import third from "../../..//assets/section/third.png";
import fourth from "../../..//assets/section/fourth.png";

const ExtraSection2 = () => {
  return (
    <div className="my-36">
      <h2 className="my-24 text-xl font-bold text-center">
        Train your long term memory with a method that’s <br /> faster and
        better than traditional rote learning.
      </h2>
      <div className="grid md: grid-cols-4 gap-4 my-12">
        <div className="card  group/item hover:shadow-2xl  transition ease-in-out delay-150 hover:scale-110 duration-300 ">
          <figure className="pt-10">
            <img src={first} alt="" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              Proven memory techniques rooted in science
            </h2>
            <p className="group/edit invisible  group-hover/item:visible ">
              Learn more, faster, with a learning algorithm developed with the
              best cognitive science.
            </p>
          </div>
        </div>
        <div className="card  group/item hover:shadow-2xl  transition ease-in-out delay-150 hover:scale-110 duration-300 ">
          <figure className="pt-10">
            <img src={second} alt="" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              Twice as fast as learning in a regular classroom setting
            </h2>
            <p className="group/edit invisible  group-hover/item:visible ">
              Train your long term memory with a method that’s faster and better
              than traditional rote learning.
            </p>
          </div>
        </div>
        <div className="card  group/item hover:shadow-2xl  transition ease-in-out delay-150 hover:scale-110 duration-300 ">
          <figure className="pt-10">
            <img src={third} alt="" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              Immersive learning. Learn like you live there.
            </h2>
            <p className="group/edit invisible  group-hover/item:visible ">
              Cover everything from holiday essentials to longer-term goals
            </p>
          </div>
        </div>
        <div className="card   group/item hover:shadow-2xl  transition ease-in-out delay-150 hover:scale-110 duration-300 ">
          <figure className="pt-10">
            <img src={fourth} alt="" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              Cover everything from holiday essentials to longer-term goals
            </h2>
            <p className="group/edit invisible  group-hover/item:visible ">
              Find the content topics to match what you need: from holiday small
              talk to meeting your partner’s family.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection2;
