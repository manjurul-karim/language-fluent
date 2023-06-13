import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import InstructorCard from "./InstructorCard";

const Instructor = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/instructors")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  return (
    <div>
      <Helmet>
        <title>Language Fluent | Instructor</title>
      </Helmet>
      <div className="grid md:grid-cols-3 gap-8  my-6 ">
        {instructors.map((instructor) => (
          <InstructorCard
            key={instructor._id}
            instructor={instructor}
          ></InstructorCard>
        ))}
      </div>
    </div>
  );
};

export default Instructor;
