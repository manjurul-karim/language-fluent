import React from "react";
import useSelectCourse from "../../../../hooks/useSelectCourse";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const SelectedCourse = () => {
  const [selectCourse, refetch] = useSelectCourse();
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
        fetch(`http://localhost:5000/selectcourse/${course._id}`, {
          method: "DELETE",
        })
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
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Fee</th>
              <th>Seat</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {selectCourse.map((course, index) => (
              <tr key={course._id}>
                <th>
                  <label>{index + 1}</label>
                </th>

                <td>{course.name}</td>
                <td>{course.price}</td>
                <td>{course.available_seat}</td>
                <td>
                  <Link to="/dashboard/payment">
                    {" "}
                    <button className="btn btn-info btn-outline btn-xs">
                      pay
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(course)}
                    className="btn btn-error btn-outline btn-xs"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedCourse;
