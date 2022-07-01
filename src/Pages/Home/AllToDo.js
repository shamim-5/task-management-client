import React from "react";

const AllToDo = ({ userTask }) => {
  const { _id, task, date, time, details } = userTask;
  return (
    <div>
      <div class="card w-92 bg-[#d3d8ea] shadow-xl">
        <div class="card-body">
          <h2 class="card-title">Task: {task}</h2>
          <p>
            Date: {date}
            {""} Time: {time}
          </p>
          <small className="h-16 overflow-scroll">Details: {details}</small>
          <div class="card-actions justify-end">
            <button class="btn btn-secondary mt-2 ">Complete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllToDo;
