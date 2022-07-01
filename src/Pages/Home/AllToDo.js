import React from "react";
import { useNavigate } from "react-router-dom";
import ToDoModal from "./ToDoModal";
import { toast } from "react-toastify";

const AllToDo = ({ userTask }) => {
  const { _id, task, date, time, details, email} = userTask;
  const navigate = useNavigate();

  const completedTask = (id) => {
    const completedTask = {
      task: task,
      email: email,
      date: date,
      time: time,
      details: details,
    };
    fetch(`http://localhost:5000/completedTask`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(completedTask),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Task Added to Completed Task");
        console.log(data);
      });
    navigate("/completed");
  };
  return (
    <div>
      <div class="card w-92 bg-neutral shadow-xl text-slate-700">
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
