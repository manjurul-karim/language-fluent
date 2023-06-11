import React from "react";
import useSelectCourse from "../../../../hooks/useSelectCourse";

const SelectedCourse = () => {
  const [selectCoure] = useSelectCourse();
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
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {selectCoure.map((course , index) => (
              <tr key={course._id}>
                <th>
                  <label>
                   { index +1}
                  </label>
                </th>

                <td>{course.name}</td>
                <td>{course.price}</td>
                <td>
                  <button className="btn btn-ghost btn-xs">pay</button>
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
