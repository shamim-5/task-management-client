import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const Tasks = () => {
  const { register, handleSubmit } = useForm();
  const [user] = useAuthState(auth);

  const onSubmit = (data) => {
    const task = {
      task: data.task,
      email: user.email,
      date: data.date,
      time: data.time,
      details: data.details,
    };
    fetch(`https://upper-pylon-87364.herokuapp.com/task`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Task Added Successfully");
      });
  };

  const keyboardEvents = (event) => {
    event.persist();
  };

  return (
    <div className="mt-12 pt-16 text-slate-700">
      <div>
        <h1 className="text-4xl font-bold text-primary text-center uppercase">
          <span className="block">Make your time valueable</span>
        </h1>
      </div>
      <div className="pt-6 my-2" onKeyPress={keyboardEvents}>
        <h2 className="text-3xl text-secondary pb-2 text-center font-bold">Add task</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center">
          <input
            className="py-1 border m-1 rounded px-2 w-96 "
            type="text"
            placeholder="Task Name"
            {...register("task", { required: true })}
          />

          <input className="py-1 border m-1 rounded px-2 w-96 " type="date" {...register("date", { required: true })} />
          <input className="py-1 border m-1 rounded px-2 w-96 " type="time" placeholder="Time" {...register("time")} />
          <textarea
            className="py-1 border m-1 rounded px-2 w-96 h-32"
            type="text"
            placeholder="Task Details(Optional)"
            {...register("details")}
          />
          <input
            className="py-1 border font-bold text-primary bg-slate-700 m-1 rounded px-2 w-96 "
            type="submit"
            value="Add"
          />
        </form>
      </div>
    </div>
  );
};

export default Tasks;
