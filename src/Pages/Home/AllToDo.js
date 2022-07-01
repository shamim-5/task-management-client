import React from "react";
import { useNavigate } from "react-router-dom";
import ToDoModal from "./ToDoModal";
import { toast } from "react-toastify";

const AllToDo = ({ userTask }) => {
  const { _id, task, date, time, details, email } = userTask;
  const navigate = useNavigate();

  const completedTask = (id) => {
    const completedTask = {
      task: task,
      email: email,
      date: date,
      time: time,
      details: details,
    };
    fetch(`http://localhost:5000/completedTask/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(completedTask),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Task Added to Completed Task");
      });
    navigate("/completed");
  };
  return (
    <div>
      <div className="card w-92 bg-neutral shadow-xl text-slate-700">
        <div className="card-body">
          <h2 className="card-title">Task: {task}</h2>
          <p>
            Date: {date}
            {""} Time: {time}
          </p>
          <small className="h-16 overflow-scroll">Details: {details}</small>
          <div className="card-actions justify-end items-center">
            <input
              onClick={() => completedTask(_id)}
              type="radio"
              name="radio-4"
              className="radio radio-accent mr-auto"
            />
            <p className="font-bold uppercase text-secondary">Completed Task</p>
            <label htmlFor="my-modal-3" className="btn btn-secondary mt-2 ">
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
