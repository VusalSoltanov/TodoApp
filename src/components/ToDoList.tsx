import React from "react";
import ToDoItem from "./ToDoItem";
import { Task } from "../types";

interface ToDoListProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const ToDoList: React.FC<ToDoListProps> = ({ tasks, setTasks }) => {
  const toggleTask = (index: number) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <ul>
      {tasks.map((task, index) => (
        <ToDoItem
          key={index}
          task={task}
          toggleTask={() => toggleTask(index)}
          deleteTask={() => deleteTask(index)}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
