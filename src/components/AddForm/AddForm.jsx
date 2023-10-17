import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../redux/slice/task-slice";
export const AddForm = () => {
  const [value, setValue] = useState("");
  const tasks = useSelector((state) => state.tasks.data);
  const dispatch = useDispatch();
  const handleChangeInput = (e) => {
    setValue(e.target.value);
  };
  return (
    <div
      style={{ color: "#fff" }}
      className=" container p-4 rounded mt-2  bg-primary  "
    >
      <h1 className="my-4">To-Do App!</h1>
      <label htmlFor="newTask " className="m-1">
        Add New Task
      </label>
      <br />

      <input
        id="newTask"
        type="text"
        onChange={handleChangeInput}
        className="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
      />

      <br />
      <button
        onClick={() =>
          dispatch(
            addTask({
              id: tasks.length + 1,
              text: value,
              status: "Not Started",
              done: false,
            })
          )
        }
        type="button"
        className="btn btn-success"
      >
        Add
      </button>
    </div>
  );
};
