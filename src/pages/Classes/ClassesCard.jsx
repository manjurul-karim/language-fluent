import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const ClassesCard = ({ course }) => {
  const { image, instructor_name, available_seat, price, name, _id } = course;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleAddCourse = (course) => {
    if (user && user.email) {
      const selectCourse = {
        courseId: _id,
        name,
        price,
        email: user.email,
        userName: user.displayName,
      };
      fetch("http://localhost:5000/selectcourse", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(selectCourse),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Added Course Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Login First!",

        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate(from, { replace: true });
          navigate("/login");
        }
      });
    }
  };
  return (
    <div className="card border-2 w-96 h-64 bg-base-100 image-full  overflow-hidden relative transition duration-200 transform hover:-translate-y-2 ">
      <figure>
        <img className="rounded-2xl" src={image} alt="" />
      </figure>
      <div className="card-body  bg-opacity-75 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 transition-opacity duration-200 ">
        <h2 className="card-title">{name}</h2>
        <p>{instructor_name}</p>
        <p>Available Seat:{available_seat}</p>
        <p>Course Fee:{price}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleAddCourse(course)}
            className="btn btn-primary"
          >
            Add Course
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;
