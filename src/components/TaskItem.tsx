// src/components/TaskItem.tsx
import React from 'react';
import { Task } from '../types';

interface TaskItemProps {
  task: Task;
  onRemove: (taskId: string) => void;
  onToggleCompletion: (taskId: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onRemove, onToggleCompletion }) => {
  return (
    <li className="flex items-center justify-between bg-gray-50 p-3 rounded-md shadow-sm">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleCompletion(task.id)}
          className="form-checkbox h-5 w-5 text-blue-600 rounded mr-3"
        />
        <span
          className={`text-lg ${
            task.completed ? 'line-through text-gray-500' : 'text-gray-800'
          }`}
        >
          {task.text}
        </span>
      </div>
      <button
        onClick={() => onRemove(task.id)}
        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-300 text-sm"
      >
        Remove
      </button>
    </li>
  );
};

export default TaskItem;