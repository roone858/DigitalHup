import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../../redux/slice/task-slice";

export const Task = ({ task }) => {
 
  const [editFlag, setEditFlag] = useState("false");
  const [value, setValue] = useState(task);
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    setValue( e.target.value );
  };
  const handleOptionsChange = (e) => {
    dispatch(
      updateTask({ id: task.id, data: { ...task, status: e.target.value } })
    );
 
  };



  return (
    <div className="task d-flex  align-items-center justify-content-between w-60 my-1">
      <div className="div">
    
        <span
          style={{
            fontSize: "1.7rem",
            textDecoration: `${task.done ? "line-through" : "none"}`,
          }}
        >
          {!editFlag ? <input onChange={handleInputChange} /> : task.text}
        </span>
      </div>
      <span>
        <select
          defaultValue={task.status}
          onChange={handleOptionsChange}
          className="rounded bg-success p-2 text-white"
        >
          <option value="Not Started ">Not Started</option>

          <option value="In Progress">In Progress</option>

          <option value="Finished">Finished</option>
        </select>
      </span>
      <div>
        <button
          onClick={() => {
            setEditFlag(!editFlag);
            dispatch( updateTask({ id: task.id, data: { ...task, text: value } }));
          }}
          type="button"
          className="btn btn-success mx-2 "
        >
          Edit
        </button>
        <button
          onClick={() => dispatch(deleteTask(task.id))}
          type="button"
          className="btn btn-danger mx-2 "
        >
          Delete
        </button>
      </div>
    </div>
  );
};
