import React from 'react';
import './App.css';
import TaskCard from './TaskCard';

function App() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-center mb-8">
        <h1 className="font-bold text-4xl mb-2">Smarter Tasks</h1>
        <p className="text-gray-700">
          <b>Project:</b> Year Project 
        </p>
      </div>
      
      <div className="flex justify-center gap-4 w-full max-w-4xl">
        {/* Pending Tasks Column */}
        <div className="border p-4 rounded-xl w-1/2">
          <h2 className="font-bold text-3xl mb-4 text-gray-800">Pending</h2>
          <div className="space-y-4">
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
        </div>

        {/* Done Tasks Column */}
        <div className="border p-4 rounded-xl w-1/2">
          <h2 className="font-bold text-3xl mb-4 text-gray-800">Done</h2>
          <div className="space-y-4">
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
    </div>
  );
}

export default App;
