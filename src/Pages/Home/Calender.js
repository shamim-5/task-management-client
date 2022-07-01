import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Calender = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="container py-12 my-12 text-slate-700">
      <h1 className="text-4xl font-bold text-primary text-center uppercase pb-4">
        <span>Completed tasks</span>
      </h1>
      <div className="flex items-center justify-center pt-6">
         <Calendar onChange={onChange} value={value} />
      </div>
    </div>
  );
};

export default Calender;
