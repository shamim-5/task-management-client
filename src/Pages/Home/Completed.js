import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Tasks from "./Tasks";
import UseRow from "./UseRow";

const Completed = () => {
  const [completed, setCompleted] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://upper-pylon-87364.herokuapp.com/task/${user?.email}`)
        .then((res) => res.json())
        .then((data) => setCompleted(data));
    }
  }, [user]);
  return (
    <div className="pt-12 mt-16 container">
      <h1 className="text-4xl font-bold text-primary text-center uppercase pb-4">
        <span>Completed tasks</span>
      </h1>
      <div className="overflow-x-auto ">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Task</th>
              <th>Date {"&"} Time</th>
              <th>Details</th>
            </tr>
          </thead>
          {completed.map((userTask) => (
            <UseRow key={userTask._id} userTask={userTask}></UseRow>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Completed;
