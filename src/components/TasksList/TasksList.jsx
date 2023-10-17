import { useSelector } from "react-redux";
import { Task } from "../Task/Task";
const TasksList = ({ tasks, handleDelete, handleCheckBox, handleEdit }) => {

  
  return (
    <div className="container">
      <p className="text-center fs-3 mb-3">Let's get some work done</p>
      <div className="tasks-list text-start">
        {tasks.map((task, idx) => (
          <Task
        
            key={idx}
            task={task}
          />
        ))}
      </div>
    </div>
  );
};

export default TasksList;
