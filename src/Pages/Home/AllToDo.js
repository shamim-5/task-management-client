import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ToDoModal from "./ToDoModal";

const AllToDo = ({ userTask }) => {
  const { _id, task, date, time, details } = userTask;

  const navigate = useNavigate();
  const completedTask = (id) => {
    navigate("/completed");
    console.log(id);
  };
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
          <div class="card-actions justify-end items-center">
            <input onClick={() => completedTask(_id)} type="radio" name="radio-4" class="radio radio-accent mr-auto" />
            <p className="font-bold uppercase text-secondary">Completed Task</p>
            <label for="my-modal-3" class="btn btn-secondary mt-2 ">
              Edit
            </label>
          </div>
        </div>
      </div>
      <ToDoModal userTask={userTask}></ToDoModal>
    </div>
  );
};

export default AllToDo;
