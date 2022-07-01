import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ToDoModal = ({ userTask }) => {
  const { _id, task, date, time, details } = userTask;
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const task = {
      task: data.task,
      details: data.details,
    };

    fetch(`https://upper-pylon-87364.herokuapp.com/task/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Task Updated");
      });
  };

  const keyboardEvents = (event) => {
    event.persist();
  };

  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2 bg-[#112829]">
            ✕
          </label>
          <div>
            <div className="pt-2" onKeyPress={keyboardEvents}>
              <h2 className="text-3xl text-secondary pb-2 text-center font-bold">Add task</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center">
                <input
                  className="py-1 border m-1 rounded px-2 w-96 "
                  type="text"
                  placeholder={task}
                  {...register("task", { required: true })}
                />
                <input
                  className="py-1 border m-1 rounded px-2 w-96 "
                  type="date"
                  value={date}
                  readOnly
                  {...register("date")}
                />
                <input
                  className="py-1 border m-1 rounded px-2 w-96 "
                  type="time"
                  value={time}
                  readOnly
                  {...register("time")}
                />
                <textarea
                  className="py-1 border m-1 rounded px-2 w-96 h-32"
                  type="text"
                  placeholder={details}
                  {...register("details", { required: true })}
                />
                <input
                  className="py-1 border font-bold text-primary bg-slate-700 m-1 rounded px-2 w-96 "
                  type="submit"
                  value="Update"
                />{" "}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoModal;
