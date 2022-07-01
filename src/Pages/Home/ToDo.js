import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import AllToDo from "./AllToDo";

const ToDo = () => {
  const [toDo, setToDo] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/task/${user?.email}`)
        .then((res) => res.json())
        .then((data) => setToDo(data));
    }
  }, [user]);

  return (
    <div className="container">
      <h1 className="text-4xl py-6 font-bold text-primary text-center uppercase">
        <span>To do Lists</span>
      </h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-2">
        {toDo.map((userTask) => (
          <AllToDo key={userTask._id} userTask={userTask}></AllToDo>
        ))}
      </div>
    </div>
  );
};

export default ToDo;
