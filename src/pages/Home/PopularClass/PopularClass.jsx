import React from "react";
import PopularClassCard from "./PopularClassCard";
import useCourse from "../../../hooks/useCourse";

const PopularClass = () => {
  const [courses] = useCourse();

  const sortedCourses = courses.sort(
    (a, b) => b.available_seat - a.available_seat
  );

  const limitedCourses = sortedCourses.slice(0, 6);

  return (
    <div className="mt-12">
      <h2 className="text-xl font-bold text-center">Most Popular Classes</h2>
      <div className="grid grid-cols-3 my-11 gap-y-8">
        {limitedCourses.map((course) => (
          <PopularClassCard key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default PopularClass;
