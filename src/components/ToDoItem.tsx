import React from "react";
import {
  itemStyles,
  buttonCompleteStyles,
  buttonDeleteStyles,
} from "../styles";
import { Task } from "../types";

interface ToDoItemProps {
  task: Task;
  toggleTask: () => void;
  deleteTask: () => void;
}

const ToDoItem: React.FC<ToDoItemProps> = ({
  task,
  toggleTask,
  deleteTask,
}) => {
  return (
    <li
      style={{
        ...itemStyles,
        textDecoration: task.completed ? "line-through" : "none",
      }}
    >
      {task.text}
      <div>
        <button onClick={toggleTask} style={buttonCompleteStyles}>
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button onClick={deleteTask} style={buttonDeleteStyles}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default ToDoItem;
