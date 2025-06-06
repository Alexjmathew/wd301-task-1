import React from 'react';
import './App.css';
import TaskCard from './TaskCard';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1 className="text-4xl font-bold">Smarter Tasks</h1>
        <p className="text-gray-700">
          <b>Project:</b> G
        </p>
      </div>

      <div className="task-boards">
        {/* Pending Tasks Board */}
        <div className="pending-board">
          <h2 className="text-3xl font-bold mb-4">Pending</h2>
          <TaskCard
            title="Build the website with static content"
            dueDate="11th April"
            assigneeName="Rohit S"
          />
          <TaskCard
            title="Add a blog"
            dueDate="22nd March"
            assigneeName="Rohit M"
          />
        </div>

        {/* Done Tasks Board */}
        <div className="done-board">
          <h2 className="text-3xl font-bold mb-4">Done</h2>
          <TaskCard
            title="Design the mockup"
            completedAtDate="10th April"
            assigneeName="Rohit M"
          />
          <TaskCard
            title="Get the approval from principal"
            completedAtDate="20th April"
            assigneeName="Ajay S"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
