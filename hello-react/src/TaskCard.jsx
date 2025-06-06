import React from 'react';
import './TaskCard.css';

interface TaskCardProps {
  title: string;
  dueDate?: string;
  completedAtDate?: string;
  assigneeName: string;
}

const TaskCard: React.FC<TaskCardProps> = ({
  title,
  dueDate,
  completedAtDate,
  assigneeName
}) => {
  const statusText = completedAtDate 
    ? `Completed on: ${completedAtDate}`
    : `Due on: ${dueDate}`;

  return (
    <div className="TaskItem p-4 border rounded-lg shadow-sm mb-4 bg-white">
      <h2 className="text-xl font-bold mb-2 text-gray-800">{title}</h2>
      <p className="text-gray-600 mb-1">{statusText}</p>
      <p className="text-gray-600">Assignee: {assigneeName}</p>
    </div>
  );
};

export default TaskCard;
