import React from 'react';

const UseRow = ({ userTask }) => {
    const { task, date, time, details } = userTask;
   return (
     <tbody>
         <tr>
            <th></th>
            <th>{task}</th>
            <td>{date} {time}</td>
            <td>{details}</td>
       </tr>
     </tbody>
   );
};

export default UseRow;