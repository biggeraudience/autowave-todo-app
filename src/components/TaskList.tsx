// src/components/TaskList.tsx
import React from 'react';
import { Task } from '../types';
import TaskItem from './TaskItem';

interface TaskListProps {
  tasks: Task[];
  onRemoveTask: (taskId: string) => void;
  onToggleTaskCompletion: (taskId: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onRemoveTask, onToggleTaskCompletion }) => {
  if (tasks.length === 0) {
    return <p className="text-center text-gray-500">No tasks yet. Add some!</p>;
  }

  return (
    <ul className="space-y-3">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onRemove={onRemoveTask}
          onToggleCompletion={onToggleTaskCompletion}
        />
      ))}
    </ul>
  );
};

export default TaskList;