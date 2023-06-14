import React from "react";

const PopularClassCard = ({ course }) => {
  const { name, image } = course;
  return (
    <div>
      <div className="card w-96 border-2 transition duration-200 transform hover:-translate-y-2 ">
        <img className="h-52 p-3" src={image} alt="" />
        <div className="card-body">
          <h2 className=" text-center text-lg  font-semibold ">{name}</h2>
        </div>
      </div>
    </div>
  );
};

export default PopularClassCard;
