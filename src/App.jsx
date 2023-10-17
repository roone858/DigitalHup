import { useState } from "react";

import "./App.css";
import TasksList from "./components/TasksList/TasksList";
import { AddForm } from "./components/AddForm/AddForm";
import { useSelector } from "react-redux";

function App() {
  const tasks = useSelector((state) => state.tasks.data);

  return (
    <div className="App ">
      <AddForm />
      <TasksList tasks={tasks} />
    </div>
  );
}

export default App;
