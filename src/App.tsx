// src/App.tsx
import React, { useState } from 'react';
import { Task } from './types';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (taskText: string) => {
    const newTask: Task = {
      id: Date.now().toString(), // Simple unique ID
      text: taskText,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const removeTask = (taskId: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const toggleTaskCompletion = (taskId: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          My Task Tracker
        </h1>
        <TaskInput onAddTask={addTask} />
        <TaskList
          tasks={tasks}
          onRemoveTask={removeTask}
          onToggleTaskCompletion={toggleTaskCompletion}
        />
      </div>
    </div>
  );
}

export default App;