import { useState } from 'react'
import TaskCard from './TaskCard'
import Header from './header.jsx'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Header />
        
        <div className="flex flex-col lg:flex-row gap-6 justify-center">
          {/* Pending Tasks Section */}
          <div className="bg-white border-2 border-gray-300 rounded-xl p-6 shadow-lg flex-1 max-w-md">
            <h2 className="text-2xl font-bold p-2 text-orange-600 border-b border-orange-200 mb-4">
              Pending
            </h2>
            <div className="space-y-3">
              <TaskCard 
                title="Build the website with static content" 
                dueDate="10th April" 
                assigneeName="Rohit S"
              />
              <TaskCard 
                title="Add a blog section" 
                dueDate="15th April" 
                assigneeName="Rohit S"
              />
              <TaskCard 
                title="Implement user authentication" 
                dueDate="20th April" 
                assigneeName="Priya M"
              />
            </div>
          </div>

          {/* Done Tasks Section */}
          <div className="bg-white border-2 border-gray-300 rounded-xl p-6 shadow-lg flex-1 max-w-md">
            <h2 className="text-2xl font-bold p-2 text-green-600 border-b border-green-200 mb-4">
              Done
            </h2>
            <div className="space-y-3">
              <TaskCard 
                title="Design the mockup" 
                completedAtDate="10th April" 
                assigneeName="Rohit S"
              />
              <TaskCard 
                title="Get the approval from principal" 
                completedAtDate="20th April" 
                assigneeName="Ajay S"
              />
              <TaskCard 
                title="Set up development environment" 
                completedAtDate="5th April" 
                assigneeName="Priya M"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
