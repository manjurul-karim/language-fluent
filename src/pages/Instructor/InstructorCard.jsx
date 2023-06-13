import React from "react";

const InstructorCard = ({ instructor }) => {
  const { image, name, email } = instructor;
  return (
    <div className="card w-96 border-2 border-[#173857] bg-base-100 shadow-xl">
      {" "}
      <img className="h-52 p-3" src={image} alt="" />
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Email:{email}</p>
      </div>
    </div>
  );
};

export default InstructorCard;
