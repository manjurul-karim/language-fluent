import React from "react";
import speak from "../../..//assets/section/mike.png";
import read from "../../..//assets/section/book.png";
import understand from "../../..//assets/section/understand.png";
import write from "../../..//assets/section/writing.png";

const ExtraSection = () => {
  return (
    <div>
      <div className="my-12 ">
        <h2 className="text-center my-8 text-xl font-bold">
          What do you learn?
        </h2>
        <div className="grid md: grid-cols-4 gap-8  ">
          <div className="card border-2  hover:-translate-y-2 ">
            <figure className=" p-4 ">
              <img src={speak} className="rounded-xl  h-16 w-16" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Speak</h2>
              <p className=" ">
                Speak with native speakers on any topic you want (not just about
                the weather). Make friends in different parts of the Earth!
              </p>
            </div>
          </div>
          <div className="card border-2 hover:-translate-y-2  ">
            <figure className="p-4">
              <img src={read} className="rounded-xl h-16 w-16" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Read</h2>
              <p>
                Read literature in the original language. Grow your vocabulary,
                master the language’s grammar, and broaden your horizons!
              </p>
            </div>
          </div>
          <div className="card border-2  hover:-translate-y-2 ">
            <figure className="p-4">
              <img src={understand} className="rounded-xl  h-16 w-16" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Understand</h2>
              <p>
                Understand new things about the foreign country, its culture and
                traditions. Feel yourself like a piece of something global!
              </p>
            </div>
          </div>
          <div className="card border-2  hover:-translate-y-2">
            <figure className="p-4">
              <img src={write} className="rounded-xl h-16 w-16" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Write</h2>
              <p className=" ">
                Write to your foreign friends or conduct business correspondence
                with people from other countries and even continents!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
