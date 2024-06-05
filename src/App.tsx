import React, { useState } from 'react';
import ToDoList from './components/ToDoList';
import { appStyles, inputStyles, buttonStyles } from './styles';

interface Task {
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [task, setTask] = useState<string>('');

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  };

  return (
    <div style={appStyles}>
      <h1>To-Do App</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={inputStyles}
        placeholder="Add a new task"
      />
      <button onClick={addTask} style={buttonStyles}>Add</button>
      <ToDoList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
