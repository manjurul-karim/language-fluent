import React from "react";
import useMyAddedCourse from "../../../../hooks/usemyAddedCourse";
import { Link } from "react-router-dom";

const MyClass = () => {
  const [myAddedCourse, refetch] = useMyAddedCourse();
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-3/4 mx-auto">
        <h2 className="text2xl font-bold text-center my-12">
          {" "}
          My class 
        </h2>

        <div className="overflow-x-auto ">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Picture</th>
                <th> Class Name</th>
                <th> Instructor Name</th>
                <th> Instructor Email</th>
                <th>Fee</th>
                <th>Seat</th>
                <th>status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {myAddedCourse.map((course, index) => (
                <tr key={course._id}>
                  <th>
                    <label>{index + 1}</label>
                  </th>

                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={course.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>{course.name}</td>
                  <td>{course.instructor_name}</td>
                  <td>{course.email}</td>
                  <td>{course.price}</td>
                  <td>{course.available_seat}</td>
                  <td>{course.status}</td>
                  <td>
                    <Link to={`/dashboard/updateclass/${course._id}`}>
                      <button className="btn btn-outline btn-xs btn-info">
                        Edit
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyClass;
