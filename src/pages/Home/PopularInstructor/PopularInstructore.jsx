import React, { useEffect, useState } from "react";
import PopularInstructorCard from "./PopularInstructorCard";

const PopularInstructore = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/instructors")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);

  const sortedInstructors = instructors.sort(
    (a, b) => b.taken_classes - a.taken_classes
  );

  const limitedInstructors = sortedInstructors.slice(0, 6);

  return (
    <div className="mt-12">
      <h2 className="text-xl font-bold text-center">Popular Instructor</h2>
      <div className="grid md:grid-cols-3 gap-8 my-6">
        {limitedInstructors.map((instructor) => (
          <PopularInstructorCard
            key={instructor._id}
            instructor={instructor}
          ></PopularInstructorCard>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructore;
