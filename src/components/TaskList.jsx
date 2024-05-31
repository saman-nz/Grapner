import React, { useState } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  
  const addTask = () => {
    setTasks([...tasks, { id: Date.now(), text: task }]);
    setTask('');
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const updateTask = (id, newText) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, text: newText } : task)));
  };

  return (
    <div>
      <input value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input value={task.text} onChange={(e) => updateTask(task.id, e.target.value)} />
            <button onClick={() => removeTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

