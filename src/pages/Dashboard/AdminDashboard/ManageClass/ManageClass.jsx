import React from "react";
import useAuth from "../../../../hooks/useAuth";
import useManageCourse from "../../../../hooks/useManageCourse";

import Swal from "sweetalert2";

const ManageClass = () => {
  const { user } = useAuth();
  const [reviewCourse, refetch] = useManageCourse();

  const handleDelete = (course) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this course!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://a12-languagefluent-server.vercel.app/reviewcourse/${course._id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your course has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-5/6 mx-auto">
        <h2 className="text2xl font-bold text-center my-12"> Manage Class</h2>
        <div className="overflow-x-auto">
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
                <th>feedback</th>
              </tr>
            </thead>
            <tbody>
              {reviewCourse.map((course, index) => (
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
                    <button className="btn btn-primary btn-outline btn-xs">
                      Approve
                    </button>
                    <button
                      onClick={() => handleDelete(course)}
                      className="btn btn-error btn-outline btn-xs"
                    >
                      Denay
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-info btn-outline btn-xs">
                      FeedBack
                    </button>
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

export default ManageClass;
