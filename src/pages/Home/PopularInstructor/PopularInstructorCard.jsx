import React from "react";

const PopularInstructorCard = ({ instructor }) => {
  const { image, name, email } = instructor;
  return (
    <div className="card w-96 border-2  transition duration-200 transform hover:-translate-y-2 ">
      {" "}
      <img className="h-52 p-3" src={image} alt="" />
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Email:{email}</p>
      </div>
    </div>
  );
};

export default PopularInstructorCard;
