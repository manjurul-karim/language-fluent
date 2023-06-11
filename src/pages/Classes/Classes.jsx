import React from "react";
import { Helmet } from "react-helmet-async";
import useCourse from "../../hooks/useCourse";
import ClassesCard from "./ClassesCard";

const Classes = () => {
  const [courses] = useCourse();
  console.log(courses);
  return (
    <div>
      <Helmet>
        <title>Language Fluent | Classes</title>
      </Helmet>
      <div className="grid grid-cols-3 my-11 gap-y-8">
        {courses.map((course) => (
          <ClassesCard key={course._id} course={course}></ClassesCard>
        ))}
      </div>
    </div>
  );
};

export default Classes;
